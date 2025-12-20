'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-semibold mb-3">AuRoom Protocol</h3>
                        <p className="text-sm text-muted-foreground">
                            From Rupiah to Yield-Bearing Gold on Mantle Network
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/swap" className="text-muted-foreground hover:text-primary transition-colors">
                                    Swap
                                </Link>
                            </li>
                            <li>
                                <Link href="/vault" className="text-muted-foreground hover:text-primary transition-colors">
                                    Vault
                                </Link>
                            </li>
                            <li>
                                <Link href="/verify" className="text-muted-foreground hover:text-primary transition-colors">
                                    Verify
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Network */}
                    <div>
                        <h3 className="font-semibold mb-3">Network</h3>
                        <p className="text-sm text-muted-foreground">
                            Mantle Sepolia Testnet
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                            Chain ID: 5003
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 AuRoom Protocol. Built for Mantle Global Hackathon 2025.</p>
                </div>
            </div>
        </footer>
    );
}
