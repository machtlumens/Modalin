export const Role = {
  UMKM: "UMKM",
  INVESTOR: "INVESTOR",
  ADMIN: "ADMIN",
} as const;
export type Role = (typeof Role)[keyof typeof Role];

export const Sector = {
  F_AND_B: "F_AND_B",
  RETAIL: "RETAIL",
  AGRI: "AGRI",
  SERVICES: "SERVICES",
} as const;
export type Sector = (typeof Sector)[keyof typeof Sector];

export const PitchStatus = {
  DRAFT: "DRAFT",
  PENDING_REVIEW: "PENDING_REVIEW",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;
export type PitchStatus = (typeof PitchStatus)[keyof typeof PitchStatus];

export const TxnKind = {
  INFLOW: "INFLOW",
  OUTFLOW: "OUTFLOW",
} as const;
export type TxnKind = (typeof TxnKind)[keyof typeof TxnKind];

export const ReimbursementStatus = {
  AUTO_APPROVED: "AUTO_APPROVED",
  PENDING_ADMIN_REVIEW: "PENDING_ADMIN_REVIEW",
  BLOCKED_PRICE_CHECK: "BLOCKED_PRICE_CHECK",
  DISBURSED: "DISBURSED",
  REJECTED: "REJECTED",
} as const;
export type ReimbursementStatus = (typeof ReimbursementStatus)[keyof typeof ReimbursementStatus];
