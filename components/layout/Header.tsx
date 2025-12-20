'use client';

import Link from 'next/link';
import { WalletButton } from '@/components/shared/WalletButton';

export function Header() {
    return (
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600" />
                        <span className="text-xl font-bold">AuRoom</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/swap" className="text-sm font-medium hover:text-primary transition-colors">
                            Swap
                        </Link>
                        <Link href="/vault" className="text-sm font-medium hover:text-primary transition-colors">
                            Vault
                        </Link>
                        <Link href="/verify" className="text-sm font-medium hover:text-primary transition-colors">
                            Verify
                        </Link>
                    </nav>

                    {/* Wallet Button */}
                    <WalletButton />
                </div>
            </div>
        </header>
    );
}
