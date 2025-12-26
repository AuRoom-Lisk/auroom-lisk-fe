'use client';

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessingOverlayProps {
    isVisible: boolean;
    message?: string;
    className?: string;
}

export function ProcessingOverlay({
    isVisible,
    message = 'Processing...',
    className,
}: ProcessingOverlayProps) {
    if (!isVisible) return null;

    return (
        <div className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm',
            className
        )}>
            <div className="p-8 rounded-2xl bg-zinc-900 border-2 border-yellow-500/30 text-center">
                <Loader2 className="w-12 h-12 text-yellow-400 animate-spin mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
}
