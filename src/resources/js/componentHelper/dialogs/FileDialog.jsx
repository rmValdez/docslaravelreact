import React, { Fragment } from 'react';
import { capitalizeFirst, truncateText } from '../../../helpers/stringHelpers';
import { CustomDialog } from './CustomDialog';
import { Button, CardMedia, Divider, Grid } from '@mui/material';
import { ACCEPTED_LEAVE_FILE } from '../../../enums/attendanceEnums';
import { UploadTexfield } from '../form/FileUpload';

export const FileDialog = ({ open, handleClose, fileName, parseFileName, fileSrc, }) => {
  return (
    <CustomDialog dialogStatus={open} handleCloseDialog={() => handleClose()} title={truncateText(capitalizeFirst(fileName), 15)} dialogSize={'laptop'}>
      <Grid container spacing={2}>
        <Grid item
          spacing={0}
          xs={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
        // style={{ minHeight: '50vh',minWidth: '30vw' }}
        >
          <Divider variant='fullWidth' />
          <CardMedia
            component={parseFileName?.includes('.pdf') ? 'iframe' : 'img'}
            style={{ padding: 10, minHeight: parseFileName?.includes('.pdf') && '50vh', minWidth: parseFileName?.includes('.pdf') && '44vw' }}
            src={fileSrc}
          />
          <Divider variant='fullWidth' />

        </Grid>
      </Grid>
    </CustomDialog>
  );
};

export const ShowOrUploadFileDialog = (props) => {
  const {
    open,
    handleClose,
    fileName,
    parseFileName,
    fileSrc,
    file,
    handleFileChange,
    handleUpload,
    accepted = ACCEPTED_LEAVE_FILE
  } = props;

  return (
    <CustomDialog dialogStatus={open} handleCloseDialog={() => handleClose()} title={truncateText(capitalizeFirst(fileName), 15)} dialogSize={'laptop'}>
      <Grid container spacing={2} justifyContent={'flex-end'}>
        <Grid item
          spacing={0}
          mobile={12}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {
            !fileSrc ?
              <UploadTexfield
                value={file}
                placeholder={'Select File'}
                accepted={accepted}
                isImageValid={true}
                onChangeData={(value) => handleFileChange(value)}
              />
              :
              <Fragment>
                <Divider variant='fullWidth' />
                <CardMedia
                  component={parseFileName?.includes('.pdf') ? 'iframe' : 'img'}
                  style={{ padding: 10, minHeight: parseFileName?.includes('.pdf') ? '47vh' : '25vh', minWidth: parseFileName?.includes('.pdf') && '44vw' }}
                  src={fileSrc}
                />
                <Divider variant='fullWidth' />
              </Fragment>
          }
        </Grid>
        <Grid item mobile={2} sx={{display: fileSrc && 'none'}}>
          <Button fullWidth color='success' onClick={() => handleUpload(file)} disabled={!file}>
            Upload
          </Button>
        </Grid>
      </Grid>
    </CustomDialog>
  );
};