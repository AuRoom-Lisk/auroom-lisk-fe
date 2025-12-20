import BigNumber from 'bignumber.js';

/**
 * Format a number with commas and decimals
 */
export function formatNumber(value: number | string, decimals: number = 2): string {
    const bn = new BigNumber(value);
    return bn.toFormat(decimals);
}

/**
 * Format currency with symbol
 */
export function formatCurrency(value: number | string, symbol: string = '$', decimals: number = 2): string {
    return `${symbol}${formatNumber(value, decimals)}`;
}

/**
 * Format token amount from BigInt with proper decimals
 */
export function formatTokenAmount(amount: bigint, decimals: number = 6, displayDecimals: number = 4): string {
    const bn = new BigNumber(amount.toString());
    const divisor = new BigNumber(10).pow(decimals);
    const result = bn.dividedBy(divisor);
    return result.toFormat(displayDecimals);
}

/**
 * Parse token amount from string to BigInt
 */
export function parseTokenAmount(amount: string, decimals: number = 6): bigint {
    if (!amount || amount === '') return BigInt(0);

    const bn = new BigNumber(amount);
    const multiplier = new BigNumber(10).pow(decimals);
    const result = bn.multipliedBy(multiplier);

    return BigInt(result.toFixed(0));
}

/**
 * Truncate Ethereum address
 */
export function formatAddress(address: string, startChars: number = 6, endChars: number = 4): string {
    if (!address) return '';
    if (address.length < startChars + endChars) return address;

    return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Format percentage
 */
export function formatPercentage(value: number | string, decimals: number = 2): string {
    const bn = new BigNumber(value);
    return `${bn.toFormat(decimals)}%`;
}

/**
 * Format transaction hash
 */
export function formatTxHash(hash: string): string {
    return formatAddress(hash, 10, 8);
}

/**
 * Format large numbers with K, M, B suffixes
 */
export function formatCompactNumber(value: number | string): string {
    const bn = new BigNumber(value);

    if (bn.isGreaterThanOrEqualTo(1e9)) {
        return `${bn.dividedBy(1e9).toFormat(2)}B`;
    } else if (bn.isGreaterThanOrEqualTo(1e6)) {
        return `${bn.dividedBy(1e6).toFormat(2)}M`;
    } else if (bn.isGreaterThanOrEqualTo(1e3)) {
        return `${bn.dividedBy(1e3).toFormat(2)}K`;
    }

    return bn.toFormat(2);
}

/**
 * Get block explorer URL for transaction
 */
export function getExplorerTxUrl(txHash: string): string {
    const explorerUrl = process.env.NEXT_PUBLIC_EXPLORER_URL || 'https://sepolia.mantlescan.xyz';
    return `${explorerUrl}/tx/${txHash}`;
}
