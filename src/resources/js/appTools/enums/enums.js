
export const EMPLOYEE_FILTER = Object.freeze({
  ALL: { label: 'All', value: 'all' },
  ACTIVE: { label: 'Active', value: 'active' },
  INACTIVE: { label: 'Inactive', value: 'inactive' },
});

export const DEPARTMENT_FILTER = Object.freeze({
  ALL: { label: 'All', value: 'all' },
  ACTIVE: { label: 'Active', value: 'active' },
  INACTIVE: { label: 'Inactive', value: 'inactive' },
});

export const CREATED_AT = 'created_at';
export const LAST_NAME = 'users.last_name';
export const GROUPS_NAME = 'groups.name';


export const SORT_BY_CHOICES = Object.freeze({
  DATE_APPLIED: { label: 'Date Applied', value: CREATED_AT },
  LAST_NAME: { label: 'Last Name', value: LAST_NAME },
  DEPARTMENT: { label: 'Department', value: GROUPS_NAME },
});

export const ORDER_BY_CHOICES = Object.freeze({
  ASC: { label: 'Ascending', value: 'asc' },
  DESC: { label: 'Descending', value: 'desc' },
});

export const DRAWER_KEY = 'drawerMode';
export const DRAWER_DEFAULT = 'open';
export const THEME_KEY = 'theme';

export const STATUS_COLORS = Object.freeze({
  active: 'success',
  posted: 'success',
  archived: 'secondary',
  inactive: 'secondary',
  draft: 'info',
  paid: 'success',
  unpaid: 'info',
  approved: 'success'
});

export const POST_STATUS = Object.freeze([
  { label: 'Active', value: 'active' },
  { label: 'In-Active', value: 'inactive' },
  { label: 'Archived', value: 'archived' },
  { label: 'Draft', value: 'draft' }
]);

export const EMPLOYEE_FILE_UPLOAD_TYPES = Object.freeze([
  { label: 'Application Letter/ Biodata/ Resume/ CV', value: 'application-letter-biodata-resume-cv' },
  { label: 'Birth Certificate', value: 'birth-certificate' },
  { label: 'Dependent\'s Birth Certificate', value: 'depedents-birth-certificate' },
  { label: 'Marriage Certificate', value: 'marriage-certificate' },
  { label: 'Company ID', value: 'company-id' },
  { label: 'Government Issued ID', value: 'government-issued-id' },
  { label: 'Solo Parent ID', value: 'solo-parent-id' },
  { label: 'HMO Card', value: 'hmo-card' },
  { label: 'Health Certificate/Clearance', value: 'health-certificate-clearance' },
  { label: '(CPE)Contract of Probationary Employment', value: 'contract-of-probationary-employment' },
  { label: 'Renewal of CPE', value: 'renewal-of-cpe' },
  { label: 'Extension of Probationary Employment', value: 'extension-of-probationary-employment' },
  { label: 'Performance Evaluation', value: 'performance-evaluation' },
  { label: 'Lateral Transfer', value: 'lateral-transfer' },
  { label: 'Promotion', value: 'promotion' },
  { label: 'Salary Increase', value: 'salary-increase' },
  { label: 'Non Renewal or Non Regularization', value: 'non-renewal-or-non-regularization' },
  { label: 'Coaching Log', value: 'coaching-log' },
  { label: 'Disciplinary Memorandum (Written Reprimand/Warning)', value: 'disciplinary-memorandum' },
  { label: 'Notice to explain', value: 'notice-to-explain' },
  { label: 'Written Explanation/Response', value: 'written-explanation-response' },
  { label: 'Notice of Decision', value: 'notice-of-decision' },
  { label: 'Suspension', value: 'suspension' },
  { label: 'Resignation', value: 'resignation' },
  { label: 'Termination', value: 'termination' },
  { label: 'End of Contract', value: 'end-of-contract' },
  { label: 'Clearance', value: 'clearance' },
]);

export const ID_TYPES = Object.freeze([
  { label: 'SSS', value: 'sss' },
  { label: 'PhilHealth', value: 'philhealth' },
  { label: 'PagIbig', value: 'pagibig' },
  { label: 'UMID', value: 'umid' },
  { label: 'TIN', value: 'tin' },
  { label: 'Driver\'s License', value: 'drivers_license' },
  { label: 'Passport', value: 'passport' },
  { label: 'Health Card', value: 'health_card' },
]);

export const MY_WORK_TYPES = Object.freeze({
  ROSTER: 'ROSTER_CHANGE',
  TIMELOGS: 'TIMELOGS',
  BREAK_LOGS: 'BREAK_LOGS',
  REQUEST_ROSTER: 'ROSTER_REQUEST',
  LEAVES: 'LEAVE_DETAILS',
  APPLY_LEAVE: 'APPLY_LEAVE_REQUEST',
  SUSPENDED: 'SUSPENDED'
});

export const SUMMARY_TYPES = Object.freeze({
  SUSPENSION: {
    type: 'suspension',
  },
  LEAVES: {
    type: 'leaves',
  },
  SCHEDULE_REQUESTS: {
    type: 'schedule_requests',
  },
  TIMELOGS_REQUESTS: {
    type: 'timelogs_requests',
  },
});

export const DYNAMIC_FIELD_TYPES = Object.freeze({
  DATE_PICKER: 'FormikDatePicker',
  TEXT_FIELD: 'FormikTextField',
  AUTOCOMPLETE: 'FormikAutoComplete',
  TEXT_AREA: 'FormikTextArea',
});

export const MAIL_DOCUMENT_TYPES = Object.freeze([
  { label: 'Mail', value: 'mail' },
  { label: 'File', value: 'file' },
  { label: 'Description', value: 'description' },
  { label: 'Letter', value: 'letter' }
]);

export const CALENDAR_EVENT_TYPES = Object.freeze({
  HOLIDAY: 'Holiday',
  SPECIAL_HOLIDAY: 'Special Holiday',
  PAYDAY: 'Payday',
  EVENT: 'Event',
  LEGAL_HOLIDAY: 'Legal Holiday',
});

export const COMPANY_DETAILS = Object.freeze({
  COMPANY_NAME: 'New Media Services',
  ADDRESS: 'Staffhouse Road. PEZA-BCEZ Loakan Road',
  CITY: 'Baguio City',
  PROVINCE: 'Benguet',
  COUNTRY: 'Philippines',
  PHONE_NUMBER: '(074) 619 3904',
  MOBILE_NUMBER: '+63 917 623 3534',
  MAIL: 'hrd@nms.ph',
  LINK: 'https://www.nms.ph'
});

export const FILTER_POSITION_LEFT = Object.freeze({
  hovered: '118px',
  close: '-12px',
  open: '-25px',
});

export const EMPLOYEE_SECTION_TYPES = Object.freeze({
  PERSONAL_INFORMATION: 'Personal Information',
  ADDRESS_AND_CONTACT_INFORMATION: 'Address & Contact Information',
  PREVIOUS_EMPLOYER_DETAILS: 'Previous Employer Details',
  EMPLOYMENT_DETAILS: 'Employment Details',
  SALARY_AND_PAYROLL_DETAILS: 'Salary & Payroll Details',
  ALLOWANCES_DETAILS: 'Allowances Details',
  CONTRIBUTION_PAYABLE_DETAILS: 'Contribution Payable Details',
  LEAVE_DETAILS: 'Leave Details'
});

export const DEBOUNCE_DELAY = 800;