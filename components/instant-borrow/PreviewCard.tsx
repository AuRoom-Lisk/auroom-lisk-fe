'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface PreviewCardProps {
    title: string;
    items: {
        label: string;
        value: string;
        highlight?: boolean;
        warning?: boolean;
    }[];
    className?: string;
}

export function PreviewCard({ title, items, className }: PreviewCardProps) {
    return (
        <div className={cn(
            'p-4 rounded-xl bg-zinc-900/50 border border-yellow-500/20',
            className
        )}>
            <h3 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                <span>📊</span>
                {title}
            </h3>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                    >
                        <span className="text-white/60">{item.label}</span>
                        <span
                            className={cn(
                                'font-semibold flex items-center gap-1',
                                item.highlight && 'text-yellow-400',
                                item.warning && 'text-red-400',
                                !item.highlight && !item.warning && 'text-white'
                            )}
                        >
                            {item.value}
                            {item.highlight && !item.warning && (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            )}
                            {item.warning && (
                                <AlertCircle className="w-4 h-4 text-red-500" />
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
