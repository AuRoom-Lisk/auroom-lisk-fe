import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface AssetCardProps {
    name: string;
    symbol: string;
    tagline: string;
    pegging: string;
    facts: string[];
    learnMoreUrl?: string;
}

export function AssetCard({
    name,
    symbol,
    tagline,
    pegging,
    facts,
    learnMoreUrl
}: AssetCardProps) {
    return (
        <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader className="text-center space-y-4">
                <div className="text-5xl font-bold text-yellow-600">{symbol}</div>
                <div>
                    <CardTitle className="text-xl mb-2">{name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tagline}</p>
                </div>
                <div className="border-t pt-4">
                    <div className="text-lg font-mono font-bold">{pegging}</div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <ul className="space-y-2">
                    {facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="text-yellow-600 mt-0.5">•</span>
                            <span className="text-muted-foreground">{fact}</span>
                        </li>
                    ))}
                </ul>
                {learnMoreUrl && (
                    <Link
                        href={learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                        Learn more <ExternalLink className="h-3 w-3" />
                    </Link>
                )}
            </CardContent>
        </Card>
    );
}
