'use client';

import { useAccount } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Shield } from 'lucide-react';
import { useIdentityRegistry } from '@/hooks/contracts/useIdentityRegistry';
import { useState } from 'react';
import { isValidAddress } from '@/lib/utils/validation';
import type { Address } from 'viem';

export default function VerifyPage() {
    const { address, isConnected } = useAccount();
    const [addressToRegister, setAddressToRegister] = useState('');

    const { useIsVerified, registerIdentity, isPending, isConfirming, isSuccess, error } = useIdentityRegistry();
    const { data: isVerified, isLoading } = useIsVerified(address);

    const handleRegister = () => {
        if (isValidAddress(addressToRegister)) {
            registerIdentity(addressToRegister as Address);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Verification Status */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Verification Status
                        </CardTitle>
                        <CardDescription>
                            KYC verification is required to use the protocol
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!isConnected ? (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">
                                    Please connect your wallet to check verification status
                                </p>
                            </div>
                        ) : isLoading ? (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">Checking verification status...</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <div className="font-medium">Your Address</div>
                                        <div className="text-sm text-muted-foreground font-mono">
                                            {address}
                                        </div>
                                    </div>
                                    <Badge
                                        variant={isVerified ? 'default' : 'destructive'}
                                        className="flex items-center gap-1"
                                    >
                                        {isVerified ? (
                                            <>
                                                <CheckCircle2 className="h-3 w-3" />
                                                Verified
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="h-3 w-3" />
                                                Not Verified
                                            </>
                                        )}
                                    </Badge>
                                </div>

                                {!isVerified && (
                                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                            Your address is not verified. Please contact the protocol admin to complete KYC verification.
                                        </p>
                                    </div>
                                )}

                                {isVerified && (
                                    <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                                        <p className="text-sm text-green-800 dark:text-green-200">
                                            Your address is verified! You can now use all protocol features.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Admin Panel - Only show if user might be admin */}
                {isConnected && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin Panel</CardTitle>
                            <CardDescription>
                                Register new addresses (admin only)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Address to Register</label>
                                <Input
                                    type="text"
                                    placeholder="0x..."
                                    value={addressToRegister}
                                    onChange={(e) => setAddressToRegister(e.target.value)}
                                />
                            </div>

                            <Button
                                className="w-full"
                                onClick={handleRegister}
                                disabled={
                                    !addressToRegister ||
                                    !isValidAddress(addressToRegister) ||
                                    isPending ||
                                    isConfirming
                                }
                            >
                                {isPending || isConfirming ? 'Registering...' : 'Register Address'}
                            </Button>

                            {isSuccess && (
                                <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-sm text-green-800 dark:text-green-200">
                                    Address registered successfully!
                                </div>
                            )}

                            {error && (
                                <div className="p-3 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-200">
                                    Error: {error.message}
                                </div>
                            )}

                            <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                                <p className="font-medium mb-1">Note:</p>
                                <p>Only the contract deployer can register new addresses. If you're not the admin, this function will fail.</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
