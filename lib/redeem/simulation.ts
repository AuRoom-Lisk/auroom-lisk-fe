// lib/redeem/simulation.ts

export interface RedeemRequest {
    amount: bigint;
    bank: string;
    accountNumber: string;
    accountName: string;
}

export interface RedeemResult {
    success: boolean;
    referenceNumber: string;
    amount: bigint;
    bank: string;
    accountNumber: string;
    accountName: string;
    timestamp: Date;
    message: string;
}

export async function simulateRedeem(request: RedeemRequest): Promise<RedeemResult> {
    // Simulate network delay (3-5 seconds)
    const delay = 3000 + Math.random() * 2000;
    await new Promise(resolve => setTimeout(resolve, delay));

    // Generate fake reference number
    const refNumber = `SIM-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    return {
        success: true,
        referenceNumber: refNumber,
        amount: request.amount,
        bank: request.bank,
        accountNumber: request.accountNumber,
        accountName: request.accountName,
        timestamp: new Date(),
        message: 'Transfer berhasil (simulasi). Di production, dana akan masuk dalam 1-2 hari kerja.',
    };
}

export interface BankOption {
    id: string;
    name: string;
}

export const SUPPORTED_BANKS: BankOption[] = [
    { id: 'bca', name: 'BCA' },
    { id: 'mandiri', name: 'Mandiri' },
    { id: 'bni', name: 'BNI' },
    { id: 'bri', name: 'BRI' },
    { id: 'cimb', name: 'CIMB Niaga' },
    { id: 'permata', name: 'Permata' },
    { id: 'danamon', name: 'Danamon' },
    { id: 'other', name: 'Bank Lainnya' },
];
