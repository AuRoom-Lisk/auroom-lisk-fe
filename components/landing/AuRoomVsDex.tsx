'use client';

import Link from 'next/link';
import { SectionWrapper } from './shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from '@/components/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

export function AuRoomVsDex() {
    const comparisonData = [
        {
            aspect: 'Function',
            regularDex: 'Swap only',
            auroom: 'Swap + Stake + Earn',
        },
        {
            aspect: 'After Swap',
            regularDex: 'Asset sits idle',
            auroom: 'Asset actively managed',
        },
        {
            aspect: 'Yield',
            regularDex: '0%',
            auroom: '~5-15% APY',
        },
        {
            aspect: 'Management',
            regularDex: 'Manual',
            auroom: 'Automated vault',
        },
        {
            aspect: 'Result',
            regularDex: 'Just tokens',
            auroom: 'Complete investment system',
        },
    ];

    const chartData = [
        { month: 0, regularDex: 100, auroom: 100 },
        { month: 1, regularDex: 100.67, auroom: 101.5 },
        { month: 2, regularDex: 101.34, auroom: 103.0 },
        { month: 3, regularDex: 102.01, auroom: 104.5 },
        { month: 4, regularDex: 102.68, auroom: 106.0 },
        { month: 5, regularDex: 103.35, auroom: 107.5 },
        { month: 6, regularDex: 104.02, auroom: 109.0 },
        { month: 7, regularDex: 104.69, auroom: 110.5 },
        { month: 8, regularDex: 105.36, auroom: 112.0 },
        { month: 9, regularDex: 106.03, auroom: 113.5 },
        { month: 10, regularDex: 106.70, auroom: 115.0 },
        { month: 11, regularDex: 107.37, auroom: 116.5 },
        { month: 12, regularDex: 108.0, auroom: 118.0 },
    ];

    const chartConfig = {
        regularDex: {
            label: "Regular DEX",
            color: "hsl(0, 84%, 60%)",
        },
        auroom: {
            label: "AuRoom",
            color: "hsl(142, 71%, 45%)",
        },
    } satisfies ChartConfig;

    return (
        <SectionWrapper background="muted" id="auroom-vs-dex">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">AuRoom vs Regular DEX</h2>
                    <p className="text-xl text-muted-foreground">
                        Not just a swap. A complete gold investment system.
                    </p>
                </div>

                {/* Split Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Regular DEX Side */}
                    <Card className="border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/10">
                        <CardContent className="p-8 space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2 text-red-700 dark:text-red-400">
                                    Regular DEX
                                </h3>
                                <p className="text-sm text-muted-foreground">The traditional way</p>
                            </div>

                            {/* Flow Diagram */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="px-4 py-2 bg-background border rounded-lg text-sm font-medium">
                                        IDRX
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                    <div className="px-4 py-2 bg-background border rounded-lg text-sm font-medium">
                                        Swap
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                    <div className="px-4 py-2 bg-background border rounded-lg text-sm font-medium">
                                        XAUT
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="px-6 py-4 bg-red-100 dark:bg-red-950/30 border border-red-300 dark:border-red-800 rounded-lg text-center">
                                        <div className="text-4xl mb-2">💤</div>
                                        <div className="font-bold text-red-700 dark:text-red-400">Sits Idle</div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-background border border-red-200 dark:border-red-900 rounded-lg p-4">
                                <p className="text-sm text-center italic text-muted-foreground">
                                    "Your XAUT just sits in your wallet.<br />
                                    No yield. No growth. Just... waiting."
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AuRoom Side */}
                    <Card className="border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10">
                        <CardContent className="p-8 space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-400">
                                    AuRoom
                                </h3>
                                <p className="text-sm text-muted-foreground">The productive way</p>
                            </div>

                            {/* Flow Diagram */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-center gap-2 flex-wrap">
                                    <div className="px-3 py-2 bg-background border rounded-lg text-xs font-medium">
                                        IDRX
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    <div className="px-3 py-2 bg-background border rounded-lg text-xs font-medium">
                                        Swap
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    <div className="px-3 py-2 bg-background border rounded-lg text-xs font-medium">
                                        XAUT
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    <div className="px-3 py-2 bg-background border rounded-lg text-xs font-medium">
                                        Deposit
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    <div className="px-3 py-2 bg-background border rounded-lg text-xs font-medium">
                                        gXAUT
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                                </div>
                                <div className="flex justify-center">
                                    <div className="px-6 py-4 bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-800 rounded-lg text-center">
                                        <div className="text-4xl mb-2">📈</div>
                                        <div className="font-bold text-green-700 dark:text-green-400">Earning Yield</div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-background border border-green-200 dark:border-green-900 rounded-lg p-4">
                                <p className="text-sm text-center italic text-muted-foreground">
                                    "Your XAUT becomes PRODUCTIVE.<br />
                                    Managed by vault. Earning yield. Working for you."
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Comparison Table */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-6">The AuRoom Difference</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2">
                                    <th className="p-4 text-left font-bold">Aspect</th>
                                    <th className="p-4 text-center font-bold text-red-600 dark:text-red-400">
                                        Regular DEX
                                    </th>
                                    <th className="p-4 text-center font-bold text-green-600 dark:text-green-400">
                                        AuRoom
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-4 font-medium">{row.aspect}</td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                                                <span className="text-sm">{row.regularDex}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                <span className="text-sm">{row.auroom}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ROI Visualization - Shadcn Line Chart */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-6">ROI Comparison: 1 Year Growth</h3>
                    <p className="text-center text-muted-foreground mb-8">
                        Starting with Rp 100,000,000 investment in gold
                    </p>

                    {/* Chart Container */}
                    <Card className="p-6">
                        <CardContent className="p-0">
                            <ChartContainer config={chartConfig} className="h-[400px] w-full">
                                <LineChart
                                    accessibilityLayer
                                    data={chartData}
                                    margin={{
                                        left: 12,
                                        right: 12,
                                        top: 12,
                                        bottom: 12,
                                    }}
                                >
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => `${value}M`}
                                    />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                    <Line
                                        dataKey="regularDex"
                                        type="monotone"
                                        stroke="var(--color-regularDex)"
                                        strokeWidth={2}
                                        dot={{
                                            fill: "var(--color-regularDex)",
                                        }}
                                        activeDot={{
                                            r: 6,
                                        }}
                                    />
                                    <Line
                                        dataKey="auroom"
                                        type="monotone"
                                        stroke="var(--color-auroom)"
                                        strokeWidth={2}
                                        dot={{
                                            fill: "var(--color-auroom)",
                                        }}
                                        activeDot={{
                                            r: 6,
                                        }}
                                    />
                                </LineChart>
                            </ChartContainer>

                            {/* Chart Details */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Regular DEX Summary */}
                                <Card className="border-red-200 dark:border-red-900/50">
                                    <CardContent className="p-4">
                                        <div className="text-center space-y-2">
                                            <div className="text-sm text-muted-foreground">Regular DEX</div>
                                            <div className="text-2xl font-bold font-mono">Rp 108M</div>
                                            <div className="text-sm">
                                                <span className="text-yellow-600 font-medium">Gold: +8%</span>
                                                <br />
                                                <span className="text-red-600 font-medium">Yield: 0%</span>
                                            </div>
                                            <div className="text-lg font-bold text-red-600">ROI: +8%</div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Difference */}
                                <Card className="border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10">
                                    <CardContent className="p-4">
                                        <div className="text-center space-y-2">
                                            <div className="text-sm text-muted-foreground">Difference</div>
                                            <div className="text-2xl font-bold font-mono text-green-600">+Rp 10M</div>
                                            <div className="text-sm text-muted-foreground">
                                                Extra earnings from<br />vault yield
                                            </div>
                                            <div className="text-lg font-bold text-green-600">125% More</div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* AuRoom Summary */}
                                <Card className="border-green-200 dark:border-green-900/50 ring-2 ring-green-500/20">
                                    <CardContent className="p-4">
                                        <div className="text-center space-y-2">
                                            <div className="text-sm text-muted-foreground">AuRoom</div>
                                            <div className="text-2xl font-bold font-mono text-green-600">Rp 118M</div>
                                            <div className="text-sm">
                                                <span className="text-yellow-600 font-medium">Gold: +8%</span>
                                                <br />
                                                <span className="text-green-600 font-medium">Yield: +10%</span>
                                            </div>
                                            <div className="text-lg font-bold text-green-600">ROI: +18%</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Key Insight */}
                            <div className="mt-6 text-center">
                                <Card className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                                    <CardContent className="p-4">
                                        <p className="text-sm">
                                            <span className="font-bold text-green-700 dark:text-green-400">The gap widens every month!</span>
                                            <br />
                                            <span className="text-muted-foreground">AuRoom's dual revenue (gold + yield) compounds faster than Regular DEX</span>
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Analogy Box */}
                <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-2 border-yellow-200 dark:border-yellow-800">
                    <CardContent className="p-8">
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="text-3xl mb-2">💡</div>
                                <h4 className="text-xl font-bold mb-4">Think of it this way:</h4>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="font-bold text-red-700 dark:text-red-400">Regular DEX =</div>
                                    <p className="text-sm">
                                        Buying gold and putting it <span className="font-bold">under your mattress</span>.
                                        <br />
                                        <span className="text-muted-foreground italic">Safe, but earning nothing.</span>
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="font-bold text-green-700 dark:text-green-400">AuRoom =</div>
                                    <p className="text-sm">
                                        Buying gold and putting it in a <span className="font-bold">professional investment fund</span> that generates returns for you.
                                        <br />
                                        <span className="text-muted-foreground italic">Safe AND productive.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CTA */}
                <div className="text-center pt-8">
                    <Button asChild size="lg" className="text-lg px-8">
                        <Link href="/swap">
                            🚀 Make Your Gold Work For You <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
