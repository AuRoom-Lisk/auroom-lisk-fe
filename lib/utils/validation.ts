import { isAddress } from 'viem';

/**
 * Validate if input is a valid number
 */
export function isValidAmount(value: string): boolean {
    if (!value || value === '') return false;

    // Check if it's a valid number
    const regex = /^\d*\.?\d*$/;
    if (!regex.test(value)) return false;

    // Check if it's not just a dot
    if (value === '.') return false;

    // Check if it's a positive number
    const num = parseFloat(value);
    if (isNaN(num) || num <= 0) return false;

    return true;
}

/**
 * Validate Ethereum address
 */
export function isValidAddress(address: string): boolean {
    return isAddress(address);
}

/**
 * Validate slippage percentage (0-100)
 */
export function isValidSlippage(slippage: number): boolean {
    return slippage >= 0 && slippage <= 100;
}

/**
 * Validate deadline (must be in the future)
 */
export function isValidDeadline(deadline: number): boolean {
    const now = Math.floor(Date.now() / 1000);
    return deadline > now;
}

/**
 * Check if amount is greater than balance
 */
export function isInsufficientBalance(amount: bigint, balance: bigint): boolean {
    return amount > balance;
}
