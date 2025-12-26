'use client';

import { LTV_PRESETS, type LTVPreset, getLTVRingColor } from '@/lib/config/ltvPresets';
import { cn } from '@/lib/utils';

interface LTVSelectorProps {
    value: number;              // Current LTV in bps
    onChange: (ltv: number) => void;
    disabled?: boolean;
}

export function LTVSelector({ value, onChange, disabled }: LTVSelectorProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">🎚️ Pilih Tingkat Keamanan (LTV)</h3>
                <span className="text-sm text-white/60">
                    {LTV_PRESETS.find(p => p.value === value)?.label || '30%'}
                </span>
            </div>

            {/* Preset Buttons */}
            <div className="grid grid-cols-5 gap-2">
                {LTV_PRESETS.map((preset) => (
                    <button
                        key={preset.value}
                        onClick={() => !disabled && onChange(preset.value)}
                        disabled={disabled}
                        className={cn(
                            'relative p-3 rounded-xl border-2 transition-all duration-200',
                            'flex flex-col items-center gap-1',
                            'hover:scale-105 active:scale-95',
                            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                            value === preset.value
                                ? cn(
                                    'bg-gradient-to-br from-black/40 to-black/20',
                                    'border-' + preset.color + '-500',
                                    'ring-2',
                                    getLTVRingColor(preset.value),
                                    'shadow-lg'
                                )
                                : 'bg-zinc-900 border-yellow-500/20 hover:border-yellow-500/40'
                        )}
                    >
                        {/* Icon */}
                        <span className="text-2xl">{preset.icon}</span>

                        {/* Percentage */}
                        <span className={cn(
                            'text-sm font-bold',
                            value === preset.value ? 'text-white' : 'text-white/70'
                        )}>
                            {preset.label}
                        </span>

                        {/* Name */}
                        <span className={cn(
                            'text-[10px]',
                            value === preset.value ? 'text-white/90' : 'text-white/50'
                        )}>
                            {preset.name}
                        </span>

                        {/* Default Badge */}
                        {preset.isDefault && value !== preset.value && (
                            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-yellow-500 text-black text-[8px] font-bold rounded">
                                DEFAULT
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Description */}
            <div className="p-4 rounded-lg bg-black/20 border border-yellow-500/20">
                <p className="text-sm text-white/70">
                    <span className="font-semibold text-white">
                        {LTV_PRESETS.find(p => p.value === value)?.icon}{' '}
                        {LTV_PRESETS.find(p => p.value === value)?.name}:
                    </span>{' '}
                    {LTV_PRESETS.find(p => p.value === value)?.description}
                </p>
                <p className="text-xs text-white/50 mt-2">
                    ⓘ LTV rendah = lebih aman dari likuidasi, tapi butuh jaminan lebih banyak
                </p>
            </div>
        </div>
    );
}
