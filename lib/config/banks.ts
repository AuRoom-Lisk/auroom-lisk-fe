/**
 * Bank Configuration for Pinjam Tunai
 * 
 * List of supported Indonesian banks for transfer simulation
 */

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

export function getBankByCode(code: string): Bank | undefined {
    return BANKS.find(b => b.code === code);
}
