export const DRAFT = 'draft';
export const ONGOING = 'ongoing';
export const LOCKED = 'locked';
export const ACTIVE = 'active';
export const ACTIVE_BREAK = 'active_break';
export const INACTIVE = 'inactive';
export const DELETED = 'deleted';
export const PENDING = 'pending';
export const PENDING_DELETE = 'pending-delete';
export const REJECTED = 'rejected';
export const ACKNOWLEDGED = 'acknowledged';
export const APPROVED = 'approved';
export const CANCELLED = 'cancelled';
export const UNAUTHORIZED = 'unauthorized';
export const RESIGNED = 'resigned';
export const ALLOWED = 'allowed';
export const EXCLUDED = 'excluded';
export const SCHEDULED = 'scheduled';
export const DONE = 'done';

export const STATUSES = Object.freeze([
  ACTIVE,
  INACTIVE,
  PENDING,
  PENDING_DELETE,
  REJECTED,
  ACKNOWLEDGED,
  APPROVED,
  CANCELLED,
  UNAUTHORIZED
]);

export const ATS_DASHBOARD_LOGS_STATUS = Object.freeze([
  ACTIVE,
  INACTIVE,
  PENDING_DELETE,
  PENDING
]);

export const MAIL_DOCUMENT_STATUSES = Object.freeze([
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Excluded', value: 'excluded' },
]);

export const STATUS_PRODUCTION = [
  {name: 'Active',value: 'active'},
  {name: 'Inactive',value: 'inactive'}
];

export const STATUS_PAYDAY = [
  {value: 'approved', name: 'APPROVED'},
  {value: 'pending',name: 'PENDING'}
];

export const DELAYED_DATA_STATUSES = [
  { label: 'DONE', value: 'done' },
  { label: 'CANCELLED', value: 'cancelled' },
  { label: 'SCHEDULED', value: 'scheduled' },
];
