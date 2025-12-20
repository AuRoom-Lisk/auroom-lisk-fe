import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { ERC20ABI } from '@/lib/contracts/abis';
import { MAX_UINT256 } from '@/lib/utils/constants';
import type { Address } from 'viem';

export function useTokenApproval(tokenAddress: Address | undefined) {
    const { data: hash, writeContract, isPending, error } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    const approve = (spenderAddress: Address, amount: bigint = MAX_UINT256) => {
        if (!tokenAddress) return;

        writeContract({
            address: tokenAddress,
            abi: ERC20ABI,
            functionName: 'approve',
            args: [spenderAddress, amount],
        });
    };

    return {
        approve,
        hash,
        isPending,
        isConfirming,
        isSuccess,
        error,
    };
}
