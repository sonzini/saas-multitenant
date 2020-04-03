export const NOTIFICATION_TEMPLATE_TYPES = Object.freeze({
  EMAIL: 'EMAIL',
  SMS: 'SMS',
});

export const ACCOUNT_STATUS = Object.freeze({
  INITIALIZED: 'INITIALIZED',
  ACTIVE: 'ACTIVE',
  SUSPEND: 'SUSPEND',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED',
});

export const PAYMENT_SCENARIOS = Object.freeze({
  CASH: 'CASH',
  STRIPE: 'STRIPE',
});

export const PAYMENT_STATUS = Object.freeze({
  PENDING: 'PENDING',
  IN_PROCESS: 'IN_PROCESS',
  PAID: 'PAID',
  REJECTED: 'REJECTED',
});

export const PLAN_TYPES = Object.freeze({
  CUSTOM: 'CUSTOM',
  BASIC: 'BASIC',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM',
});

export const PLAN_STATUS = Object.freeze({
  INITIALIZED: 'INITIALIZED',
  ACTIVE: 'ACTIVE',
  SUSPEND: 'SUSPEND',
});

export const PRODUCT_STATUS = Object.freeze({
  BETA: 'BETA',
  ACTIVE: 'ACTIVE',
  DEPRECATED: 'DEPRECATED',
});

export const PERIOD_TYPES = Object.freeze({
  DAYS: 'DAYS',
  WEEKS: 'WEEKS',
  MONTHS: 'MONTHS',
  YEARS: 'YEARS',
});

export const USER_ROLES = Object.freeze({
  ADMIN: 'ADMIN',
  FINANCIAL: 'FINANCIAL',
});