'use client';

import Link from 'next/link';
import { WalletButton } from '@/components/shared/WalletButton';

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/100">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                            AuRoom
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/swap"
                            className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                        >
                            Swap
                        </Link>
                        <Link
                            href="/borrow"
                            className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                        >
                            Borrow
                        </Link>
                        <Link
                            href="/instant-borrow"
                            className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1"
                        >
                            <span>⚡</span>
                            Instant Borrow
                        </Link>
                        <Link
                            href="/instant-borrow-v2"
                            className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1"
                        >
                            <span>⚡</span>
                            Instant Borrow V2
                            <span className="px-1.5 py-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-[10px] font-bold rounded">
                                NEW
                            </span>
                        </Link>
                        <Link
                            href="/vault"
                            className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                        >
                            Vault
                        </Link>
                        <Link
                            href="/verify"
                            className="text-sm font-medium text-white/80 hover:text-yellow-400 transition-colors"
                        >
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
