import { Box, Button, Dialog, DialogActions, DialogContent, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import { DateRange } from '../filters/filterComponents/DateRange';
import AutocompleteDeparments from '../filters/filterComponents/AutocompleteDepartments';
import AutocompleteEmployees from '../filters/filterComponents/AutocompleteEmployees';
import StatusSelect from '../filters/filterComponents/StatusSelect';
import { FormikAutocomplete } from '../form/FormikAutocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CutoffSelect, MonthPicker } from '../form/MonthCutoffDeptForm';
import { getCurrentCutoff } from '../../../helpers/cutoffHelper';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const defaultFields = {
  dateRange: true,
  cutoffBased: false,
  departments: true,
  status: true,
  sortBy: true,
  orderBy: true,
  employees: true,
  fields: true
};

const CustomExportDialog = (props) => {
  
  const {
    dialogStatus = false,
    title,
    subTitle,
    formik,
    additionalExportFields = [],
    handleClose,
    handleExport,
    handleFormValueChange,
    dialogSize = 'laptop',
    fullScreen = false,
    isLoading = false,
    minHeight,
    maxHeight,
    children,
    multipleDepartments = false,
    multipleEmployees = false,
    fields = [],
    fieldsToShow = {defaultFields},
    ...others
  } = props;

  const handleCloseDialog = () => {
    formik.resetForm();
    handleClose();
  };

  const currentDate = new Date();

  return (
    <Dialog open={dialogStatus} onClose={handleCloseDialog} {...others} maxWidth={dialogSize} fullScreen={fullScreen} >
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
          <Typography variant='h5'>{title}</Typography>
          <Typography mt={0.5}>{subTitle}</Typography>
        </Box>
      </Stack>
      {isLoading && <LinearProgress />}
      <DialogContent sx={{ minHeight: minHeight, maxHeight: maxHeight }}>
        <Stack gap={2}>

          {
            !fieldsToShow?.cutoffBased &&
            <DateRange
              orientation='row'
              dateValues={formik?.values}
              handleDateChanges={(field, value) => handleFormValueChange(field, value)}
              errors={formik?.errors}
            />
          }

          {
            fieldsToShow?.cutoffBased &&
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box display={'flex'} gap={2}>
                <MonthPicker
                  onChange={value => handleFormValueChange('month', value)}
                  disableFuture={others?.disableFuture}
                  value={formik?.values?.month}
                />
                <CutoffSelect
                  value={formik?.values?.cutoff ?? getCurrentCutoff()}
                  onChange={event => handleFormValueChange('cutoff', event.target.value)}
                  monthSelected={formik?.values?.month ? new Date(`${formik?.values?.month}-${formik?.values?.cutoff == 1 ? '01' : '16'}`) : currentDate}
                  disableFuture={others?.disableFuture}
                />
              </Box>
            </LocalizationProvider>
          }

          {
            (fieldsToShow?.status ?? defaultFields?.status) &&
            <StatusSelect
              title={''}
              handleStatusChanges={(value) => handleFormValueChange('status', value)}
              value={formik?.values?.status}
            />
          }
          {
            (fieldsToShow?.departments ?? defaultFields?.departments) &&
            <AutocompleteDeparments
              handleDepartmentChanges={(value) => {
                handleFormValueChange('employees',[]);
                handleFormValueChange('department', value);
              }}
              departmentValue={formik?.values?.department}
              multiple={multipleDepartments}
            />
          }

          {
            (fieldsToShow?.employees ?? defaultFields?.employees) &&
            <AutocompleteEmployees
              handleEmployeeChanges={(value) => handleFormValueChange('employees', value)}
              employeeValue={formik?.values?.employees}
              showEmployeeFilter={true}
              disableCloseOnSelect={true}
              multiple={multipleEmployees}
              departmentName={formik?.values?.department?.name}
              key={formik?.values?.department?.name}
              disablePortal={false}
            />
          }

          {
            additionalExportFields.map((additionalExportField, i) => {
              if (additionalExportField.type == 'FormikAutocomplete') {
                return (
                  <FormikAutocomplete
                    label={additionalExportField.label}
                    fieldval={formik?.values[additionalExportField.fieldchange] ?? []}
                    fieldchange={(value) => {
                      handleFormValueChange(additionalExportField.fieldchange, value);
                      if (additionalExportField.additionalAction) {
                        additionalExportField.additionalAction(value);
                      }
                    }}
                    options={additionalExportField.options}
                    optionLabel={additionalExportField.optionsLabel}
                    optionEqualValue={additionalExportField.optionsValue}
                    key={additionalExportField.key}
                    err={Boolean(formik?.errors[additionalExportField.fieldchange])}
                    helperText={formik?.errors[additionalExportField.fieldchange]}
                    disablePortal={additionalExportField?.disablePortal}
                  />
                );
              }
            })
          }

          {
            (fieldsToShow?.fields ?? defaultFields?.fields) &&
            <FormikAutocomplete
              label={'Export Field'}
              fieldval={formik?.values?.fields ?? []}
              fieldchange={(value) => handleFormValueChange('fields', value)}
              options={fields}
              optionLabel={'label'}
              optionEqualValue={'value'}
              multiple={true}
              disablePortal={false}
            />
          }

          {children}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color={'primary'} onClick={handleCloseDialog}>
          Cancel
        </Button>
        <Button color={'success'} onClick={() => handleExport()} disabled={!(formik.isValid)}>
          Export
        </Button>
      </DialogActions>
    </Dialog>
  );

};

export default CustomExportDialog;