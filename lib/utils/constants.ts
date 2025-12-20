// App constants

// Slippage tolerance in basis points (bps)
export const DEFAULT_SLIPPAGE_BPS = 50; // 0.5%
export const SLIPPAGE_OPTIONS = [10, 50, 100, 300]; // 0.1%, 0.5%, 1%, 3%

// Deadline in minutes
export const DEFAULT_DEADLINE_MINUTES = 20;

// Transaction confirmations
export const REQUIRED_CONFIRMATIONS = 1;

// Polling intervals (ms)
export const BALANCE_POLL_INTERVAL = 10000; // 10 seconds
export const QUOTE_POLL_INTERVAL = 5000; // 5 seconds

// Max uint256
export const MAX_UINT256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

// Zero address
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

// Price impact thresholds
export const PRICE_IMPACT_WARNING = 3; // 3%
export const PRICE_IMPACT_DANGER = 5; // 5%
