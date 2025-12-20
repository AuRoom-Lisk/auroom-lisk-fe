import { useReadContract } from 'wagmi';
import { ERC20ABI } from '@/lib/contracts/abis';
import type { Address } from 'viem';

export function useTokenBalance(tokenAddress: Address | undefined, userAddress: Address | undefined) {
    return useReadContract({
        address: tokenAddress,
        abi: ERC20ABI,
        functionName: 'balanceOf',
        args: userAddress ? [userAddress] : undefined,
        query: {
            enabled: !!tokenAddress && !!userAddress,
            refetchInterval: 10000, // Refetch every 10 seconds
        },
    });
}
