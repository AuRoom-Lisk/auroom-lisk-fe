import { useReadContract, useAccount } from 'wagmi';
import { MockTokenABI } from '@/lib/contracts/abis/MockToken';

/**
 * Hook to check if current user is the owner of a contract
 */
export function useCheckOwner(tokenAddress: `0x${string}`) {
    const { address } = useAccount();

    const { data: owner, isLoading } = useReadContract({
        address: tokenAddress,
        abi: MockTokenABI,
        functionName: 'owner',
    });

    const isOwner = address && owner ? address.toLowerCase() === (owner as string).toLowerCase() : false;

    return {
        owner: owner as `0x${string}` | undefined,
        isOwner,
        isLoading,
    };
}
