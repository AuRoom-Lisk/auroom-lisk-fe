import { defineChain } from 'viem';

export const mantleSepolia = defineChain({
    id: 5003,
    name: 'Mantle Sepolia',
    network: 'mantle-sepolia',
    nativeCurrency: {
        name: 'MNT',
        symbol: 'MNT',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.sepolia.mantle.xyz'],
        },
        public: {
            http: ['https://rpc.sepolia.mantle.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Mantle Sepolia Explorer',
            url: 'https://sepolia.mantlescan.xyz',
        },
    },
    testnet: true,
});

export const liskSepolia = defineChain({
    id: 4202,
    name: 'Lisk Sepolia',
    network: 'lisk-sepolia',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.sepolia-api.lisk.com'],
        },
        public: {
            http: ['https://rpc.sepolia-api.lisk.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Lisk Sepolia Explorer',
            url: 'https://sepolia-blockscout.lisk.com',
        },
    },
    testnet: true,
});
