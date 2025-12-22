'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-zinc-950">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                            AuRoom Protocol
                        </h3>
                        <p className="text-sm text-white/60">
                            From Rupiah to Yield-Bearing Gold on Mantle Network
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/swap" className="text-white/60 hover:text-yellow-400 transition-colors">
                                    Swap
                                </Link>
                            </li>
                            <li>
                                <Link href="/vault" className="text-white/60 hover:text-yellow-400 transition-colors">
                                    Vault
                                </Link>
                            </li>
                            <li>
                                <Link href="/verify" className="text-white/60 hover:text-yellow-400 transition-colors">
                                    Verify
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Network */}
                    <div>
                        <h3 className="font-semibold mb-3 text-white">Network</h3>
                        <p className="text-sm text-white/60">
                            Mantle Sepolia Testnet
                        </p>
                        <p className="text-xs text-white/50 mt-1">
                            Chain ID: 5003
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
                    <p>&copy; 2024 AuRoom Protocol. Built for Mantle Global Hackathon 2025.</p>
                </div>
            </div>
        </footer>
    );
}
