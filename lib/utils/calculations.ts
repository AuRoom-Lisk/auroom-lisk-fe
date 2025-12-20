import BigNumber from 'bignumber.js';

/**
 * Calculate price impact percentage
 */
export function calculatePriceImpact(
    inputAmount: bigint,
    outputAmount: bigint,
    inputReserve: bigint,
    outputReserve: bigint,
    inputDecimals: number = 6,
    outputDecimals: number = 6
): number {
    if (inputReserve === BigInt(0) || outputReserve === BigInt(0)) return 0;

    // Current price (reserve ratio)
    const currentPrice = new BigNumber(outputReserve.toString())
        .dividedBy(new BigNumber(inputReserve.toString()));

    // Execution price
    const executionPrice = new BigNumber(outputAmount.toString())
        .dividedBy(new BigNumber(inputAmount.toString()));

    // Price impact = (executionPrice - currentPrice) / currentPrice * 100
    const priceImpact = executionPrice
        .minus(currentPrice)
        .dividedBy(currentPrice)
        .multipliedBy(100)
        .abs();

    return priceImpact.toNumber();
}

/**
 * Calculate minimum received with slippage tolerance
 */
export function calculateMinimumReceived(
    outputAmount: bigint,
    slippageBps: number = 50 // 0.5% = 50 bps
): bigint {
    const bn = new BigNumber(outputAmount.toString());
    const slippageMultiplier = new BigNumber(10000 - slippageBps).dividedBy(10000);
    const result = bn.multipliedBy(slippageMultiplier);

    return BigInt(result.toFixed(0));
}

/**
 * Calculate deadline timestamp
 */
export function calculateDeadline(minutesFromNow: number = 20): bigint {
    const now = Math.floor(Date.now() / 1000);
    const deadline = now + (minutesFromNow * 60);
    return BigInt(deadline);
}

/**
 * Calculate APY from vault data (simplified)
 */
export function calculateAPY(
    totalAssets: bigint,
    totalSupply: bigint,
    initialSharePrice: bigint = BigInt(1e6),
    daysElapsed: number = 365
): number {
    if (totalSupply === BigInt(0)) return 0;

    const currentSharePrice = new BigNumber(totalAssets.toString())
        .dividedBy(new BigNumber(totalSupply.toString()));

    const initialPrice = new BigNumber(initialSharePrice.toString()).dividedBy(1e6);

    const priceIncrease = currentSharePrice.minus(initialPrice).dividedBy(initialPrice);
    const apy = priceIncrease.multipliedBy(365).dividedBy(daysElapsed).multipliedBy(100);

    return apy.toNumber();
}

/**
 * Convert shares to assets (ERC-4626)
 */
export function convertToAssets(
    shares: bigint,
    totalAssets: bigint,
    totalSupply: bigint
): bigint {
    if (totalSupply === BigInt(0)) return shares;

    const bn = new BigNumber(shares.toString());
    const assets = bn
        .multipliedBy(new BigNumber(totalAssets.toString()))
        .dividedBy(new BigNumber(totalSupply.toString()));

    return BigInt(assets.toFixed(0));
}

/**
 * Convert assets to shares (ERC-4626)
 */
export function convertToShares(
    assets: bigint,
    totalAssets: bigint,
    totalSupply: bigint
): bigint {
    if (totalAssets === BigInt(0)) return assets;

    const bn = new BigNumber(assets.toString());
    const shares = bn
        .multipliedBy(new BigNumber(totalSupply.toString()))
        .dividedBy(new BigNumber(totalAssets.toString()));

    return BigInt(shares.toFixed(0));
}
