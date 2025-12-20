# AuRoom Protocol - Frontend Development Guide
## Comprehensive Documentation for Building the Web Application

**Project:** AuRoom Protocol  
**Version:** 1.0.0  
**Created:** December 20, 2024  
**Network:** Mantle Sepolia (Chain ID: 5003)  
**Status:** Smart Contracts ✅ Complete | Frontend ⏳ In Development

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Contract Addresses & ABIs](#3-contract-addresses--abis)
4. [Project Structure](#4-project-structure)
5. [Setup & Installation](#5-setup--installation)
6. [Core Features](#6-core-features)
7. [Pages Specification](#7-pages-specification)
8. [Components Library](#8-components-library)
9. [Hooks & Contract Interactions](#9-hooks--contract-interactions)
10. [User Flows](#10-user-flows)
11. [Styling & Design System](#11-styling--design-system)
12. [Error Handling](#12-error-handling)
13. [Testing](#13-testing)
14. [Deployment](#14-deployment)
15. [Checklist](#15-checklist)

---

## 1. Project Overview

### 1.1 What is AuRoom Protocol?

AuRoom Protocol adalah platform RWA (Real World Asset) yang memungkinkan pengguna Indonesia untuk:

1. **Swap** IDRX (Indonesian Rupiah stablecoin) ke XAUT (tokenized gold)
2. **Stake** XAUT ke GoldVault untuk mendapatkan gXAUT (yield-bearing token)
3. **Earn Yield** dari LP provision di DEX
4. **Withdraw** kapan saja dengan yield yang terakumulasi

### 1.2 Target Users

- Retail investors Indonesia yang ingin investasi emas digital
- Crypto-native users yang ingin diversifikasi ke RWA
- DeFi users yang mencari yield dari gold-backed assets

### 1.3 Key Value Propositions

| Feature | Description |
|---------|-------------|
| **Compliant** | ERC-3643 simplified untuk KYC/identity verification |
| **Productive** | Yield dari LP provision (bukan idle gold) |
| **Simple UX** | One-click swap dari Rupiah ke yield-bearing gold |
| **Transparent** | On-chain, auditable, real-time pricing |

### 1.4 Hackathon Context

- **Hackathon:** Mantle Global Hackathon 2025
- **Track:** RWA (Real World Assets)
- **Prize Pool:** $150,000
- **Deadline:** December 31, 2025

---

## 2. Tech Stack

### 2.1 Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **TypeScript** | 5.x | Type safety |
| **React** | 18.x | UI library |

### 2.2 Web3 Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **wagmi** | 2.x | React hooks for Ethereum |
| **viem** | 2.x | TypeScript Ethereum library |
| **@rainbow-me/rainbowkit** | 2.x | Wallet connection UI |

### 2.3 Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.x | Utility-first CSS |
| **shadcn/ui** | latest | Pre-built components |
| **Lucide Icons** | latest | Icon library |

### 2.4 State Management & Utilities

| Technology | Purpose |
|------------|---------|
| **TanStack Query** | Server state management (via wagmi) |
| **zustand** | Client state (optional) |
| **date-fns** | Date formatting |
| **bignumber.js** | Precise number handling |

### 2.5 Development Tools

| Technology | Purpose |
|------------|---------|
| **ESLint** | Linting |
| **Prettier** | Code formatting |
| **Husky** | Git hooks |

---

## 3. Contract Addresses & ABIs

### 3.1 Deployed Contracts (Mantle Sepolia)

```typescript
// lib/contracts/addresses.ts

export const CONTRACTS = {
  // ===== TOKENS =====
  IDRX: "0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05" as const,
  USDC: "0x96ABff3a2668B811371d7d763f06B3832CEdf38d" as const,
  XAUT: "0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78" as const,
  
  // ===== INFRASTRUCTURE =====
  IdentityRegistry: "0x620870d419F6aFca8AFed5B516619aa50900cadc" as const,
  UniswapV2Factory: "0x8950d0D71a23085C514350df2682c3f6F1D7aBFE" as const,
  UniswapV2Router: "0x54166b2C5e09f16c3c1D705FfB4eb29a069000A9" as const,
  
  // ===== LIQUIDITY PAIRS =====
  IDRX_USDC_Pair: "0xD3FF8e1C2821745513Ef83f3551668A7ce791Fe2" as const,
  XAUT_USDC_Pair: "0xc2da5178F53f45f604A275a3934979944eB15602" as const,
  
  // ===== CORE PROTOCOL =====
  SwapRouter: "0xF948Dd812E7fA072367848ec3D198cc61488b1b9" as const,
  GoldVault: "0xd92cE2F13509840B1203D35218227559E64fbED0" as const,
} as const;

export type ContractName = keyof typeof CONTRACTS;
```

### 3.2 Chain Configuration

```typescript
// lib/contracts/chains.ts

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
```

### 3.3 Token Configuration

```typescript
// lib/contracts/tokens.ts

export const TOKENS = {
  IDRX: {
    address: CONTRACTS.IDRX,
    symbol: "IDRX",
    name: "Indonesian Rupiah",
    decimals: 6,
    icon: "/tokens/idrx.svg",
    color: "#E11D48",
  },
  USDC: {
    address: CONTRACTS.USDC,
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    icon: "/tokens/usdc.svg",
    color: "#2775CA",
  },
  XAUT: {
    address: CONTRACTS.XAUT,
    symbol: "XAUT",
    name: "Tether Gold",
    decimals: 6,
    icon: "/tokens/xaut.svg",
    color: "#F7931A",
  },
  gXAUT: {
    address: CONTRACTS.GoldVault,
    symbol: "gXAUT",
    name: "Gold Vault Token",
    decimals: 6,
    icon: "/tokens/gxaut.svg",
    color: "#FFD700",
  },
} as const;
```

### 3.4 ABI Files Required

```
lib/contracts/abis/
├── ERC20.json           # Standard ERC20 ABI
├── IdentityRegistry.json
├── SwapRouter.json
├── GoldVault.json       # ERC4626 + custom
├── UniswapV2Router.json
└── UniswapV2Pair.json
```

**Note:** ABI files akan di-generate dari artifacts Foundry atau copy dari deployment.

---

## 4. Project Structure

```
auroom-frontend/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── swap/
│   │   └── page.tsx             # Swap page
│   ├── vault/
│   │   └── page.tsx             # Vault/Stake page
│   ├── verify/
│   │   └── page.tsx             # KYC verification page
│   ├── portfolio/
│   │   └── page.tsx             # User portfolio (optional)
│   └── globals.css              # Global styles
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── tabs.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   │
│   ├── shared/                  # Shared/common components
│   │   ├── TokenInput.tsx
│   │   ├── TokenSelect.tsx
│   │   ├── TokenBalance.tsx
│   │   ├── TokenIcon.tsx
│   │   ├── WalletButton.tsx
│   │   ├── ConnectWallet.tsx
│   │   ├── TransactionModal.tsx
│   │   ├── TransactionStatus.tsx
│   │   ├── VerificationBadge.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── NumberDisplay.tsx
│   │   └── SlippageSettings.tsx
│   │
│   └── features/                # Feature-specific components
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── Stats.tsx
│       │   ├── Features.tsx
│       │   └── HowItWorks.tsx
│       │
│       ├── swap/
│       │   ├── SwapCard.tsx
│       │   ├── SwapInput.tsx
│       │   ├── SwapQuote.tsx
│       │   ├── SwapButton.tsx
│       │   ├── SwapSettings.tsx
│       │   └── SwapConfirmModal.tsx
│       │
│       ├── vault/
│       │   ├── VaultStats.tsx
│       │   ├── VaultPosition.tsx
│       │   ├── DepositForm.tsx
│       │   ├── WithdrawForm.tsx
│       │   ├── DepositConfirmModal.tsx
│       │   └── WithdrawConfirmModal.tsx
│       │
│       └── verify/
│           ├── VerificationStatus.tsx
│           ├── VerificationForm.tsx
│           └── AdminPanel.tsx
│
├── hooks/                       # Custom React hooks
│   ├── contracts/
│   │   ├── useSwapRouter.ts
│   │   ├── useGoldVault.ts
│   │   ├── useIdentityRegistry.ts
│   │   ├── useTokenBalance.ts
│   │   ├── useTokenAllowance.ts
│   │   └── useTokenApproval.ts
│   │
│   ├── useTokenPrices.ts
│   ├── useUserPosition.ts
│   ├── useVaultStats.ts
│   └── useVerificationStatus.ts
│
├── lib/                         # Utilities & configurations
│   ├── contracts/
│   │   ├── addresses.ts
│   │   ├── chains.ts
│   │   ├── tokens.ts
│   │   └── abis/
│   │       └── *.json
│   │
│   ├── utils/
│   │   ├── format.ts           # Number/currency formatting
│   │   ├── calculations.ts     # Price/amount calculations
│   │   ├── validation.ts       # Input validation
│   │   └── constants.ts        # App constants
│   │
│   └── wagmi.ts                # Wagmi configuration
│
├── providers/                   # React context providers
│   ├── Web3Provider.tsx
│   ├── ThemeProvider.tsx
│   └── ToastProvider.tsx
│
├── types/                       # TypeScript types
│   ├── index.ts
│   ├── contracts.ts
│   ├── tokens.ts
│   └── transactions.ts
│
├── styles/                      # Additional styles
│   └── fonts.ts
│
├── public/                      # Static assets
│   ├── tokens/                 # Token icons
│   │   ├── idrx.svg
│   │   ├── usdc.svg
│   │   ├── xaut.svg
│   │   └── gxaut.svg
│   ├── logo.svg
│   └── favicon.ico
│
├── .env.local                   # Environment variables
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Setup & Installation

### 5.1 Prerequisites

```bash
# Required
node >= 18.0.0
npm >= 9.0.0 or pnpm >= 8.0.0

# Recommended
pnpm (faster than npm)
```

### 5.2 Create Project

```bash
# Create Next.js project
npx create-next-app@latest auroom-frontend --typescript --tailwind --eslint --app --src-dir=false

# Navigate to project
cd auroom-frontend
```

### 5.3 Install Dependencies

```bash
# Web3 dependencies
pnpm add wagmi viem @tanstack/react-query
pnpm add @rainbow-me/rainbowkit

# UI dependencies
pnpm add tailwindcss-animate class-variance-authority clsx tailwind-merge
pnpm add lucide-react
pnpm add @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-toast
pnpm add @radix-ui/react-slot @radix-ui/react-tooltip

# Utility dependencies
pnpm add bignumber.js date-fns

# Dev dependencies
pnpm add -D @types/node
```

### 5.4 Setup shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add button card input dialog tabs toast
npx shadcn-ui@latest add dropdown-menu skeleton badge separator
```

### 5.5 Environment Variables

```bash
# .env.local

# Network
NEXT_PUBLIC_CHAIN_ID=5003
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia.mantle.xyz
NEXT_PUBLIC_EXPLORER_URL=https://sepolia.mantlescan.xyz

# Contracts
NEXT_PUBLIC_IDRX_ADDRESS=0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05
NEXT_PUBLIC_USDC_ADDRESS=0x96ABff3a2668B811371d7d763f06B3832CEdf38d
NEXT_PUBLIC_XAUT_ADDRESS=0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78
NEXT_PUBLIC_IDENTITY_REGISTRY_ADDRESS=0x620870d419F6aFca8AFed5B516619aa50900cadc
NEXT_PUBLIC_SWAP_ROUTER_ADDRESS=0xF948Dd812E7fA072367848ec3D198cc61488b1b9
NEXT_PUBLIC_GOLD_VAULT_ADDRESS=0xd92cE2F13509840B1203D35218227559E64fbED0
NEXT_PUBLIC_UNISWAP_ROUTER_ADDRESS=0x54166b2C5e09f16c3c1D705FfB4eb29a069000A9

# WalletConnect (optional - get from cloud.walletconnect.com)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

### 5.6 Run Development Server

```bash
pnpm dev
```

---

## 6. Core Features

### 6.1 Feature Matrix

| Feature | Priority | Status | Page |
|---------|----------|--------|------|
| Wallet Connection | P0 | Required | All |
| Verification Check | P0 | Required | All |
| Swap IDRX → XAUT | P0 | Required | /swap |
| Swap XAUT → IDRX | P0 | Required | /swap |
| Swap Quote Display | P0 | Required | /swap |
| Deposit to Vault | P0 | Required | /vault |
| Withdraw from Vault | P0 | Required | /vault |
| Portfolio Display | P1 | Important | /portfolio |
| Transaction History | P2 | Nice-to-have | /portfolio |
| Dark Mode | P2 | Nice-to-have | All |

### 6.2 Feature Descriptions

#### 6.2.1 Wallet Connection
- Support MetaMask, WalletConnect, Coinbase Wallet
- Auto-detect network and prompt switch to Mantle Sepolia
- Display connected address (truncated)
- Show native balance (MNT)

#### 6.2.2 Verification Check
- Check IdentityRegistry on every protected action
- Show badge if verified / warning if not
- Block swap/vault operations for unverified users
- Redirect to /verify page if needed

#### 6.2.3 Swap Feature
- Two-way swap: IDRX ↔ XAUT
- Real-time quote from SwapRouter
- Slippage tolerance settings (0.5%, 1%, 3%, custom)
- Price impact warning (>3% = yellow, >5% = red)
- Approval flow if needed
- Transaction confirmation modal

#### 6.2.4 Vault Feature
- Deposit XAUT → receive gXAUT
- Withdraw gXAUT → receive XAUT
- Show current position (gXAUT balance, XAUT value)
- Show vault stats (TVL, share price, APY estimate)
- Approval flow for deposits

---

## 7. Pages Specification

### 7.1 Home Page (`/`)

**Purpose:** Landing page, introduce protocol, CTAs

**Sections:**
1. **Hero**
   - Headline: "From Rupiah to Yield-Bearing Gold"
   - Subheadline: "Swap IDRX to tokenized gold and earn yield"
   - CTA Buttons: "Start Swapping", "Learn More"
   - Background: Gold gradient or illustration

2. **Stats Bar**
   - Total Value Locked (TVL)
   - Current XAUT Price
   - Vault APY (estimated)
   - Total Users (mock)

3. **How It Works**
   - Step 1: Connect Wallet & Verify
   - Step 2: Swap IDRX to XAUT
   - Step 3: Stake XAUT in Vault
   - Step 4: Earn Yield

4. **Features**
   - Compliant (KYC)
   - Productive (Yield)
   - Secure (Audited)
   - Transparent (On-chain)

5. **CTA Section**
   - Final call to action
   - "Get Started Now" button

**Data Required:**
- TVL from GoldVault.totalAssets()
- XAUT price from pool reserves
- APY calculation (optional, can be mock)

---

### 7.2 Swap Page (`/swap`)

**Purpose:** Main swap interface IDRX ↔ XAUT

**Layout:**
```
┌─────────────────────────────────────┐
│           Swap Card                 │
│  ┌───────────────────────────────┐  │
│  │  From: [Amount] [Token ▼]     │  │
│  │  Balance: xxx                 │  │
│  └───────────────────────────────┘  │
│              ⇅ (switch)             │
│  ┌───────────────────────────────┐  │
│  │  To: [Amount] [Token ▼]       │  │
│  │  Balance: xxx                 │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Rate: 1 XAUT = xxx IDRX      │  │
│  │  Price Impact: 0.05%          │  │
│  │  Minimum Received: xxx        │  │
│  │  Fee: 0.3%                    │  │
│  └───────────────────────────────┘  │
│                                     │
│  [ ⚙️ Settings ]                    │
│                                     │
│  [        Swap Button           ]   │
│                                     │
└─────────────────────────────────────┘
```

**States:**
1. **Disconnected** - Show "Connect Wallet" button
2. **Not Verified** - Show warning, link to /verify
3. **No Balance** - Disable swap, show "Insufficient balance"
4. **Need Approval** - Show "Approve" button first
5. **Ready** - Show "Swap" button
6. **Loading** - Show spinner
7. **Success** - Show success message with tx link
8. **Error** - Show error message

**Interactions:**
- Input amount → fetch quote → update output
- Switch tokens → swap from/to
- Settings → open slippage modal
- Swap → execute transaction

---

### 7.3 Vault Page (`/vault`)

**Purpose:** Deposit/withdraw from GoldVault

**Layout:**
```
┌─────────────────────────────────────┐
│         Vault Stats Card            │
│  ┌─────────┬─────────┬───────────┐  │
│  │   TVL   │  Share  │    APY    │  │
│  │  $xxx   │  Price  │   x.xx%   │  │
│  │         │  1.000  │           │  │
│  └─────────┴─────────┴───────────┘  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         Your Position               │
│  gXAUT Balance: xxx                 │
│  XAUT Value: xxx                    │
│  Earnings: +xxx XAUT                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  [Deposit]  [Withdraw]              │
│  ─────────────────────              │
│  ┌───────────────────────────────┐  │
│  │  Amount: [Input]    [MAX]     │  │
│  │  You will receive: xxx gXAUT  │  │
│  └───────────────────────────────┘  │
│                                     │
│  [        Deposit Button        ]   │
└─────────────────────────────────────┘
```

**Tabs:**
1. **Deposit** - XAUT → gXAUT
2. **Withdraw** - gXAUT → XAUT

**Data Required:**
- Vault totalAssets()
- Vault share price (convertToAssets(1e6))
- User gXAUT balance
- User XAUT balance
- Preview deposit/redeem amounts

---

### 7.4 Verify Page (`/verify`)

**Purpose:** Check and manage verification status

**Layout (User):**
```
┌─────────────────────────────────────┐
│         Verification Status         │
│                                     │
│     [✓] Verified                    │
│     or                              │
│     [!] Not Verified                │
│                                     │
│  Your Address: 0x1234...5678        │
│                                     │
│  (If not verified)                  │
│  "Please contact admin for KYC"     │
│                                     │
└─────────────────────────────────────┘
```

**Layout (Admin - if deployer connected):**
```
┌─────────────────────────────────────┐
│           Admin Panel               │
│  ─────────────────────              │
│  Register New Address:              │
│  [0x... input]  [Register]          │
│                                     │
│  Check Address:                     │
│  [0x... input]  [Check]             │
│  Status: Verified/Not Verified      │
└─────────────────────────────────────┘
```

---

## 8. Components Library

### 8.1 Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Header` | - | App header with logo, nav, wallet |
| `Footer` | - | App footer with links |
| `Navbar` | - | Navigation links |
| `MobileMenu` | `isOpen`, `onClose` | Mobile navigation |

### 8.2 Shared Components

| Component | Props | Description |
|-----------|-------|-------------|
| `TokenInput` | `token`, `value`, `onChange`, `onMax` | Token amount input |
| `TokenSelect` | `selected`, `options`, `onSelect` | Token selector dropdown |
| `TokenBalance` | `token`, `address` | Display token balance |
| `TokenIcon` | `token`, `size` | Token icon/logo |
| `WalletButton` | - | Connect/disconnect wallet |
| `TransactionModal` | `status`, `hash`, `onClose` | Tx status modal |
| `VerificationBadge` | `isVerified` | KYC status badge |
| `LoadingSpinner` | `size` | Loading indicator |
| `ErrorMessage` | `message`, `retry` | Error display |
| `NumberDisplay` | `value`, `decimals`, `prefix` | Formatted number |
| `SlippageSettings` | `value`, `onChange` | Slippage config |

### 8.3 Feature Components

#### Swap Components
| Component | Description |
|-----------|-------------|
| `SwapCard` | Main swap container |
| `SwapInput` | From/To input fields |
| `SwapQuote` | Quote details display |
| `SwapButton` | Action button with states |
| `SwapSettings` | Slippage/deadline config |
| `SwapConfirmModal` | Confirmation before swap |

#### Vault Components
| Component | Description |
|-----------|-------------|
| `VaultStats` | TVL, APY, share price |
| `VaultPosition` | User's position display |
| `DepositForm` | Deposit interface |
| `WithdrawForm` | Withdraw interface |
| `DepositConfirmModal` | Confirm deposit |
| `WithdrawConfirmModal` | Confirm withdraw |

---

## 9. Hooks & Contract Interactions

### 9.1 Contract Hooks Overview

```typescript
// hooks/contracts/useSwapRouter.ts
export function useSwapRouter() {
  // Read functions
  const { data: quoteIDRXtoXAUT } = useQuoteIDRXtoXAUT(amountIn);
  const { data: quoteXAUTtoIDRX } = useQuoteXAUTtoIDRX(amountIn);
  
  // Write functions
  const { write: swapIDRXtoXAUT } = useSwapIDRXtoXAUT();
  const { write: swapXAUTtoIDRX } = useSwapXAUTtoIDRX();
  
  return { ... };
}

// hooks/contracts/useGoldVault.ts
export function useGoldVault() {
  // Read functions
  const { data: totalAssets } = useTotalAssets();
  const { data: sharePrice } = useSharePrice();
  const { data: previewDeposit } = usePreviewDeposit(assets);
  const { data: previewRedeem } = usePreviewRedeem(shares);
  
  // Write functions
  const { write: deposit } = useDeposit();
  const { write: withdraw } = useWithdraw();
  const { write: redeem } = useRedeem();
  
  return { ... };
}

// hooks/contracts/useIdentityRegistry.ts
export function useIdentityRegistry() {
  const { data: isVerified } = useIsVerified(address);
  const { write: registerIdentity } = useRegisterIdentity();
  
  return { isVerified, registerIdentity };
}
```

### 9.2 Detailed Hook Implementations

**See separate document:** `FRONTEND_HOOKS_REFERENCE.md`

### 9.3 Contract Function Reference

#### SwapRouter Functions

| Function | Type | Parameters | Returns |
|----------|------|------------|---------|
| `getQuoteIDRXtoXAUT` | view | `uint256 amountIn` | `uint256 amountOut` |
| `getQuoteXAUTtoIDRX` | view | `uint256 amountIn` | `uint256 amountOut` |
| `swapIDRXtoXAUT` | write | `amountIn, amountOutMin, to, deadline` | `uint256 amountOut` |
| `swapXAUTtoIDRX` | write | `amountIn, amountOutMin, to, deadline` | `uint256 amountOut` |
| `idrx` | view | - | `address` |
| `usdc` | view | - | `address` |
| `xaut` | view | - | `address` |

#### GoldVault Functions (ERC-4626)

| Function | Type | Parameters | Returns |
|----------|------|------------|---------|
| `deposit` | write | `assets, receiver` | `uint256 shares` |
| `withdraw` | write | `assets, receiver, owner` | `uint256 shares` |
| `redeem` | write | `shares, receiver, owner` | `uint256 assets` |
| `totalAssets` | view | - | `uint256` |
| `convertToShares` | view | `assets` | `uint256 shares` |
| `convertToAssets` | view | `shares` | `uint256 assets` |
| `previewDeposit` | view | `assets` | `uint256 shares` |
| `previewRedeem` | view | `shares` | `uint256 assets` |
| `balanceOf` | view | `account` | `uint256` |

#### IdentityRegistry Functions

| Function | Type | Parameters | Returns |
|----------|------|------------|---------|
| `isVerified` | view | `address user` | `bool` |
| `registerIdentity` | write | `address user` | - |
| `removeIdentity` | write | `address user` | - |
| `isAdmin` | view | `address account` | `bool` |

---

## 10. User Flows

### 10.1 New User Onboarding

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. User visits site                                        │
│     └─► Landing page shown                                  │
│                                                             │
│  2. User clicks "Connect Wallet"                            │
│     └─► RainbowKit modal opens                              │
│     └─► User selects wallet (MetaMask, etc.)                │
│     └─► User approves connection                            │
│                                                             │
│  3. App checks network                                      │
│     └─► If wrong network → Prompt to switch to Mantle       │
│     └─► If correct → Continue                               │
│                                                             │
│  4. App checks verification                                 │
│     └─► Call IdentityRegistry.isVerified(address)           │
│     └─► If verified → Enable all features                   │
│     └─► If not → Show verification required message         │
│                                                             │
│  5. User navigates to /swap                                 │
│     └─► If not verified → Show warning, link to /verify     │
│     └─► If verified → Show swap interface                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.2 Swap Flow (IDRX → XAUT)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. User enters IDRX amount                                 │
│     └─► Debounced API call to getQuoteIDRXtoXAUT()          │
│     └─► Display estimated XAUT output                       │
│     └─► Show rate, price impact, fees                       │
│                                                             │
│  2. User clicks "Swap"                                      │
│     └─► Check IDRX allowance for SwapRouter                 │
│                                                             │
│  3. If allowance < amount                                   │
│     └─► Show "Approve IDRX" button                          │
│     └─► User clicks Approve                                 │
│     └─► Send approve(SwapRouter, MAX_UINT256) tx            │
│     └─► Wait for confirmation                               │
│                                                             │
│  4. Execute Swap                                            │
│     └─► Calculate amountOutMin (with slippage)              │
│     └─► Calculate deadline (current + 20 minutes)           │
│     └─► Send swapIDRXtoXAUT() transaction                   │
│     └─► Show pending modal                                  │
│                                                             │
│  5. Transaction confirmed                                   │
│     └─► Show success modal with tx hash                     │
│     └─► Update balances                                     │
│     └─► Reset form                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.3 Deposit Flow (XAUT → gXAUT)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. User navigates to /vault                                │
│     └─► Fetch vault stats (TVL, share price)                │
│     └─► Fetch user position (gXAUT balance)                 │
│                                                             │
│  2. User enters XAUT amount to deposit                      │
│     └─► Call previewDeposit() for gXAUT preview             │
│     └─► Display "You will receive: X gXAUT"                 │
│                                                             │
│  3. User clicks "Deposit"                                   │
│     └─► Check XAUT allowance for GoldVault                  │
│                                                             │
│  4. If allowance < amount                                   │
│     └─► Show "Approve XAUT" button                          │
│     └─► Execute approve transaction                         │
│                                                             │
│  5. Execute Deposit                                         │
│     └─► Send deposit(assets, receiver) transaction          │
│     └─► Show pending modal                                  │
│                                                             │
│  6. Transaction confirmed                                   │
│     └─► Show success modal                                  │
│     └─► Update position display                             │
│     └─► Reset form                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.4 Withdraw Flow (gXAUT → XAUT)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. User clicks "Withdraw" tab                              │
│     └─► Show gXAUT balance                                  │
│                                                             │
│  2. User enters gXAUT amount to redeem                      │
│     └─► Call previewRedeem() for XAUT preview               │
│     └─► Display "You will receive: X XAUT"                  │
│                                                             │
│  3. User clicks "Withdraw"                                  │
│     └─► No approval needed (burning own tokens)             │
│                                                             │
│  4. Execute Redeem                                          │
│     └─► Send redeem(shares, receiver, owner) transaction    │
│     └─► Show pending modal                                  │
│                                                             │
│  5. Transaction confirmed                                   │
│     └─► Show success modal                                  │
│     └─► Update balances                                     │
│     └─► Reset form                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 11. Styling & Design System

### 11.1 Color Palette

```css
/* Brand Colors */
--gold-primary: #F7931A;      /* Main gold */
--gold-light: #FFD700;        /* Light gold */
--gold-dark: #C77800;         /* Dark gold */

/* Token Colors */
--idrx-color: #E11D48;        /* IDRX - Red */
--usdc-color: #2775CA;        /* USDC - Blue */
--xaut-color: #F7931A;        /* XAUT - Gold */
--gxaut-color: #FFD700;       /* gXAUT - Bright Gold */

/* UI Colors */
--background: #0A0A0A;        /* Dark background */
--foreground: #FAFAFA;        /* Light text */
--card: #1A1A1A;              /* Card background */
--border: #2A2A2A;            /* Border color */
--muted: #6B7280;             /* Muted text */

/* Status Colors */
--success: #22C55E;           /* Green */
--warning: #F59E0B;           /* Yellow */
--error: #EF4444;             /* Red */
--info: #3B82F6;              /* Blue */
```

### 11.2 Typography

```css
/* Font Family */
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Font Sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
```

### 11.3 Spacing

```css
/* Consistent spacing scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
```

### 11.4 Component Styles

**Cards:**
```css
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}
```

**Buttons:**
```css
.button-primary {
  background: linear-gradient(135deg, var(--gold-primary), var(--gold-dark));
  color: white;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
}

.button-secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--foreground);
}
```

**Inputs:**
```css
.input {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  font-size: 24px;
}
```

---

## 12. Error Handling

### 12.1 Error Types

| Error Type | Example | User Message |
|------------|---------|--------------|
| **Wallet** | Not connected | "Please connect your wallet" |
| **Network** | Wrong chain | "Please switch to Mantle Sepolia" |
| **Verification** | Not verified | "Identity verification required" |
| **Balance** | Insufficient | "Insufficient IDRX balance" |
| **Allowance** | Not approved | "Please approve token first" |
| **Slippage** | Too high | "Price moved too much. Try again" |
| **Deadline** | Expired | "Transaction expired. Try again" |
| **Contract** | Reverted | "Transaction failed: [reason]" |
| **Network** | RPC error | "Network error. Please try again" |

### 12.2 Error Handling Strategy

```typescript
// lib/utils/errors.ts

export function parseContractError(error: unknown): string {
  // Check for known error signatures
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    
    if (message.includes('user rejected')) {
      return 'Transaction cancelled by user';
    }
    if (message.includes('insufficient funds')) {
      return 'Insufficient funds for gas';
    }
    if (message.includes('expired')) {
      return 'Transaction deadline expired';
    }
    if (message.includes('insufficient_output')) {
      return 'Price moved too much. Increase slippage or try again';
    }
    if (message.includes('not verified')) {
      return 'Your address is not verified. Please complete KYC';
    }
  }
  
  return 'Transaction failed. Please try again';
}
```

### 12.3 Toast Notifications

```typescript
// Success
toast.success('Swap successful!', {
  description: 'You received 0.073 XAUT',
  action: {
    label: 'View Transaction',
    onClick: () => openExplorer(txHash),
  },
});

// Error
toast.error('Swap failed', {
  description: parseContractError(error),
});

// Loading
toast.loading('Swapping tokens...', {
  description: 'Please confirm in your wallet',
});
```

---

## 13. Testing

### 13.1 Testing Strategy

| Type | Tool | Coverage |
|------|------|----------|
| **Unit Tests** | Jest + RTL | Components, hooks, utils |
| **Integration** | Cypress | User flows |
| **E2E** | Playwright | Full user journeys |

### 13.2 Test Files Structure

```
__tests__/
├── components/
│   ├── TokenInput.test.tsx
│   ├── SwapCard.test.tsx
│   └── VaultStats.test.tsx
├── hooks/
│   ├── useSwapRouter.test.ts
│   └── useGoldVault.test.ts
├── utils/
│   ├── format.test.ts
│   └── calculations.test.ts
└── e2e/
    ├── swap.spec.ts
    └── vault.spec.ts
```

### 13.3 Key Test Cases

**Swap Component:**
- [ ] Renders input fields
- [ ] Updates quote on input change
- [ ] Shows error for insufficient balance
- [ ] Disables button when not connected
- [ ] Shows approval flow when needed

**Vault Component:**
- [ ] Displays correct vault stats
- [ ] Shows user position
- [ ] Calculates preview correctly
- [ ] Handles deposit flow
- [ ] Handles withdraw flow

---

## 14. Deployment

### 14.1 Build Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Enable static export for Vercel/static hosting
  // output: 'export',
};

module.exports = nextConfig;
```

### 14.2 Deployment Options

| Platform | Type | Command |
|----------|------|---------|
| **Vercel** | Recommended | `vercel --prod` |
| **Netlify** | Alternative | `netlify deploy --prod` |
| **IPFS** | Decentralized | `ipfs add -r out/` |

### 14.3 Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### 14.4 Environment Variables (Production)

```bash
# Vercel Dashboard > Settings > Environment Variables

NEXT_PUBLIC_CHAIN_ID=5003
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia.mantle.xyz
# ... (same as .env.local)
```

---

## 15. Checklist

### 15.1 Setup Phase

- [ ] Create Next.js project
- [ ] Install dependencies (wagmi, viem, rainbowkit)
- [ ] Setup Tailwind CSS
- [ ] Setup shadcn/ui
- [ ] Configure environment variables
- [ ] Setup Web3Provider
- [ ] Test wallet connection

### 15.2 Core Development

- [ ] Create contract addresses config
- [ ] Create ABI files
- [ ] Implement layout components (Header, Footer)
- [ ] Implement WalletButton component
- [ ] Implement verification check hook
- [ ] Create token configuration

### 15.3 Swap Feature

- [ ] Create SwapCard component
- [ ] Create TokenInput component
- [ ] Implement useSwapRouter hook
- [ ] Implement quote fetching
- [ ] Implement approval flow
- [ ] Implement swap execution
- [ ] Add slippage settings
- [ ] Add transaction modal
- [ ] Test full swap flow

### 15.4 Vault Feature

- [ ] Create VaultStats component
- [ ] Create VaultPosition component
- [ ] Create DepositForm component
- [ ] Create WithdrawForm component
- [ ] Implement useGoldVault hook
- [ ] Implement deposit flow
- [ ] Implement withdraw flow
- [ ] Test full vault flow

### 15.5 Additional Features

- [ ] Home page with hero section
- [ ] Verification page
- [ ] Portfolio page (optional)
- [ ] Dark mode (optional)
- [ ] Mobile responsive design
- [ ] Error handling
- [ ] Loading states

### 15.6 Testing & QA

- [ ] Test on Mantle Sepolia
- [ ] Test with different wallets
- [ ] Test error scenarios
- [ ] Test mobile responsiveness
- [ ] Cross-browser testing

### 15.7 Deployment

- [ ] Build production bundle
- [ ] Deploy to Vercel
- [ ] Verify production works
- [ ] Update documentation

---

## 📚 Related Documents

1. **FRONTEND_HOOKS_REFERENCE.md** - Detailed hook implementations
2. **FRONTEND_COMPONENTS_REFERENCE.md** - Component specifications
3. **FRONTEND_API_REFERENCE.md** - Contract interaction details
4. **AUROOM_TEST_SUITE_PROMPTS.md** - Smart contract tests

---

## 📞 Quick Reference

### Contract Addresses (Mantle Sepolia)

```
IDRX:             0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05
USDC:             0x96ABff3a2668B811371d7d763f06B3832CEdf38d
XAUT:             0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78
IdentityRegistry: 0x620870d419F6aFca8AFed5B516619aa50900cadc
UniswapV2Router:  0x54166b2C5e09f16c3c1D705FfB4eb29a069000A9
SwapRouter:       0xF948Dd812E7fA072367848ec3D198cc61488b1b9
GoldVault:        0xd92cE2F13509840B1203D35218227559E64fbED0
```

### Key URLs

```
RPC:      https://rpc.sepolia.mantle.xyz
Explorer: https://sepolia.mantlescan.xyz
Chain ID: 5003
```

---

**Document Version:** 1.0.0  
**Last Updated:** December 20, 2024  
**Status:** Ready for Development
