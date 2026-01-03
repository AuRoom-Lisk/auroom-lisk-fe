/**
 * Instant Borrow V2 - Calculation Utilities
 * 
 * Core calculation logic for revolutionary single-input UX
 * User inputs borrow amount + selects LTV → System calculates required collateral
 */

export interface BorrowCalculation {
    borrowAmount: bigint;         // IDRX to borrow (input)
    ltvBps: number;               // LTV in basis points (input)
    collateralRequired: bigint;   // XAUT needed (calculated)
    collateralValue: bigint;      // Value in IDRX (calculated)
    fee: bigint;                  // 0.5% fee
    amountReceived: bigint;       // After fee deduction
    liquidationBuffer: number;    // Percentage buffer to liquidation
    priceDropBuffer: number;      // How much price can drop (%)
}

/**
 * Calculate required XAUT collateral based on borrow amount and LTV
 * 
 * Formula:
 * collateralValue = borrowAmount / (LTV / 10000)
 * collateralXAUT = (collateralValue * 1e8) / xautPrice
 * 
 * Example:
 * - borrowAmount = 1,000,000 IDRX (Rp 1 juta)
 * - LTV = 30% (3000 bps)
 * - xautPrice = 42,660,000 IDRX per XAUT (with 8 decimals)
 * 
 * collateralValue = 1,000,000 / 0.30 = 3,333,333 IDRX
 * collateralXAUT = (3,333,333 * 1e8) / 4,266,000,000,000,000 = 0.0781 XAUT
 */
export function calculateInstantBorrow(
    borrowAmount: bigint,
    ltvBps: number,
    xautPrice: bigint,
    feeBps: number = 50
): BorrowCalculation {
    if (borrowAmount === 0n || ltvBps === 0) {
        return {
            borrowAmount: 0n,
            ltvBps: 0,
            collateralRequired: 0n,
            collateralValue: 0n,
            fee: 0n,
            amountReceived: 0n,
            liquidationBuffer: 0,
            priceDropBuffer: 0,
        };
    }

    // collateralValue = borrowAmount * 10000 / ltvBps
    const collateralValue = (borrowAmount * 10000n) / BigInt(ltvBps);

    // collateralRequired = (collateralValue * 1e8) / xautPrice
    // Adding small buffer to avoid rounding issues
    const collateralRequired = (collateralValue * BigInt(1e8) + xautPrice - 1n) / xautPrice;

    // fee = borrowAmount * feeBps / 10000
    const fee = (borrowAmount * BigInt(feeBps)) / 10000n;

    // amountReceived = borrowAmount - fee
    const amountReceived = borrowAmount - fee;

    // liquidationBuffer = (90% - currentLTV) in percentage points
    const liquidationLTV = 9000; // 90%
    const liquidationBuffer = (liquidationLTV - ltvBps) / 100; // Convert to percentage

    // priceDropBuffer = how much gold price can drop before liquidation
    // If LTV is 30%, price can drop to (30/90) = 33.3% of current value
    // So price can drop by (1 - 30/90) = 66.7%
    const priceDropBuffer = Math.round((1 - (ltvBps / liquidationLTV)) * 100);

    return {
        borrowAmount,
        ltvBps,
        collateralRequired,
        collateralValue,
        fee,
        amountReceived,
        liquidationBuffer,
        priceDropBuffer,
    };
}

/**
 * Calculate maximum borrow amount based on XAUT balance and LTV
 */
export function calculateMaxBorrowForLTV(
    xautBalance: bigint,
    xautPrice: bigint,
    ltvBps: number
): bigint {
    if (xautBalance === 0n || ltvBps === 0) return 0n;

    // maxCollateralValue = (xautBalance * xautPrice) / 1e8
    const maxCollateralValue = (xautBalance * xautPrice) / BigInt(1e8);

    // maxBorrow = (maxCollateralValue * ltvBps) / 10000
    const maxBorrow = (maxCollateralValue * BigInt(ltvBps)) / 10000n;

    return maxBorrow;
}

/**
 * Check if user has sufficient XAUT balance
 */
export function hasSufficientBalance(
    required: bigint,
    balance: bigint
): boolean {
    return balance >= required;
}

/**
 * Calculate XAUT balance available in IDRX terms
 */
export function calculateAvailableInIDRX(
    xautBalance: bigint,
    xautPrice: bigint,
    ltvBps: number
): bigint {
    return calculateMaxBorrowForLTV(xautBalance, xautPrice, ltvBps);
}
