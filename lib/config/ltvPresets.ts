/**
 * LTV Presets Configuration for Instant Borrow V2
 * 
 * Defines the 5 preset LTV levels with visual styling and descriptions
 */

export interface LTVPreset {
    value: number;      // Basis points (e.g., 3000 = 30%)
    label: string;      // Display label (e.g., "30%")
    name: string;       // Indonesian name
    icon: string;       // Emoji icon
    description: string; // Helper text
    color: 'green' | 'yellow' | 'orange' | 'red';
    isDefault?: boolean;
}

export const LTV_PRESETS: LTVPreset[] = [
    {
        value: 1000,
        label: '10%',
        name: 'Sangat Aman',
        icon: '🛡️',
        description: 'Jaminan 10x lipat dari pinjaman',
        color: 'green',
    },
    {
        value: 3000,
        label: '30%',
        name: 'Aman',
        icon: '⚖️',
        description: 'Rekomendasi untuk pemula',
        color: 'green',
        isDefault: true,
    },
    {
        value: 5000,
        label: '50%',
        name: 'Moderat',
        icon: '📈',
        description: 'Keseimbangan risiko dan efisiensi',
        color: 'yellow',
    },
    {
        value: 7000,
        label: '70%',
        name: 'Agresif',
        icon: '⚡',
        description: 'Maksimalkan pinjaman',
        color: 'orange',
    },
    {
        value: 7500,
        label: '75%',
        name: 'Maximum',
        icon: '🔥',
        description: 'Batas maksimum sistem',
        color: 'red',
    },
];

export const DEFAULT_LTV = 3000; // 30%

export function getLTVPreset(value: number): LTVPreset | undefined {
    return LTV_PRESETS.find(p => p.value === value);
}

export function getDefaultLTVPreset(): LTVPreset {
    return LTV_PRESETS.find(p => p.isDefault) || LTV_PRESETS[1];
}

export function getLTVColor(ltvBps: number): string {
    if (ltvBps <= 3000) return 'text-green-500';
    if (ltvBps <= 5000) return 'text-yellow-500';
    if (ltvBps <= 7000) return 'text-orange-500';
    return 'text-red-500';
}

export function getLTVBgColor(ltvBps: number): string {
    if (ltvBps <= 3000) return 'bg-green-500';
    if (ltvBps <= 5000) return 'bg-yellow-500';
    if (ltvBps <= 7000) return 'bg-orange-500';
    return 'bg-red-500';
}

export function getLTVBorderColor(ltvBps: number): string {
    if (ltvBps <= 3000) return 'border-green-500';
    if (ltvBps <= 5000) return 'border-yellow-500';
    if (ltvBps <= 7000) return 'border-orange-500';
    return 'border-red-500';
}

export function getLTVStatus(ltvBps: number): string {
    if (ltvBps <= 3000) return 'Aman ✅';
    if (ltvBps <= 5000) return 'Moderat ⚠️';
    if (ltvBps <= 7000) return 'Agresif ⚠️';
    return 'Maximum 🔥';
}

export function getLTVRingColor(ltvBps: number): string {
    if (ltvBps <= 3000) return 'ring-green-500';
    if (ltvBps <= 5000) return 'ring-yellow-500';
    if (ltvBps <= 7000) return 'ring-orange-500';
    return 'ring-red-500';
}
