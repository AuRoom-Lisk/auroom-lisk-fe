import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GoldVaultABI } from '@/lib/contracts/abis';
import { LISK_CONTRACTS as CONTRACTS } from '@/lib/contracts/lisk_addresses';
import type { Address } from 'viem';

export function useGoldVault() {
    // Read: Total assets in vault
    const useTotalAssets = () => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'totalAssets',
            query: {
                refetchInterval: 10000,
            },
        });
    };

    // Read: Total supply of shares
    const useTotalSupply = () => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'totalSupply',
            query: {
                refetchInterval: 10000,
            },
        });
    };

    // Read: Convert assets to shares
    const useConvertToShares = (assets: bigint | undefined) => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'convertToShares',
            args: assets ? [assets] : undefined,
            query: {
                enabled: !!assets && assets > BigInt(0),
            },
        });
    };

    // Read: Convert shares to assets
    const useConvertToAssets = (shares: bigint | undefined) => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'convertToAssets',
            args: shares ? [shares] : undefined,
            query: {
                enabled: !!shares && shares > BigInt(0),
            },
        });
    };

    // Read: Preview deposit
    const usePreviewDeposit = (assets: bigint | undefined) => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'previewDeposit',
            args: assets ? [assets] : undefined,
            query: {
                enabled: !!assets && assets > BigInt(0),
            },
        });
    };

    // Read: Preview redeem
    const usePreviewRedeem = (shares: bigint | undefined) => {
        return useReadContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'previewRedeem',
            args: shares ? [shares] : undefined,
            query: {
                enabled: !!shares && shares > BigInt(0),
            },
        });
    };

    // Write: Deposit
    const { data: hash, writeContract, isPending, error } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    const deposit = (assets: bigint, receiver: Address) => {
        writeContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'deposit',
            args: [assets, receiver],
        });
    };

    const redeem = (shares: bigint, receiver: Address, owner: Address) => {
        writeContract({
            address: CONTRACTS.GoldVault,
            abi: GoldVaultABI,
            functionName: 'redeem',
            args: [shares, receiver, owner],
        });
    };

    return {
        useTotalAssets,
        useTotalSupply,
        useConvertToShares,
        useConvertToAssets,
        usePreviewDeposit,
        usePreviewRedeem,
        deposit,
        redeem,
        hash,
        isPending,
        isConfirming,
        isSuccess,
        error,
    };
}
