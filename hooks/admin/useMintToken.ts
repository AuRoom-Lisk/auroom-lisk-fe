import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { MockTokenABI } from '@/lib/contracts/abis/MockToken';
import { BaseError } from 'viem';

/**
 * Parse error message to user-friendly format
 */
function parseErrorMessage(error: Error | null): string {
    if (!error) return '';

    // Check if it's a BaseError from viem
    if (error instanceof BaseError) {
        const revertError = error.walk(err => err instanceof BaseError);
        if (revertError) {
            // Check for common errors
            if (revertError.message.includes('User rejected')) {
                return 'Transaction was rejected by user';
            }
            if (revertError.message.includes('insufficient funds')) {
                return 'Insufficient funds for gas';
            }
            if (revertError.message.includes('Ownable')) {
                return 'Only contract owner can mint tokens';
            }
            // Return the actual revert reason if available
            const match = revertError.message.match(/reverted with reason string '(.+)'/);
            if (match) {
                return match[1];
            }
        }
    }

    // Fallback to generic message
    return error.message || 'Transaction failed';
}

export function useMintToken(tokenAddress: `0x${string}`) {
    const {
        writeContract,
        data: hash,
        isPending: isWritePending,
        isSuccess: isWriteSuccess,
        error: writeError,
        reset
    } = useWriteContract();

    const {
        isLoading: isConfirming,
        isSuccess: isConfirmed,
        error: confirmError
    } = useWaitForTransactionReceipt({
        hash,
    });

    const mint = (recipient: `0x${string}`, amount: bigint) => {
        writeContract({
            address: tokenAddress,
            abi: MockTokenABI,
            functionName: 'mint',
            args: [recipient, amount],
        });
    };

    const error = writeError || confirmError;
    const errorMessage = parseErrorMessage(error);

    return {
        mint,
        hash,
        isPending: isWritePending,
        isConfirming,
        isSuccess: isConfirmed,
        error,
        errorMessage,
        reset,
    };
}
