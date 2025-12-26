# AuRoom Pay - Pinjam Tunai (Super Simplified)
## Gold-Backed Instant Cash Loan - Frontend Development Prompt

**Purpose:** Build "Pinjam Tunai" - pinjaman dengan jaminan emas, UX sesederhana pegadaian  
**Target:** Claude or any AI assistant with frontend development capabilities  
**Estimated Time:** ~6-8 hours  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, wagmi v2, viem, shadcn/ui

---

## 🎯 CORE PHILOSOPHY

### Target User: Orang Awam
```
USER TIDAK PEDULI:
❌ Apa itu IDRX
❌ Apa itu LTV
❌ Apa itu Smart Contract
❌ Berapa collateral ratio

USER HANYA PEDULI:
✅ "Saya punya emas"
✅ "Saya butuh uang tunai"
✅ "Berapa yang bisa saya pinjam?"
✅ "Kapan uang masuk ke rekening?"
```

### Analogi: Pegadaian Digital
```
PEGADAIAN TRADISIONAL:
1. Bawa emas
2. "Saya mau pinjam Rp 10 juta"
3. Emas ditahan
4. Terima uang

PINJAM TUNAI AUROOM:
1. Connect wallet (emas sudah ada)
2. "Saya mau pinjam Rp 10 juta"
3. Emas dijaminkan otomatis
4. Terima uang ke rekening bank
```

---

## 📋 PAGE STRUCTURE

```
HALAMAN UTAMA: /pinjam-tunai

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  SECTION 1: Header                                          │
│  - Title: "Pinjam Tunai"                                   │
│  - Subtitle: "Jaminkan emas, terima uang ke rekening"      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 2: Emas Kamu (Gold Balance Card)                  │
│  - Jumlah XAUT                                             │
│  - Nilai dalam Rupiah                                      │
│  - Maksimal bisa dipinjam                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 3: Form Pinjaman                                  │
│  - Input nominal (Rupiah)                                  │
│  - Quick amount buttons                                    │
│  - Bank selection                                          │
│  - Account details                                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 4: Ringkasan                                      │
│  - Nominal pinjaman                                        │
│  - Emas dijaminkan                                         │
│  - Biaya layanan                                           │
│  - Yang diterima                                           │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 5: CTA Button                                     │
│  - "Cairkan Rp X.XXX.XXX"                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SECTION 6: Pinjaman Aktif (jika ada)                      │
│  - Status pinjaman                                         │
│  - Tombol "Lunasi"                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 CONTRACT DETAILS

### Contract Addresses (Mantle Sepolia)

```typescript
// lib/contracts/addresses.ts

export const CONTRACTS = {
  // Tokens
  IDRX: "0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05" as const,
  XAUT: "0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78" as const,
  
  // BorrowingProtocol V2
  BorrowingProtocolV2: "0xd84B183Dc6a19BFb9D1Fe630284521dF2998207a" as const,
  
  // Identity Registry
  IdentityRegistry: "0x620870d419F6aFca8AFed5B516619aa50900cadc" as const,
} as const;
```

### Hidden Parameters (User Tidak Perlu Tahu)
```typescript
// lib/config/loanConfig.ts

export const LOAN_CONFIG = {
  // Fixed LTV 30% - user tidak perlu pilih
  FIXED_LTV_BPS: 3000,
  
  // Fee 0.5%
  FEE_BPS: 50,
  
  // Token decimals
  DECIMALS: 6,
  
  // Price decimals
  PRICE_DECIMALS: 8,
} as const;
```

---

## 📜 SMART CONTRACT ABI (Simplified - Only What We Need)

```typescript
// lib/contracts/abis/BorrowingProtocolV2.ts

export const BorrowingProtocolV2ABI = [
  // === WRITE FUNCTIONS ===
  
  // Deposit collateral + borrow in one tx
  {
    inputs: [
      { name: "collateralAmount", type: "uint256" },
      { name: "borrowAmount", type: "uint256" },
    ],
    name: "depositAndBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  
  // Repay + withdraw in one tx (untuk lunasi)
  {
    inputs: [
      { name: "repayAmount", type: "uint256" },
      { name: "withdrawAmount", type: "uint256" },
    ],
    name: "repayAndWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  
  // Close entire position (lunasi semua)
  {
    inputs: [],
    name: "closePosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  
  // === READ FUNCTIONS ===
  
  // User's collateral balance
  {
    inputs: [{ name: "user", type: "address" }],
    name: "collateralBalance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  
  // User's debt balance
  {
    inputs: [{ name: "user", type: "address" }],
    name: "debtBalance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  
  // Collateral value in IDRX
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getCollateralValue",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  
  // Current LTV
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getLTV",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  
  // XAUT price in IDRX
  {
    inputs: [],
    name: "xautPriceInIDRX",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  
  // Borrow fee
  {
    inputs: [],
    name: "borrowFeeBps",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// ERC20 ABI (untuk balance & approve)
export const ERC20ABI = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
```

---

## 🎨 UI DESIGN - MAIN PAGE

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                        💰 PINJAM TUNAI                                  │
│           Jaminkan emas digital, terima uang ke rekening               │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  🥇 EMAS KAMU                                                    │   │
│  │                                                                  │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                     │   │
│  │  │  Jumlah          │  │  Nilai           │                     │   │
│  │  │  3.50 XAUT       │  │  Rp 149.310.000  │                     │   │
│  │  └──────────────────┘  └──────────────────┘                     │   │
│  │                                                                  │   │
│  │  💡 Bisa dipinjamkan hingga: Rp 111.982.500                     │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  💵 BERAPA YANG KAMU BUTUHKAN?                                  │   │
│  │                                                                  │   │
│  │  ┌─────────────────────────────────────────────────────────┐    │   │
│  │  │                                                          │    │   │
│  │  │   Rp    10.000.000                                      │    │   │
│  │  │                                                          │    │   │
│  │  └─────────────────────────────────────────────────────────┘    │   │
│  │                                                                  │   │
│  │  [Rp 1jt]  [Rp 5jt]  [Rp 10jt]  [Rp 50jt]  [Rp 100jt]          │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  🏦 TRANSFER KE                                                  │   │
│  │                                                                  │   │
│  │  Pilih Bank                                                      │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │   │
│  │  │  BCA   │ │Mandiri │ │  BNI   │ │  BRI   │                   │   │
│  │  │  [●]   │ │  [ ]   │ │  [ ]   │ │  [ ]   │                   │   │
│  │  └────────┘ └────────┘ └────────┘ └────────┘                   │   │
│  │                                                                  │   │
│  │  No. Rekening                                                    │   │
│  │  ┌─────────────────────────────────────────────────────────┐    │   │
│  │  │  1234567890                                              │    │   │
│  │  └─────────────────────────────────────────────────────────┘    │   │
│  │                                                                  │   │
│  │  Nama Pemilik Rekening                                          │   │
│  │  ┌─────────────────────────────────────────────────────────┐    │   │
│  │  │  JOHN DOE                                                │    │   │
│  │  └─────────────────────────────────────────────────────────┘    │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  📋 RINGKASAN PINJAMAN                                          │   │
│  │  ───────────────────────────────────────────────────────────    │   │
│  │                                                                  │   │
│  │  Nominal pinjaman                         Rp 10.000.000         │   │
│  │  Emas dijaminkan                          0.78 XAUT             │   │
│  │                                           (~Rp 33.274.800)      │   │
│  │  Biaya layanan (0.5%)                     Rp 50.000             │   │
│  │  ───────────────────────────────────────────────────────────    │   │
│  │  Yang kamu terima                         Rp 9.950.000          │   │
│  │  Transfer ke                              BCA - 1234567890      │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │              💸 CAIRKAN Rp 9.950.000                            │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  ℹ️ Emas kamu akan dijaminkan otomatis. Lunasi pinjaman kapan   │   │
│  │     saja untuk menarik kembali emas kamu.                       │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 UI DESIGN - PINJAMAN AKTIF SECTION

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  📊 PINJAMAN AKTIF                                                      │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                  │   │
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │   │
│  │  │  Emas Dijaminkan│ │  Hutang         │ │  Status         │   │   │
│  │  │                 │ │                 │ │                 │   │   │
│  │  │  1.00 XAUT      │ │  Rp 10.000.000  │ │  ✅ AMAN        │   │   │
│  │  │  ~Rp 42.660.000 │ │                 │ │                 │   │   │
│  │  └─────────────────┘ └─────────────────┘ └─────────────────┘   │   │
│  │                                                                  │   │
│  │  Kapasitas Pinjaman                                             │   │
│  │  [████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░] 23% terpakai           │   │
│  │                                                                  │   │
│  │  ┌─────────────────────────────────────────────────────────┐    │   │
│  │  │            💳 LUNASI PINJAMAN                           │    │   │
│  │  └─────────────────────────────────────────────────────────┘    │   │
│  │                                                                  │   │
│  │  ⓘ Lunasi hutang untuk menarik kembali emas kamu               │   │
│  │                                                                  │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 UI DESIGN - MODAL LUNASI

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  💳 LUNASI PINJAMAN                                    [✕]     │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Hutang saat ini                       Rp 10.000.000           │
│  Emas dijaminkan                       1.00 XAUT               │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Berapa yang ingin dilunasi?                                   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │   Rp    10.000.000                                      │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [25%]  [50%]  [75%]  [LUNAS]                                  │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Setelah pelunasan:                                            │
│  • Sisa hutang: Rp 0                                           │
│  • Emas dikembalikan: 1.00 XAUT                                │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Saldo kamu: Rp 15.000.000                      ✅ Cukup       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │            💳 LUNASI & TARIK EMAS                       │   │
│  │                                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 UI DESIGN - SUCCESS SCREENS

### Success: Pinjaman Berhasil

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                            ✅                                   │
│                                                                 │
│                   PINJAMAN BERHASIL!                           │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Nominal pinjaman              Rp 10.000.000                   │
│  Emas dijaminkan               0.78 XAUT                       │
│  Biaya layanan                 Rp 50.000                       │
│  ─────────────────────────────────────────────────────────     │
│  Transfer ke rekening          Rp 9.950.000                    │
│  Bank                          BCA - 1234567890                │
│  Nama                          JOHN DOE                        │
│  ─────────────────────────────────────────────────────────     │
│  No. Referensi                 TRX-20251225-ABC123             │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  ⓘ Ini adalah simulasi. Di production, dana akan masuk        │
│    ke rekening dalam 1-2 hari kerja.                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               📄 Download Bukti                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               🏠 Kembali ke Beranda                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Success: Pelunasan Berhasil

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                            ✅                                   │
│                                                                 │
│                   PELUNASAN BERHASIL!                          │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Hutang dilunasi               Rp 10.000.000                   │
│  Emas dikembalikan             1.00 XAUT                       │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  Emas sudah kembali ke wallet kamu! 🥇                         │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               🏠 Kembali ke Beranda                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 UI DESIGN - PROCESSING STATES

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         ⏳                                      │
│                    ● ● ● (animasi)                             │
│                                                                 │
│                   Memproses pinjaman...                        │
│                                                                 │
│  Step 1: Mengizinkan akses emas        ✅                      │
│  Step 2: Menjaminkan emas              ⏳ (loading)            │
│  Step 3: Mentransfer ke rekening       ○                       │
│                                                                 │
│  ⓘ Jangan tutup halaman ini                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📐 CALCULATION LOGIC

```typescript
// lib/utils/loanCalculations.ts

import { LOAN_CONFIG } from '@/lib/config/loanConfig';

export interface LoanCalculation {
  loanAmount: bigint;           // Nominal pinjaman (IDRX/IDR)
  collateralRequired: bigint;   // XAUT yang dijaminkan
  collateralValue: bigint;      // Nilai jaminan dalam Rupiah
  fee: bigint;                  // Biaya layanan
  amountReceived: bigint;       // Yang diterima setelah fee
  isValid: boolean;             // Apakah bisa dilakukan
  errorMessage?: string;        // Pesan error jika tidak valid
}

/**
 * Calculate loan details
 * 
 * Formula (Fixed LTV 30%):
 * collateralValue = loanAmount / 0.30 = loanAmount * 10000 / 3000
 * collateralXAUT = (collateralValue * 1e8) / xautPrice
 * fee = loanAmount * 0.5% = loanAmount * 50 / 10000
 * amountReceived = loanAmount - fee
 */
export function calculateLoan(
  loanAmount: bigint,
  xautPrice: bigint,
  xautBalance: bigint,
  feeBps: number = LOAN_CONFIG.FEE_BPS
): LoanCalculation {
  // Guard: zero input
  if (loanAmount === 0n) {
    return {
      loanAmount: 0n,
      collateralRequired: 0n,
      collateralValue: 0n,
      fee: 0n,
      amountReceived: 0n,
      isValid: false,
      errorMessage: 'Masukkan nominal pinjaman',
    };
  }

  // Calculate collateral value needed (at 30% LTV)
  // collateralValue = loanAmount * 10000 / 3000
  const collateralValue = (loanAmount * 10000n) / BigInt(LOAN_CONFIG.FIXED_LTV_BPS);
  
  // Calculate XAUT needed
  // collateralRequired = (collateralValue * 1e8) / xautPrice
  // Add small buffer to avoid rounding issues
  const collateralRequired = (collateralValue * BigInt(1e8) + xautPrice - 1n) / xautPrice;
  
  // Calculate fee
  const fee = (loanAmount * BigInt(feeBps)) / 10000n;
  
  // Calculate amount received
  const amountReceived = loanAmount - fee;
  
  // Check if user has enough XAUT
  const isValid = xautBalance >= collateralRequired;
  const errorMessage = isValid 
    ? undefined 
    : `Emas tidak cukup. Butuh ${formatXAUT(collateralRequired)} XAUT, kamu punya ${formatXAUT(xautBalance)} XAUT`;

  return {
    loanAmount,
    collateralRequired,
    collateralValue,
    fee,
    amountReceived,
    isValid,
    errorMessage,
  };
}

/**
 * Calculate maximum loan amount based on XAUT balance
 */
export function calculateMaxLoan(
  xautBalance: bigint,
  xautPrice: bigint
): bigint {
  if (xautBalance === 0n) return 0n;
  
  // maxCollateralValue = (xautBalance * xautPrice) / 1e8
  const maxCollateralValue = (xautBalance * xautPrice) / BigInt(1e8);
  
  // maxLoan = (maxCollateralValue * LTV) / 10000
  const maxLoan = (maxCollateralValue * BigInt(LOAN_CONFIG.FIXED_LTV_BPS)) / 10000n;
  
  return maxLoan;
}

// Helper: Format XAUT
function formatXAUT(value: bigint): string {
  const num = Number(value) / 1e6;
  return num.toFixed(2);
}
```

---

## 🏦 BANK CONFIGURATION

```typescript
// lib/config/banks.ts

export interface Bank {
  id: string;
  name: string;
  shortName: string;
  code: string;
}

export const BANKS: Bank[] = [
  { id: 'bca', name: 'Bank Central Asia', shortName: 'BCA', code: '014' },
  { id: 'mandiri', name: 'Bank Mandiri', shortName: 'Mandiri', code: '008' },
  { id: 'bni', name: 'Bank Negara Indonesia', shortName: 'BNI', code: '009' },
  { id: 'bri', name: 'Bank Rakyat Indonesia', shortName: 'BRI', code: '002' },
  { id: 'cimb', name: 'CIMB Niaga', shortName: 'CIMB', code: '022' },
  { id: 'permata', name: 'Bank Permata', shortName: 'Permata', code: '013' },
  { id: 'danamon', name: 'Bank Danamon', shortName: 'Danamon', code: '011' },
  { id: 'bsi', name: 'Bank Syariah Indonesia', shortName: 'BSI', code: '451' },
];

export function getBankById(id: string): Bank | undefined {
  return BANKS.find(b => b.id === id);
}
```

---

## 🔄 TRANSACTION FLOW

### Flow: Pinjam Tunai (Borrow + Redeem)

```typescript
// lib/utils/loanFlow.ts

export type LoanStep = 
  | 'idle'
  | 'checking-approval'
  | 'approving'
  | 'borrowing'
  | 'transferring'
  | 'success'
  | 'error';

export interface LoanFlowState {
  step: LoanStep;
  message: string;
  txHash?: string;
  error?: string;
}

/**
 * Execute loan flow:
 * 1. Check XAUT approval
 * 2. Approve XAUT if needed
 * 3. Call depositAndBorrow()
 * 4. Simulate bank transfer
 * 5. Show success
 */
export async function executeLoanFlow(
  collateralAmount: bigint,
  borrowAmount: bigint,
  bankDetails: BankDetails,
  callbacks: {
    onStepChange: (state: LoanFlowState) => void;
    checkAllowance: () => Promise<bigint>;
    approve: () => Promise<void>;
    depositAndBorrow: () => Promise<string>; // returns txHash
  }
): Promise<void> {
  const { onStepChange, checkAllowance, approve, depositAndBorrow } = callbacks;

  try {
    // Step 1: Check approval
    onStepChange({ step: 'checking-approval', message: 'Memeriksa izin akses...' });
    const allowance = await checkAllowance();
    
    // Step 2: Approve if needed
    if (allowance < collateralAmount) {
      onStepChange({ step: 'approving', message: 'Mengizinkan akses emas...' });
      await approve();
    }
    
    // Step 3: Deposit and borrow
    onStepChange({ step: 'borrowing', message: 'Menjaminkan emas...' });
    const txHash = await depositAndBorrow();
    
    // Step 4: Simulate transfer (3-5 seconds)
    onStepChange({ step: 'transferring', message: 'Mentransfer ke rekening...', txHash });
    await simulateTransfer();
    
    // Step 5: Success
    onStepChange({ step: 'success', message: 'Pinjaman berhasil!', txHash });
    
  } catch (error) {
    onStepChange({ 
      step: 'error', 
      message: 'Terjadi kesalahan',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    throw error;
  }
}

async function simulateTransfer(): Promise<void> {
  const delay = 3000 + Math.random() * 2000; // 3-5 seconds
  await new Promise(resolve => setTimeout(resolve, delay));
}

export interface BankDetails {
  bankId: string;
  accountNumber: string;
  accountName: string;
}
```

### Flow: Lunasi Pinjaman (Repay + Withdraw)

```typescript
/**
 * Execute repay flow:
 * 1. Check IDRX approval
 * 2. Approve IDRX if needed
 * 3. Call closePosition() or repayAndWithdraw()
 * 4. Show success
 */
export async function executeRepayFlow(
  repayAmount: bigint,
  isFullRepay: boolean,
  callbacks: {
    onStepChange: (state: LoanFlowState) => void;
    checkAllowance: () => Promise<bigint>;
    approve: () => Promise<void>;
    closePosition: () => Promise<string>;
    repayAndWithdraw: (repay: bigint, withdraw: bigint) => Promise<string>;
    getCollateral: () => Promise<bigint>;
  }
): Promise<void> {
  const { onStepChange, checkAllowance, approve, closePosition, repayAndWithdraw, getCollateral } = callbacks;

  try {
    // Step 1: Check approval
    onStepChange({ step: 'checking-approval', message: 'Memeriksa izin akses...' });
    const allowance = await checkAllowance();
    
    // Step 2: Approve if needed
    if (allowance < repayAmount) {
      onStepChange({ step: 'approving', message: 'Mengizinkan akses...' });
      await approve();
    }
    
    // Step 3: Execute repay
    onStepChange({ step: 'borrowing', message: 'Melunasi pinjaman...' });
    
    let txHash: string;
    if (isFullRepay) {
      txHash = await closePosition();
    } else {
      // Calculate proportional withdrawal
      const collateral = await getCollateral();
      // For partial repay, calculate how much collateral can be withdrawn
      // Simplified: just use closePosition for now
      txHash = await closePosition();
    }
    
    // Step 4: Success
    onStepChange({ step: 'success', message: 'Pelunasan berhasil!', txHash });
    
  } catch (error) {
    onStepChange({ 
      step: 'error', 
      message: 'Terjadi kesalahan',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    throw error;
  }
}
```

---

## 🪝 REACT HOOKS

```typescript
// hooks/useLoan.ts

import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts/addresses';
import { BorrowingProtocolV2ABI, ERC20ABI } from '@/lib/contracts/abis';
import { calculateLoan, calculateMaxLoan } from '@/lib/utils/loanCalculations';

// === READ HOOKS ===

export function useGoldBalance() {
  const { address } = useAccount();
  
  const balance = useReadContract({
    address: CONTRACTS.XAUT,
    abi: ERC20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address, refetchInterval: 10000 },
  });

  return {
    balance: balance.data ?? 0n,
    isLoading: balance.isLoading,
    refetch: balance.refetch,
  };
}

export function useGoldPrice() {
  const price = useReadContract({
    address: CONTRACTS.BorrowingProtocolV2,
    abi: BorrowingProtocolV2ABI,
    functionName: 'xautPriceInIDRX',
    query: { refetchInterval: 30000 },
  });

  return {
    price: price.data ?? 0n,
    isLoading: price.isLoading,
  };
}

export function useActiveLoan() {
  const { address } = useAccount();
  
  const collateral = useReadContract({
    address: CONTRACTS.BorrowingProtocolV2,
    abi: BorrowingProtocolV2ABI,
    functionName: 'collateralBalance',
    args: address ? [address] : undefined,
    query: { enabled: !!address, refetchInterval: 10000 },
  });
  
  const debt = useReadContract({
    address: CONTRACTS.BorrowingProtocolV2,
    abi: BorrowingProtocolV2ABI,
    functionName: 'debtBalance',
    args: address ? [address] : undefined,
    query: { enabled: !!address, refetchInterval: 10000 },
  });
  
  const ltv = useReadContract({
    address: CONTRACTS.BorrowingProtocolV2,
    abi: BorrowingProtocolV2ABI,
    functionName: 'getLTV',
    args: address ? [address] : undefined,
    query: { enabled: !!address, refetchInterval: 10000 },
  });

  const hasActiveLoan = (debt.data ?? 0n) > 0n;

  const refetchAll = () => {
    collateral.refetch();
    debt.refetch();
    ltv.refetch();
  };

  return {
    collateral: collateral.data ?? 0n,
    debt: debt.data ?? 0n,
    ltv: ltv.data ?? 0n,
    hasActiveLoan,
    isLoading: collateral.isLoading || debt.isLoading,
    refetch: refetchAll,
  };
}

export function useIDRXBalance() {
  const { address } = useAccount();
  
  return useReadContract({
    address: CONTRACTS.IDRX,
    abi: ERC20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!address, refetchInterval: 10000 },
  });
}

// === WRITE HOOKS ===

export function useApproveXAUT() {
  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const approve = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.XAUT,
      abi: ERC20ABI,
      functionName: 'approve',
      args: [CONTRACTS.BorrowingProtocolV2, amount],
    });
  };

  return { approve, isPending, isConfirming, isSuccess, error, hash, reset };
}

export function useApproveIDRX() {
  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const approve = (amount: bigint) => {
    writeContract({
      address: CONTRACTS.IDRX,
      abi: ERC20ABI,
      functionName: 'approve',
      args: [CONTRACTS.BorrowingProtocolV2, amount],
    });
  };

  return { approve, isPending, isConfirming, isSuccess, error, hash, reset };
}

export function useDepositAndBorrow() {
  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const execute = (collateralAmount: bigint, borrowAmount: bigint) => {
    writeContract({
      address: CONTRACTS.BorrowingProtocolV2,
      abi: BorrowingProtocolV2ABI,
      functionName: 'depositAndBorrow',
      args: [collateralAmount, borrowAmount],
    });
  };

  return { execute, isPending, isConfirming, isSuccess, error, hash, reset };
}

export function useClosePosition() {
  const { writeContract, data: hash, isPending, error, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const execute = () => {
    writeContract({
      address: CONTRACTS.BorrowingProtocolV2,
      abi: BorrowingProtocolV2ABI,
      functionName: 'closePosition',
    });
  };

  return { execute, isPending, isConfirming, isSuccess, error, hash, reset };
}

// === ALLOWANCE HOOKS ===

export function useXAUTAllowance() {
  const { address } = useAccount();
  
  return useReadContract({
    address: CONTRACTS.XAUT,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: address ? [address, CONTRACTS.BorrowingProtocolV2] : undefined,
    query: { enabled: !!address, refetchInterval: 5000 },
  });
}

export function useIDRXAllowance() {
  const { address } = useAccount();
  
  return useReadContract({
    address: CONTRACTS.IDRX,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: address ? [address, CONTRACTS.BorrowingProtocolV2] : undefined,
    query: { enabled: !!address, refetchInterval: 5000 },
  });
}
```

---

## 🧩 COMPONENTS

### File Structure

```
app/
└── pinjam-tunai/
    └── page.tsx                    # Main page

components/
└── pinjam-tunai/
    ├── PinjamTunaiPage.tsx        # Main container
    ├── GoldBalanceCard.tsx        # Emas kamu section
    ├── LoanAmountInput.tsx        # Input nominal + quick buttons
    ├── BankSelector.tsx           # Bank selection + account input
    ├── LoanSummary.tsx            # Ringkasan pinjaman
    ├── ActiveLoanCard.tsx         # Pinjaman aktif section
    ├── RepayModal.tsx             # Modal lunasi
    ├── ProcessingOverlay.tsx      # Loading states
    ├── SuccessModal.tsx           # Success screen
    └── ErrorAlert.tsx             # Error messages

hooks/
└── useLoan.ts                     # All loan-related hooks

lib/
├── contracts/
│   ├── addresses.ts
│   └── abis/
│       └── index.ts
├── config/
│   ├── loanConfig.ts
│   └── banks.ts
└── utils/
    ├── loanCalculations.ts
    ├── loanFlow.ts
    └── format.ts
```

### Component: LoanAmountInput.tsx

```typescript
interface LoanAmountInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLoan: bigint;
  disabled?: boolean;
}

// Features:
// - Large input field with "Rp" prefix
// - Auto-format with thousand separators
// - Quick amount buttons: Rp 1jt, 5jt, 10jt, 50jt, 100jt
// - Error state when exceeds max
```

### Component: BankSelector.tsx

```typescript
interface BankSelectorProps {
  selectedBank: string;
  onBankChange: (bankId: string) => void;
  accountNumber: string;
  onAccountNumberChange: (value: string) => void;
  accountName: string;
  onAccountNameChange: (value: string) => void;
}

// Features:
// - Bank logo/icon buttons (BCA, Mandiri, BNI, BRI)
// - Account number input (numeric only)
// - Account name input (uppercase auto)
// - Validation feedback
```

### Component: LoanSummary.tsx

```typescript
interface LoanSummaryProps {
  calculation: LoanCalculation;
  bank: Bank | null;
  accountNumber: string;
  xautPrice: bigint;
}

// Display:
// - Nominal pinjaman
// - Emas dijaminkan (XAUT + nilai Rupiah)
// - Biaya layanan
// - Yang diterima
// - Transfer ke (bank + account)
```

### Component: ActiveLoanCard.tsx

```typescript
interface ActiveLoanCardProps {
  collateral: bigint;
  debt: bigint;
  ltv: bigint;
  xautPrice: bigint;
  onRepayClick: () => void;
}

// Display:
// - Emas dijaminkan
// - Hutang saat ini
// - Status (Aman/Warning/Danger based on LTV)
// - Progress bar (% terpakai)
// - Tombol "Lunasi Pinjaman"
```

### Component: RepayModal.tsx

```typescript
interface RepayModalProps {
  isOpen: boolean;
  onClose: () => void;
  debt: bigint;
  collateral: bigint;
  idrxBalance: bigint;
  onRepay: (amount: bigint, isFullRepay: boolean) => void;
  isProcessing: boolean;
}

// Features:
// - Show current debt & collateral
// - Input untuk nominal pelunasan
// - Quick buttons: 25%, 50%, 75%, LUNAS
// - Preview: sisa hutang, emas dikembalikan
// - Balance check (cukup/tidak cukup)
// - CTA: "Lunasi & Tarik Emas"
```

---

## 🔢 FORMATTING UTILITIES

```typescript
// lib/utils/format.ts

/**
 * Format bigint as Indonesian Rupiah
 */
export function formatRupiah(value: bigint, decimals: number = 6): string {
  const num = Number(value) / Math.pow(10, decimals);
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

/**
 * Format bigint as short Rupiah (Rp 1jt, Rp 10jt, etc)
 */
export function formatRupiahShort(value: bigint, decimals: number = 6): string {
  const num = Number(value) / Math.pow(10, decimals);
  
  if (num >= 1_000_000_000) {
    return `Rp ${(num / 1_000_000_000).toFixed(1)}M`;
  } else if (num >= 1_000_000) {
    return `Rp ${(num / 1_000_000).toFixed(1)}jt`;
  } else if (num >= 1_000) {
    return `Rp ${(num / 1_000).toFixed(0)}rb`;
  }
  return `Rp ${num.toFixed(0)}`;
}

/**
 * Format XAUT amount
 */
export function formatXAUT(value: bigint): string {
  const num = Number(value) / 1e6;
  if (num === 0) return '0';
  if (num < 0.01) return num.toFixed(4);
  if (num < 1) return num.toFixed(3);
  return num.toFixed(2);
}

/**
 * Parse Rupiah input string to bigint
 */
export function parseRupiahInput(value: string): bigint {
  const cleaned = value.replace(/[^\d]/g, '');
  if (!cleaned) return 0n;
  return BigInt(cleaned) * BigInt(1e6); // Convert to 6 decimals
}

/**
 * Format input with thousand separators
 */
export function formatInputValue(value: string): string {
  const cleaned = value.replace(/[^\d]/g, '');
  if (!cleaned) return '';
  return Number(cleaned).toLocaleString('id-ID');
}

/**
 * Get loan status text based on LTV
 */
export function getLoanStatus(ltvBps: number): { text: string; color: string } {
  if (ltvBps <= 5000) {
    return { text: 'AMAN', color: 'text-green-500' };
  } else if (ltvBps <= 7500) {
    return { text: 'PERHATIAN', color: 'text-yellow-500' };
  } else {
    return { text: 'BAHAYA', color: 'text-red-500' };
  }
}
```

---

## ✅ ACCEPTANCE CRITERIA

### Must Have
- [ ] Single page untuk pinjam tunai
- [ ] Gold balance display dengan nilai Rupiah
- [ ] Single input untuk nominal pinjaman
- [ ] Quick amount buttons (Rp 1jt - Rp 100jt)
- [ ] Bank selection (min 4 bank: BCA, Mandiri, BNI, BRI)
- [ ] Account number & name input
- [ ] Real-time calculation summary
- [ ] Insufficient balance warning
- [ ] Processing overlay dengan steps
- [ ] Success modal dengan details
- [ ] Active loan card (jika ada pinjaman)
- [ ] Repay modal untuk lunasi
- [ ] Mobile responsive

### Nice to Have
- [ ] Save bank details to localStorage
- [ ] Download receipt as image/PDF
- [ ] Confetti on success
- [ ] More bank options

---

## 🧪 TESTING CHECKLIST

### Pinjam Flow
- [ ] Connect wallet → see gold balance
- [ ] Enter amount → see calculation update
- [ ] Quick buttons work correctly
- [ ] Select bank → enter account details
- [ ] Summary shows correct values
- [ ] Click "Cairkan" → processing overlay
- [ ] Approve XAUT (first time)
- [ ] depositAndBorrow executes
- [ ] Success modal appears
- [ ] Position appears in "Pinjaman Aktif"

### Lunasi Flow
- [ ] See active loan card
- [ ] Click "Lunasi" → modal opens
- [ ] Enter amount → preview updates
- [ ] "LUNAS" button works
- [ ] Balance check works
- [ ] Click "Lunasi & Tarik Emas"
- [ ] Approve IDRX (first time)
- [ ] closePosition executes
- [ ] Success modal appears
- [ ] Loan card disappears

### Edge Cases
- [ ] No XAUT balance → disable form
- [ ] Amount > max loan → show error
- [ ] Insufficient IDRX for repay → show error
- [ ] Invalid account number → validation
- [ ] Network error → error handling

---

## 📱 MOBILE DESIGN NOTES

```
MOBILE LAYOUT (<768px):
- Stack all sections vertically
- Full-width inputs
- Bank buttons in 2x2 grid
- Floating CTA button at bottom
- Slide-up modals
```

---

## 🎨 DESIGN TOKENS

```typescript
const theme = {
  colors: {
    gold: '#F5A623',
    goldLight: '#FFD700',
    
    status: {
      safe: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
    },
    
    background: {
      page: '#0F172A',
      card: '#1E293B',
      input: '#0F172A',
    },
    
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
  },
};
```

---

## 📁 FILES TO CREATE

```
app/
└── pinjam-tunai/
    └── page.tsx

components/
└── pinjam-tunai/
    ├── PinjamTunaiPage.tsx
    ├── GoldBalanceCard.tsx
    ├── LoanAmountInput.tsx
    ├── BankSelector.tsx
    ├── LoanSummary.tsx
    ├── ActiveLoanCard.tsx
    ├── RepayModal.tsx
    ├── ProcessingOverlay.tsx
    ├── SuccessModal.tsx
    └── ErrorAlert.tsx

hooks/
└── useLoan.ts

lib/
├── contracts/
│   ├── addresses.ts
│   └── abis/
│       ├── BorrowingProtocolV2.ts
│       ├── ERC20.ts
│       └── index.ts
├── config/
│   ├── loanConfig.ts
│   └── banks.ts
└── utils/
    ├── loanCalculations.ts
    ├── loanFlow.ts
    └── format.ts
```

---

## 🚀 QUICK START

1. Create route: `app/pinjam-tunai/page.tsx`
2. Add navigation link: "Pinjam Tunai"
3. Create hooks: `hooks/useLoan.ts`
4. Create config: `lib/config/loanConfig.ts`, `banks.ts`
5. Create utils: `lib/utils/loanCalculations.ts`
6. Build components (bottom-up)
7. Test on Mantle Sepolia

---

## 📝 KEY TERMINOLOGY (Indonesian)

| English | Indonesian (di UI) |
|---------|-------------------|
| Borrow | Pinjam |
| Collateral | Jaminan / Emas dijaminkan |
| Loan Amount | Nominal pinjaman |
| Fee | Biaya layanan |
| Receive | Yang kamu terima |
| Repay | Lunasi |
| Withdraw | Tarik |
| Active Loan | Pinjaman aktif |
| Bank Transfer | Transfer ke rekening |
| Processing | Memproses |
| Success | Berhasil |

---

## 📝 CONTRACT ADDRESS REFERENCE

```
BorrowingProtocol V2: 0xd84B183Dc6a19BFb9D1Fe630284521dF2998207a
XAUT:                 0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78
IDRX:                 0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05
IdentityRegistry:     0x620870d419F6aFca8AFed5B516619aa50900cadc
```

---

## 💡 IMPLEMENTATION NOTES

### Hidden Complexity
- LTV fixed at 30% - user never sees this
- IDRX is just intermediate - user thinks in Rupiah
- Smart contract calls hidden behind "Memproses..."
- Technical errors translated to friendly messages

### User Mental Model
- "Saya jaminkan emas, saya terima uang"
- "Saya bayar hutang, saya dapat emas kembali"
- No DeFi terminology needed

---

**Selamat membangun Pinjam Tunai! 💰🥇**

---

*Document Version: 3.0.0 - Super Simplified*  
*Created: December 25, 2025*  
*Project: AuRoom Pay - Pinjam Tunai*
