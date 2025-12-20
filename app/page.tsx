'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, TrendingUp, Lock, Coins } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50 dark:from-yellow-950/20 dark:via-background dark:to-yellow-950/20">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              From Rupiah to{' '}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Yield-Bearing Gold
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Swap IDRX to tokenized gold (XAUT) and earn yield from LP provision on Mantle Network
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/swap">
                  Start Swapping <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/vault">
                  Explore Vault
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">$XXX,XXX</div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">~$2,XXX</div>
              <div className="text-sm text-muted-foreground">XAUT Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">~5.2%</div>
              <div className="text-sm text-muted-foreground">Vault APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">XXX+</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Four simple steps to start earning yield on your gold
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle>1. Connect & Verify</CardTitle>
              <CardDescription>
                Connect your wallet and complete KYC verification
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>2. Swap IDRX</CardTitle>
              <CardDescription>
                Exchange your Indonesian Rupiah for tokenized gold (XAUT)
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>3. Stake in Vault</CardTitle>
              <CardDescription>
                Deposit XAUT into the Gold Vault to receive gXAUT
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>4. Earn Yield</CardTitle>
              <CardDescription>
                Earn yield from LP provision, withdraw anytime
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why AuRoom?</h2>
            <p className="text-muted-foreground">
              The compliant, productive way to invest in digital gold
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Compliant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  KYC/identity verification ensures regulatory compliance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Productive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn yield from LP provision, not idle gold
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-purple-600" />
                  Secure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Audited smart contracts on Mantle Network
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  Transparent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  On-chain, auditable, real-time pricing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Join the future of RWA investing on Mantle Network
          </p>
          <Button asChild size="lg">
            <Link href="/swap">
              Start Swapping Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
