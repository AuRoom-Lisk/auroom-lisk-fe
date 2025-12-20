# AuRoom Protocol - Landing Page Enhancement Guide
## Comprehensive Specification for Informative Homepage

**Project:** AuRoom Protocol  
**Version:** 1.0.0  
**Created:** December 21, 2024  
**Page Route:** `/` (Homepage)

---

## 📋 Table of Contents

1. [Content Strategy](#1-content-strategy)
2. [Section 1: Hero](#2-section-1-hero)
3. [Section 2: What is AuRoom](#3-section-2-what-is-auroom)
4. [Section 3: Understanding the Assets](#4-section-3-understanding-the-assets)
5. [Section 4: Why RWA Matters](#5-section-4-why-rwa-matters)
6. [Section 5: How Yield is Generated](#6-section-5-how-yield-is-generated)
7. [Section 6: How It Works](#7-section-6-how-it-works)
8. [Section 7: Live Protocol Stats](#8-section-7-live-protocol-stats)
9. [Section 8: Built With](#9-section-8-built-with)
10. [Section 9: Security & Compliance](#10-section-9-security--compliance)
11. [Section 10: Final CTA](#11-section-10-final-cta)
12. [Section 11: Footer](#12-section-11-footer)
13. [Copy/Content Reference](#13-copycontent-reference)
14. [Design Guidelines](#14-design-guidelines)
15. [Components Structure](#15-components-structure)
16. [Prompt for Claude Code](#16-prompt-for-claude-code)

---

## 1. Content Strategy

### 1.1 Target Audience

| Audience | Needs | Content Focus |
|----------|-------|---------------|
| **Retail Investors (ID)** | Simple explanation, trust | Benefits, security, how-to |
| **Crypto Natives** | Technical credibility | Tech stack, yield mechanism |
| **Hackathon Judges** | Innovation, execution | RWA angle, completeness |

### 1.2 Key Messages

1. **Primary:** "Ubah Rupiah jadi Emas Digital yang Produktif"
2. **Secondary:** "Yield-bearing gold backed by real assets"
3. **Technical:** "ERC-4626 vault on Mantle with IDRX integration"

### 1.3 Content Principles

- ✅ **Informatif** - Jelaskan dengan jelas, hindari jargon
- ✅ **Transparan** - Tunjukkan bagaimana yield dihasilkan
- ✅ **Credible** - Tampilkan live data, tech stack
- ✅ **Actionable** - CTA yang jelas di setiap section
- ❌ **Tidak Over-promise** - Jangan klaim unrealistic APY
- ❌ **Tidak Terlalu Teknis** - Save for docs

---

## 2. Section 1: Hero

### 2.1 Purpose
First impression, communicate value proposition dalam 5 detik.

### 2.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                         [LOGO]                                  │
│                        AuRoom                                   │
│                                                                 │
│            "From Rupiah to Yield-Bearing Gold"                  │
│                                                                 │
│      Transform your Indonesian Rupiah into tokenized gold       │
│         that earns yield while you sleep.                       │
│                                                                 │
│         [🚀 Start Swapping]    [📖 Learn More]                  │
│                                                                 │
│                                                                 │
│     ┌─────────────────────────────────────────────────┐        │
│     │                                                 │        │
│     │          [HERO ILLUSTRATION]                    │        │
│     │     IDRX coins → Gold bars → Yield growth      │        │
│     │                                                 │        │
│     └─────────────────────────────────────────────────┘        │
│                                                                 │
│                          ↓ Scroll                               │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 Content

**Tagline Options:**
1. "From Rupiah to Yield-Bearing Gold" ⭐ (Recommended)
2. "Your Gateway to Productive Gold"
3. "Indonesian Rupiah Meets Digital Gold"
4. "Emas Digital yang Menghasilkan"

**Subheadline:**
"Transform your Indonesian Rupiah into tokenized gold that earns yield. Backed by real assets, powered by DeFi."

**CTA Buttons:**
- Primary: "Start Swapping" → /swap
- Secondary: "Learn More" → scroll to next section

### 2.4 Visual Elements

- Animated gradient background (gold/amber tones)
- Floating coin/gold bar illustrations
- Subtle particle effects
- Logo with golden accent

---

## 3. Section 2: What is AuRoom

### 3.1 Purpose
Explain the protocol in simple terms.

### 3.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    What is AuRoom?                              │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  AuRoom is a Real World Asset (RWA) protocol that        │  │
│  │  bridges Indonesian Rupiah to tokenized gold. We make    │  │
│  │  gold investment accessible, productive, and compliant.  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │     🌍      │  │     💰      │  │     ✅      │            │
│  │  Accessible │  │ Productive  │  │  Compliant  │            │
│  │             │  │             │  │             │            │
│  │ Swap from   │  │ Earn yield  │  │ KYC-verified│            │
│  │ Rupiah in   │  │ on your     │  │ for         │            │
│  │ minutes     │  │ gold        │  │ security    │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Content

**Headline:** "What is AuRoom?"

**Description:**
```
AuRoom is a Real World Asset (RWA) protocol built on Mantle Network 
that enables anyone to convert Indonesian Rupiah (IDRX) into 
tokenized gold (XAUT) and earn yield through our innovative vault system.

We believe gold investment should be:
- Accessible to everyone, not just the wealthy
- Productive, generating returns instead of sitting idle
- Compliant with identity verification for security
```

**Three Pillars:**

| Pillar | Icon | Title | Description |
|--------|------|-------|-------------|
| 1 | 🌍 | Accessible | Swap from Rupiah to gold in minutes. No minimum investment, no bank visits. |
| 2 | 💰 | Productive | Your gold earns yield through DeFi liquidity provision. No more idle assets. |
| 3 | ✅ | Compliant | Identity verification ensures secure, legitimate transactions. |

---

## 4. Section 3: Understanding the Assets

### 4.1 Purpose
Educate users about IDRX and XAUT.

### 4.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                 Understanding the Assets                        │
│                                                                 │
│  ┌────────────────────────┐    ┌────────────────────────┐      │
│  │                        │    │                        │      │
│  │    [IDRX LOGO]         │    │    [XAUT LOGO]         │      │
│  │                        │    │                        │      │
│  │    IDRX                │    │    XAUT                │      │
│  │    Indonesian Rupiah   │    │    Tether Gold         │      │
│  │    Stablecoin          │    │    (Tokenized)         │      │
│  │                        │    │                        │      │
│  │    ─────────────────   │    │    ─────────────────   │      │
│  │                        │    │                        │      │
│  │    1 IDRX = 1 IDR      │    │    1 XAUT = 1 oz Gold  │      │
│  │                        │    │                        │      │
│  │    • Pegged to Rupiah  │    │    • Backed by real    │      │
│  │    • Issued by PT      │    │      gold in Swiss     │      │
│  │      Rupiah Token      │    │      vaults            │      │
│  │    • Regulated in      │    │    • Issued by Tether  │      │
│  │      Indonesia         │    │    • Redeemable for    │      │
│  │    • On-ramp from      │    │      physical gold     │      │
│  │      local banks       │    │    • ~$2,700/XAUT      │      │
│  │                        │    │                        │      │
│  │    [Learn about IDRX]  │    │    [Learn about XAUT]  │      │
│  │                        │    │                        │      │
│  └────────────────────────┘    └────────────────────────┘      │
│                                                                 │
│                         ─── Flow ───                            │
│                                                                 │
│        IDRX ──────────→ USDC ──────────→ XAUT                  │
│       (Rupiah)      (Bridge)        (Gold)                     │
│                                                                 │
│    "Your Rupiah becomes gold in one seamless transaction"      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3 Content

**Headline:** "Understanding the Assets"

**IDRX Card:**
```
IDRX - Indonesian Rupiah Stablecoin

IDRX is a stablecoin pegged 1:1 to Indonesian Rupiah, 
issued by PT Rupiah Token Indonesia.

Key Facts:
• 1 IDRX = 1 IDR (always)
• Regulated by Indonesian authorities
• Easy on-ramp from local banks
• No volatility vs Rupiah

Why IDRX?
IDRX allows Indonesians to enter the crypto ecosystem 
using their local currency without exposure to USD volatility.
```

**XAUT Card:**
```
XAUT - Tether Gold (Tokenized Gold)

XAUT is a tokenized representation of physical gold, 
where 1 XAUT = 1 troy ounce of gold stored in Swiss vaults.

Key Facts:
• Backed 1:1 by physical gold
• Stored in Swiss vaults (Tether custody)
• Redeemable for physical gold
• Current price: ~$2,700 per XAUT

Why XAUT?
XAUT gives you exposure to real gold prices with the 
flexibility of a digital asset. Trade 24/7, no storage fees.
```

**Flow Explanation:**
```
Your Journey: IDRX → USDC → XAUT

AuRoom routes your swap through USDC for optimal pricing:
1. IDRX swaps to USDC (Rupiah to Dollar)
2. USDC swaps to XAUT (Dollar to Gold)

This happens in ONE transaction - you don't need to do anything manually.
```

---

## 5. Section 4: Why RWA Matters

### 5.1 Purpose
Explain RWA concept and why gold specifically.

### 5.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    Why Real World Assets?                       │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  "RWA bridges the gap between traditional finance and    │  │
│  │   blockchain, bringing real-world value on-chain."       │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│     ┌──────────────────┐          ┌──────────────────┐         │
│     │  Traditional     │          │  With AuRoom     │         │
│     │  Gold Investment │    VS    │  (RWA)           │         │
│     │                  │          │                  │         │
│     │  ❌ High minimum │          │  ✅ Any amount   │         │
│     │  ❌ Storage fees │          │  ✅ No fees      │         │
│     │  ❌ Illiquid     │          │  ✅ 24/7 liquid  │         │
│     │  ❌ No yield     │          │  ✅ Earns yield  │         │
│     │  ❌ Physical risk│          │  ✅ Secure vault │         │
│     └──────────────────┘          └──────────────────┘         │
│                                                                 │
│                      Why Gold?                                  │
│                                                                 │
│     ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│     │   📈    │  │   🛡️    │  │   🌐    │  │   💎    │    │
│     │ 5,000+  │  │ Inflation│  │ Globally │  │ Tangible │    │
│     │ Years   │  │ Hedge    │  │ Accepted │  │ Value    │    │
│     │ of Value│  │          │  │          │  │          │    │
│     └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 Content

**Headline:** "Why Real World Assets?"

**Quote:**
"RWA (Real World Assets) bridges the gap between traditional finance and blockchain, bringing tangible, real-world value on-chain. Instead of speculative tokens, you own a representation of actual assets."

**Comparison Table:**

| Aspect | Traditional Gold | AuRoom (RWA) |
|--------|------------------|--------------|
| Minimum Investment | Rp 5-10 juta | Any amount |
| Storage | Pay fees or risk at home | Secure Swiss vaults |
| Liquidity | Sell at gold shops (limited hours) | 24/7 on-chain |
| Yield | None (idle asset) | Earn from DeFi |
| Verification | Physical inspection | On-chain proof |

**Why Gold? (4 Points):**

1. **5,000+ Years of Value**
   - Gold has maintained value across civilizations
   - Proven store of value through all economic cycles

2. **Inflation Hedge**
   - Gold historically outperforms during inflation
   - Protects purchasing power vs fiat currencies

3. **Globally Accepted**
   - Universal value recognition
   - No country-specific risk

4. **Tangible Backing**
   - Real physical asset, not just code
   - Redeemable for actual gold

---

## 6. Section 5: How Yield is Generated

### 6.1 Purpose
Transparency about yield source - critical for trust.

### 6.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                  How is Yield Generated?                        │
│                                                                 │
│     "Transparency is our priority. Here's exactly how          │
│      your gold generates returns."                              │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │                    YIELD FLOW DIAGRAM                     │  │
│  │                                                           │  │
│  │    ┌─────────┐      ┌─────────┐      ┌─────────┐         │  │
│  │    │  Your   │      │  Gold   │      │ Liquidity│         │  │
│  │    │  XAUT   │ ───→ │  Vault  │ ───→ │  Pool   │         │  │
│  │    │         │      │ (gXAUT) │      │         │         │  │
│  │    └─────────┘      └─────────┘      └─────────┘         │  │
│  │                           │                │              │  │
│  │                           │                │              │  │
│  │                           ▼                ▼              │  │
│  │                     ┌───────────────────────┐             │  │
│  │                     │   Trading Fees (0.3%) │             │  │
│  │                     │   from DEX Swaps      │             │  │
│  │                     └───────────────────────┘             │  │
│  │                                │                          │  │
│  │                                ▼                          │  │
│  │                     ┌───────────────────────┐             │  │
│  │                     │  Distributed to Vault │             │  │
│  │                     │  → Share Price ↑      │             │  │
│  │                     │  → Your gXAUT worth   │             │  │
│  │                     │     more XAUT         │             │  │
│  │                     └───────────────────────┘             │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  💡 Key Points:                                           │  │
│  │                                                           │  │
│  │  • Yield comes from REAL trading activity, not inflation  │  │
│  │  • 0.3% fee on every swap goes to liquidity providers     │  │
│  │  • No lock-up period - withdraw anytime                   │  │
│  │  • Yield varies based on trading volume                   │  │
│  │  • Current estimated APY: ~5-15% (varies)                 │  │
│  │                                                           │  │
│  │  ⚠️ Note: APY is not guaranteed and depends on market    │  │
│  │     activity. Past performance ≠ future results.         │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│                    Current Vault Stats                          │
│                                                                 │
│     ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│     │    TVL    │  │  Share    │  │ Est. APY  │               │
│     │  150 XAUT │  │  Price    │  │  ~12.5%   │               │
│     │ (~$405K)  │  │  1.0345   │  │           │               │
│     └───────────┘  └───────────┘  └───────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 6.3 Content

**Headline:** "How is Yield Generated?"

**Subheadline:**
"Transparency is our priority. Here's exactly how your gold generates returns."

**Yield Mechanism Explanation:**
```
The AuRoom Yield Mechanism

1. DEPOSIT
   You deposit XAUT into the GoldVault and receive gXAUT 
   (Gold Vault Tokens) representing your share.

2. LIQUIDITY PROVISION
   The vault's XAUT is paired with USDC in liquidity pools,
   enabling trading on the decentralized exchange.

3. FEE GENERATION
   Every time someone swaps tokens, they pay a 0.3% fee.
   This fee is distributed to liquidity providers.

4. YIELD ACCUMULATION
   Fees accumulate in the vault, increasing total assets.
   Your gXAUT stays the same, but it's worth MORE XAUT.

5. WITHDRAW
   When you redeem gXAUT, you get back more XAUT than 
   you deposited. That's your yield!
```

**Key Points (Transparency Box):**
- ✅ Yield comes from REAL trading activity, not token inflation
- ✅ 0.3% fee on every swap goes to liquidity providers
- ✅ No lock-up period - withdraw your gold anytime
- ✅ Yield varies based on trading volume
- ⚠️ APY is NOT guaranteed and depends on market activity
- ⚠️ Past performance does not guarantee future results

**Current Stats (Live from contract):**
- TVL: [live data] XAUT
- Share Price: [live data]
- Estimated APY: [calculated or mock]

---

## 7. Section 6: How It Works

### 7.1 Purpose
Step-by-step user journey.

### 7.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      How It Works                               │
│                                                                 │
│         Start your gold investment journey in 4 steps          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │   ┌─────┐         ┌─────┐         ┌─────┐         ┌─────┐ │
│  │   │  1  │─────────│  2  │─────────│  3  │─────────│  4  │ │
│  │   └─────┘         └─────┘         └─────┘         └─────┘ │
│  │     │               │               │               │     │
│  │     ▼               ▼               ▼               ▼     │
│  │  ┌──────┐       ┌──────┐       ┌──────┐       ┌──────┐   │
│  │  │  🔗  │       │  💱  │       │  🏦  │       │  📈  │   │
│  │  │      │       │      │       │      │       │      │   │
│  │  │Connect│       │ Swap │       │Stake │       │ Earn │   │
│  │  │Wallet │       │      │       │      │       │      │   │
│  │  └──────┘       └──────┘       └──────┘       └──────┘   │
│  │                                                         │   │
│  │  Connect your    Swap IDRX     Deposit XAUT   Watch your │
│  │  wallet and      to XAUT in    into GoldVault yield grow │
│  │  get verified    one click     to get gXAUT   over time  │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  Step 1: Connect & Verify                                │  │
│  │  ────────────────────────                                │  │
│  │  Connect your Web3 wallet (MetaMask, etc.) and complete  │  │
│  │  identity verification. This is required for compliance  │  │
│  │  and protects all users in the ecosystem.                │  │
│  │                                                          │  │
│  │  ⏱️ Time: ~2 minutes                                     │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  Step 2: Swap IDRX to XAUT                               │  │
│  │  ─────────────────────────                               │  │
│  │  Enter your IDRX amount and we'll show you exactly how   │  │
│  │  much XAUT you'll receive. Confirm and sign the          │  │
│  │  transaction. Your gold arrives in seconds.              │  │
│  │                                                          │  │
│  │  ⏱️ Time: ~30 seconds                                    │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  Step 3: Stake in GoldVault                              │  │
│  │  ──────────────────────────                              │  │
│  │  Deposit your XAUT into the GoldVault to start earning   │  │
│  │  yield. You'll receive gXAUT tokens representing your    │  │
│  │  share of the vault.                                     │  │
│  │                                                          │  │
│  │  ⏱️ Time: ~30 seconds                                    │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  Step 4: Earn & Withdraw                                 │  │
│  │  ───────────────────────                                 │  │
│  │  Your gXAUT automatically accumulates yield. Check your  │  │
│  │  growing balance anytime. Withdraw to XAUT whenever you  │  │
│  │  want - no lock-up periods, no penalties.                │  │
│  │                                                          │  │
│  │  ⏱️ Withdraw: Instant                                    │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│                  [🚀 Start Now - Go to Swap]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Content

**Headline:** "How It Works"
**Subheadline:** "Start your gold investment journey in 4 simple steps"

**Steps:**

| Step | Icon | Title | Description | Time |
|------|------|-------|-------------|------|
| 1 | 🔗 | Connect & Verify | Connect wallet, complete KYC | ~2 min |
| 2 | 💱 | Swap | Exchange IDRX for XAUT | ~30 sec |
| 3 | 🏦 | Stake | Deposit XAUT, receive gXAUT | ~30 sec |
| 4 | 📈 | Earn | Watch yield grow, withdraw anytime | Instant |

---

## 8. Section 7: Live Protocol Stats

### 8.1 Purpose
Social proof, credibility through real data.

### 8.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    Live Protocol Stats                          │
│                                                                 │
│        Real-time data from AuRoom smart contracts              │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │             │ │             │ │             │ │             ││
│  │   $405,000  │ │    150      │ │   1.0345    │ │   ~12.5%    ││
│  │             │ │             │ │             │ │             ││
│  │  Total Value│ │    XAUT     │ │   gXAUT     │ │  Estimated  ││
│  │   Locked    │ │  in Vault   │ │Share Price  │ │     APY     ││
│  │             │ │             │ │             │ │             ││
│  │   ↑ 5.2%    │ │  ↑ 12 XAUT  │ │  ↑ 3.45%    │ │             ││
│  │  (24h)      │ │  (24h)      │ │  (30d)      │ │             ││
│  │             │ │             │ │             │ │             ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Current Exchange Rate                                    │  │
│  │                                                           │  │
│  │  1 XAUT = 41,500,000 IDRX                                │  │
│  │         ≈ $2,700 USD                                     │  │
│  │         ≈ Rp 41,500,000                                  │  │
│  │                                                           │  │
│  │  Last updated: 2 seconds ago  [🔄 Refresh]               │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 8.3 Data Sources

| Stat | Source | Contract Call |
|------|--------|---------------|
| TVL | GoldVault | `totalAssets()` |
| Share Price | GoldVault | `convertToAssets(1e6)` |
| XAUT Price | XAUT/USDC Pool | `getReserves()` + calculation |
| APY | Calculated | (share price change over time) |

### 8.4 Notes
- Auto-refresh every 30 seconds
- Show "Last updated" timestamp
- Handle loading states gracefully
- For APY: Can be calculated or show "Variable" if no historical data

---

## 9. Section 8: Built With

### 9.1 Purpose
Technical credibility for judges and developers.

### 9.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                       Built With                                │
│                                                                 │
│           Powered by industry-leading technology               │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐│   │
│  │   │ [MANTLE] │  │[UNISWAP] │  │ [ERC4626]│  │ [ERC3643]││   │
│  │   │          │  │          │  │          │  │          ││   │
│  │   │  Mantle  │  │ Uniswap  │  │ ERC-4626 │  │ ERC-3643 ││   │
│  │   │ Network  │  │   V2     │  │  Vault   │  │Compliance││   │
│  │   └──────────┘  └──────────┘  └──────────┘  └──────────┘│   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  🔷 Mantle Network                                        │  │
│  │     Layer 2 scaling solution with low fees and high      │  │
│  │     throughput. Ethereum security with better UX.        │  │
│  │                                                           │  │
│  │  🦄 Uniswap V2 AMM                                        │  │
│  │     Battle-tested DEX protocol for trustless token       │  │
│  │     swaps with deep liquidity.                           │  │
│  │                                                           │  │
│  │  🏦 ERC-4626 Tokenized Vault                              │  │
│  │     Industry standard for yield-bearing vaults.          │  │
│  │     Composable, audited, widely supported.               │  │
│  │                                                           │  │
│  │  ✅ ERC-3643 Compliance                                   │  │
│  │     Identity-based token standard for regulated assets.  │  │
│  │     Ensures KYC compliance on-chain.                     │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│                      Other Technologies                         │
│                                                                 │
│     [Next.js] [TypeScript] [wagmi] [Tailwind] [Foundry]        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Content

| Technology | Description | Why We Use It |
|------------|-------------|---------------|
| **Mantle Network** | L2 scaling solution | Low fees, fast transactions, Ethereum security |
| **Uniswap V2** | AMM DEX protocol | Proven, audited, deep liquidity |
| **ERC-4626** | Tokenized vault standard | Industry standard, composable, transparent |
| **ERC-3643** | Compliance token standard | On-chain KYC, regulatory compliance |

**Secondary Tech (smaller badges):**
- Next.js 14
- TypeScript
- wagmi v2
- Tailwind CSS
- Foundry (testing)

---

## 10. Section 9: Security & Compliance

### 10.1 Purpose
Build trust through security features.

### 10.2 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   Security & Compliance                         │
│                                                                 │
│              Your assets are protected by design               │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │     🔐      │ │     🪪      │ │     📝      │ │     ⏰      ││
│  │             │ │             │ │             │ │             ││
│  │  Identity   │ │  On-Chain   │ │   Open      │ │  Time-      ││
│  │Verification │ │    KYC      │ │  Source     │ │  Locks      ││
│  │             │ │             │ │             │ │             ││
│  │ All users   │ │Verification │ │All contracts│ │Transaction  ││
│  │ must verify │ │ stored on   │ │ are public  │ │ deadlines   ││
│  │ identity    │ │ blockchain  │ │ & viewable  │ │ for safety  ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Smart Contract Security Features:                        │  │
│  │                                                           │  │
│  │  ✅ Slippage Protection                                   │  │
│  │     Transactions revert if price moves beyond tolerance   │  │
│  │                                                           │  │
│  │  ✅ Deadline Protection                                   │  │
│  │     Transactions expire to prevent stale executions       │  │
│  │                                                           │  │
│  │  ✅ Access Control                                        │  │
│  │     Only verified users can hold XAUT and gXAUT          │  │
│  │                                                           │  │
│  │  ✅ Non-Custodial                                         │  │
│  │     You always control your assets - we never hold keys  │  │
│  │                                                           │  │
│  │  ✅ Tested                                                │  │
│  │     106/106 tests passing with comprehensive coverage    │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  📋 Audit Status                                          │  │
│  │                                                           │  │
│  │  ⏳ Professional audit planned for mainnet launch         │  │
│  │                                                           │  │
│  │  Currently: Internal testing complete (106/106 tests)    │  │
│  │  Testnet: Mantle Sepolia deployment                      │  │
│  │                                                           │  │
│  │  [View Contracts on Explorer]                             │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 10.3 Security Features

| Feature | Icon | Description |
|---------|------|-------------|
| Identity Verification | 🔐 | All users must complete KYC |
| On-Chain KYC | 🪪 | Verification stored on blockchain |
| Open Source | 📝 | All contracts are public and viewable |
| Time-Locks | ⏰ | Transaction deadlines for safety |

**Smart Contract Features:**
- ✅ Slippage Protection
- ✅ Deadline Protection  
- ✅ Access Control
- ✅ Non-Custodial
- ✅ 106/106 Tests Passing

---

## 11. Section 10: Final CTA

### 11.1 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌───────────────────────────────────────────────────────┐    │
│   │                                                       │    │
│   │           Ready to Start Your Gold Journey?          │    │
│   │                                                       │    │
│   │    Join thousands of users who are already earning   │    │
│   │    yield on their gold investments with AuRoom.      │    │
│   │                                                       │    │
│   │                                                       │    │
│   │       [🚀 Start Swapping]     [🏦 Stake Gold]        │    │
│   │                                                       │    │
│   │                                                       │    │
│   │         No minimum investment. Start with any amount. │    │
│   │                                                       │    │
│   └───────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 11.2 Content

**Headline:** "Ready to Start Your Gold Journey?"

**Subheadline:** "Join users who are already earning yield on their gold investments with AuRoom."

**CTAs:**
- Primary: "🚀 Start Swapping" → /swap
- Secondary: "🏦 Stake Gold" → /vault

**Footer text:** "No minimum investment. Start with any amount."

---

## 12. Section 11: Footer

### 12.1 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │  [LOGO] AuRoom                                          │   │
│  │                                                         │   │
│  │  From Rupiah to Yield-Bearing Gold                     │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │  Product  │  │  Resources│  │  Legal    │  │  Connect  │   │
│  │           │  │           │  │           │  │           │   │
│  │  Swap     │  │  Docs     │  │  Terms    │  │  Twitter  │   │
│  │  Vault    │  │  FAQ      │  │  Privacy  │  │  Discord  │   │
│  │  Admin    │  │  GitHub   │  │  Risk     │  │  Telegram │   │
│  │           │  │           │  │           │  │           │   │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Built for Mantle Global Hackathon 2025                        │
│                                                                 │
│  © 2024 AuRoom Protocol. All rights reserved.                  │
│                                                                 │
│  ⚠️ This is a testnet demo. Do not use real funds.            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. Copy/Content Reference

### 13.1 All Headlines

| Section | Headline |
|---------|----------|
| Hero | "From Rupiah to Yield-Bearing Gold" |
| What is AuRoom | "What is AuRoom?" |
| Assets | "Understanding the Assets" |
| RWA | "Why Real World Assets?" |
| Yield | "How is Yield Generated?" |
| How It Works | "How It Works" |
| Stats | "Live Protocol Stats" |
| Tech | "Built With" |
| Security | "Security & Compliance" |
| Final CTA | "Ready to Start Your Gold Journey?" |

### 13.2 Key Terminology

| Term | Definition (for tooltips/glossary) |
|------|-----------------------------------|
| **RWA** | Real World Assets - tokenized representations of physical assets |
| **IDRX** | Indonesian Rupiah Stablecoin, 1:1 pegged to IDR |
| **XAUT** | Tether Gold, 1 token = 1 troy ounce of physical gold |
| **gXAUT** | Gold Vault Token, represents share in yield-generating vault |
| **TVL** | Total Value Locked - total assets deposited in protocol |
| **APY** | Annual Percentage Yield - estimated yearly return |
| **ERC-4626** | Ethereum standard for tokenized vaults |
| **AMM** | Automated Market Maker - enables trustless swaps |

### 13.3 Disclaimers (Required)

```
⚠️ Risk Disclaimer

- This is a testnet demo on Mantle Sepolia. Do not use real funds.
- APY is not guaranteed and varies based on market activity.
- Past performance does not guarantee future results.
- Cryptocurrency investments carry inherent risks.
- Do your own research before investing.
```

---

## 14. Design Guidelines

### 14.1 Color Palette

```css
/* Primary - Gold tones */
--gold-50: #FFFBEB;
--gold-100: #FEF3C7;
--gold-200: #FDE68A;
--gold-300: #FCD34D;
--gold-400: #FBBF24;
--gold-500: #F59E0B;  /* Primary gold */
--gold-600: #D97706;
--gold-700: #B45309;
--gold-800: #92400E;
--gold-900: #78350F;

/* Accent - Deep amber */
--amber-500: #F59E0B;
--amber-600: #D97706;

/* Neutrals */
--slate-50: #F8FAFC;
--slate-100: #F1F5F9;
--slate-800: #1E293B;
--slate-900: #0F172A;

/* Status */
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### 14.2 Typography

```css
/* Headings */
font-family: 'Inter', system-ui, sans-serif;
h1: 48px/56px, font-weight: 700;
h2: 36px/44px, font-weight: 600;
h3: 24px/32px, font-weight: 600;

/* Body */
body: 16px/24px, font-weight: 400;
body-sm: 14px/20px;

/* Accent */
numbers: 'JetBrains Mono', monospace;
```

### 14.3 Spacing

```css
--section-padding: 80px 0;
--section-padding-mobile: 48px 0;
--container-max-width: 1200px;
--card-padding: 24px;
--element-gap: 16px;
```

### 14.4 Visual Elements

- **Hero:** Gradient background (gold → amber)
- **Cards:** Subtle border, slight shadow on hover
- **Icons:** Lucide icons, consistent 24px size
- **Illustrations:** Gold bars, coins, charts (optional)
- **Animations:** Subtle fade-in on scroll, hover effects

---

## 15. Components Structure

```
components/landing/
├── LandingPage.tsx           # Main page wrapper
├── Hero.tsx                  # Hero section
├── WhatIsAuRoom.tsx         # Protocol explanation
├── UnderstandingAssets.tsx  # IDRX & XAUT cards
├── WhyRWA.tsx               # RWA explanation
├── HowYieldWorks.tsx        # Yield mechanism
├── HowItWorks.tsx           # Step-by-step guide
├── LiveStats.tsx            # Real-time stats
├── BuiltWith.tsx            # Tech stack
├── SecurityCompliance.tsx   # Security features
├── FinalCTA.tsx             # Final call to action
├── Footer.tsx               # Footer
│
├── shared/
│   ├── SectionWrapper.tsx   # Consistent section styling
│   ├── StatCard.tsx         # Stat display card
│   ├── FeatureCard.tsx      # Feature card with icon
│   ├── StepCard.tsx         # Step-by-step card
│   ├── TechBadge.tsx        # Technology badge
│   ├── AssetCard.tsx        # Token info card
│   └── ComparisonTable.tsx  # Traditional vs AuRoom
│
└── animations/
    ├── FadeIn.tsx           # Fade in on scroll
    └── CountUp.tsx          # Animated number counter
```

---

## 16. Prompt for Claude Code

```
Enhance landing page untuk AuRoom Protocol dengan fokus pada konten informatif dan visual yang menarik.

## Context

AuRoom Protocol adalah RWA (Real World Asset) platform yang memungkinkan user Indonesia swap IDRX ke tokenized gold (XAUT) dan earn yield melalui GoldVault.

Saat ini landing page sudah ada tapi basic. Butuh enhancement dengan konten yang lebih informatif dan engaging.

## Deployed Contracts (Mantle Sepolia)

```typescript
export const CONTRACTS = {
  IDRX: "0x6EC7D79792D4D73eb711d36aB5b5f24014f18d05",
  USDC: "0x96ABff3a2668B811371d7d763f06B3832CEdf38d",
  XAUT: "0x1d6f37f76E2AB1cf9A242a34082eDEc163503A78",
  GoldVault: "0xd92cE2F13509840B1203D35218227559E64fbED0",
  SwapRouter: "0xF948Dd812E7fA072367848ec3D198cc61488b1b9",
};
```

## Required Sections (dalam urutan)

### 1. HERO
- Logo & Brand name "AuRoom"
- Tagline: "From Rupiah to Yield-Bearing Gold"
- Subheadline: "Transform your Indonesian Rupiah into tokenized gold that earns yield while you sleep."
- CTA: "Start Swapping" (primary), "Learn More" (secondary)
- Visual: Gold gradient background, subtle animations

### 2. WHAT IS AUROOM
- Penjelasan singkat 2-3 paragraf
- 3 pillars dengan icons:
  - 🌍 Accessible: "Swap from Rupiah in minutes"
  - 💰 Productive: "Earn yield on your gold"
  - ✅ Compliant: "KYC-verified for security"

### 3. UNDERSTANDING THE ASSETS
- IDRX Card:
  - Logo, nama: "IDRX - Indonesian Rupiah Stablecoin"
  - "1 IDRX = 1 IDR (always)"
  - Key facts: Pegged to Rupiah, Regulated, Easy on-ramp
- XAUT Card:
  - Logo, nama: "XAUT - Tether Gold"
  - "1 XAUT = 1 troy ounce of gold"
  - Key facts: Backed by real gold, Swiss vaults, ~$2,700/XAUT
- Flow diagram: IDRX → USDC → XAUT

### 4. WHY RWA MATTERS
- Quote box tentang RWA
- Comparison table:
  | Traditional Gold | AuRoom (RWA) |
  | High minimum | Any amount |
  | Storage fees | No fees |
  | Illiquid | 24/7 liquid |
  | No yield | Earns yield |
- 4 alasan kenapa Gold: History, Inflation hedge, Global, Tangible

### 5. HOW YIELD IS GENERATED ⭐ (Important)
- Diagram flow:
  Your XAUT → GoldVault (gXAUT) → Liquidity Pool → Trading Fees (0.3%) → Back to Vault → Share Price ↑
- Key points box:
  - ✅ Yield dari trading activity, bukan inflation
  - ✅ 0.3% fee setiap swap
  - ✅ No lock-up period
  - ⚠️ APY varies, not guaranteed
- Live vault stats: TVL, Share Price, Est. APY

### 6. HOW IT WORKS
- 4 steps dengan icons:
  1. 🔗 Connect & Verify (~2 min)
  2. 💱 Swap IDRX to XAUT (~30 sec)
  3. 🏦 Stake in GoldVault (~30 sec)
  4. 📈 Earn & Withdraw (instant)
- Expandable details untuk tiap step

### 7. LIVE PROTOCOL STATS
- 4 stat cards (fetch from contracts):
  - TVL (total XAUT in vault)
  - XAUT in Vault
  - Share Price (gXAUT value)
  - Estimated APY
- Exchange rate display: "1 XAUT = X IDRX"
- Auto-refresh, last updated timestamp

### 8. BUILT WITH
- 4 main tech badges with descriptions:
  - Mantle Network (L2 scaling)
  - Uniswap V2 (AMM DEX)
  - ERC-4626 (Vault standard)
  - ERC-3643 (Compliance)
- Secondary badges: Next.js, TypeScript, wagmi, Tailwind, Foundry

### 9. SECURITY & COMPLIANCE
- 4 security pillars:
  - 🔐 Identity Verification
  - 🪪 On-Chain KYC
  - 📝 Open Source
  - ⏰ Time-Locks
- Smart contract features list:
  - Slippage Protection
  - Deadline Protection
  - Access Control
  - Non-Custodial
  - 106/106 Tests Passing
- Audit status: "Professional audit planned for mainnet"

### 10. FINAL CTA
- Headline: "Ready to Start Your Gold Journey?"
- Two buttons: "Start Swapping", "Stake Gold"
- Subtext: "No minimum investment. Start with any amount."

### 11. FOOTER
- Logo + tagline
- Links: Product, Resources, Legal, Social
- "Built for Mantle Global Hackathon 2025"
- Disclaimer: "This is testnet demo. Do not use real funds."

## Design Requirements

### Colors
- Primary: Gold (#F59E0B, #D97706)
- Background: Dark slate (#0F172A, #1E293B)
- Text: Light (#F8FAFC, #F1F5F9)
- Accents: Amber gradients

### Typography
- Headings: Inter, bold
- Body: Inter, regular
- Numbers: JetBrains Mono

### Animations
- Fade in on scroll (intersection observer)
- Stat counters animate up
- Subtle hover effects on cards
- Smooth scroll navigation

### Responsive
- Mobile-first approach
- Stack cards on mobile
- Collapsible sections on mobile
- Touch-friendly CTAs

## Components to Create

```
components/landing/
├── LandingPage.tsx
├── Hero.tsx
├── WhatIsAuRoom.tsx
├── UnderstandingAssets.tsx
├── WhyRWA.tsx
├── HowYieldWorks.tsx
├── HowItWorks.tsx
├── LiveStats.tsx
├── BuiltWith.tsx
├── SecurityCompliance.tsx
├── FinalCTA.tsx
└── LandingFooter.tsx
```

## Data Hooks Needed

```typescript
// hooks/useLandingStats.ts
export function useLandingStats() {
  // Fetch from contracts:
  // - GoldVault.totalAssets()
  // - GoldVault.totalSupply()
  // - GoldVault.convertToAssets(1e6)
  // - XAUT/USDC price from pool
  
  return {
    tvl,           // Total XAUT in vault
    tvlUsd,        // TVL in USD
    sharePrice,    // gXAUT share price
    estimatedApy,  // Calculated or mock
    xautPrice,     // XAUT price in USD
    xautPriceIdrx, // XAUT price in IDRX
  };
}
```

## Important Notes

1. Semua stats harus live dari contract (kecuali APY bisa mock)
2. Include disclaimers tentang risk
3. Jangan over-promise tentang returns
4. Mobile responsive adalah MUST
5. Loading states untuk semua async data
6. Smooth scroll dari "Learn More" ke section berikutnya
7. Semua external links open in new tab

## Content Tone

- Professional tapi approachable
- Educational, tidak intimidating
- Transparan tentang risks
- Confident tapi tidak arrogant

Buatkan enhanced landing page dengan semua sections di atas.
```

---

## 📊 Summary

### Sections Included (11 total)

| # | Section | Purpose | Priority |
|---|---------|---------|----------|
| 1 | Hero | First impression | P0 |
| 2 | What is AuRoom | Value proposition | P0 |
| 3 | Understanding Assets | Educate about IDRX/XAUT | P0 |
| 4 | Why RWA | Differentiation | P0 |
| 5 | How Yield Works | Transparency | P0 |
| 6 | How It Works | User journey | P0 |
| 7 | Live Stats | Credibility | P1 |
| 8 | Built With | Technical proof | P1 |
| 9 | Security | Trust | P1 |
| 10 | Final CTA | Conversion | P0 |
| 11 | Footer | Navigation | P2 |

### Key Messages

1. **Primary:** IDRX → Gold yang produktif
2. **RWA:** Real asset backing, bukan speculation
3. **Yield:** Transparent source (trading fees)
4. **Compliant:** KYC untuk keamanan
5. **Accessible:** No minimum, instant

### What's NOT Included (by design)

- ❌ Tokenomics detail
- ❌ Roadmap detail
- ❌ Team bios
- ❌ Blog/News
- ❌ Contract addresses (ada di /admin)
- ❌ Governance

---

**Document Version:** 1.0.0  
**Last Updated:** December 21, 2024  
**Status:** Ready for Development
