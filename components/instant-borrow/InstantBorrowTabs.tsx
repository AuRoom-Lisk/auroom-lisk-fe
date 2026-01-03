'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Landmark, Wallet, Building } from 'lucide-react';

interface InstantBorrowTabsProps {
    activeTab: string;
    onTabChange: (value: string) => void;
}

export function InstantBorrowTabs({ activeTab, onTabChange }: InstantBorrowTabsProps) {
    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-900 border border-yellow-500/30 p-1">
                <TabsTrigger
                    value="borrow"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-semibold"
                >
                    <Landmark className="w-4 h-4 mr-2" />
                    Borrow
                </TabsTrigger>
                <TabsTrigger
                    value="repay"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-semibold"
                >
                    <Wallet className="w-4 h-4 mr-2" />
                    Repay
                </TabsTrigger>
                <TabsTrigger
                    value="redeem"
                    className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-yellow-600 data-[state=active]:text-black font-semibold"
                >
                    <Building className="w-4 h-4 mr-2" />
                    Redeem
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
