import Link from 'next/link';
import { Github, Twitter, Send } from 'lucide-react';

export function LandingFooter() {
    const footerLinks = {
        product: [
            { name: 'Swap', href: '/swap' },
            { name: 'Vault', href: '/vault' },
            { name: 'Admin', href: '/admin' },
        ],
        resources: [
            { name: 'Docs', href: '#' },
            { name: 'FAQ', href: '#' },
            { name: 'GitHub', href: 'https://github.com' },
        ],
        legal: [
            { name: 'Terms', href: '#' },
            { name: 'Privacy', href: '#' },
            { name: 'Risk Disclaimer', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Telegram', icon: Send, href: '#' },
        { name: 'GitHub', icon: Github, href: '#' },
    ];

    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                                AuRoom
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                From Rupiah to Yield-Bearing Gold
                            </p>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t mt-8 pt-8 space-y-4">
                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright & Disclaimer */}
                    <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Built for Mantle Global Hackathon 2025
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © 2024 AuRoom Protocol. All rights reserved.
                        </p>
                        <p className="text-sm text-yellow-600 font-medium">
                            ⚠️ This is a testnet demo. Do not use real funds.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
