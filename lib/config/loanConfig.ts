/**
 * Loan Configuration for Pinjam Tunai
 * 
 * Fixed parameters hidden from users
 */

export const LOAN_CONFIG = {
    // Fixed LTV at 30% - user never sees or chooses this
    FIXED_LTV_BPS: 3000,

    // Fee 0.5%
    FEE_BPS: 50,

    // Token decimals
    DECIMALS: 6,

    // Price decimals (XAUT price has 8 decimals)
    PRICE_DECIMALS: 8,
} as const;
