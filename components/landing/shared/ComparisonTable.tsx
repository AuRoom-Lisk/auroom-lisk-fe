import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    aspect: string;
    traditional: string;
    auroom: string;
    traditionalNegative?: boolean;
    auroomPositive?: boolean;
}

interface ComparisonTableProps {
    rows: ComparisonRow[];
}

export function ComparisonTable({ rows }: ComparisonTableProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Gold */}
            <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                    <CardTitle className="text-center">Traditional Gold Investment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {rows.map((row, index) => (
                        <div key={index} className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">{row.aspect}</div>
                            <div className="flex items-start gap-2">
                                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{row.traditional}</span>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* AuRoom RWA */}
            <Card className="border-green-200 dark:border-green-900">
                <CardHeader>
                    <CardTitle className="text-center">With AuRoom (RWA)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {rows.map((row, index) => (
                        <div key={index} className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">{row.aspect}</div>
                            <div className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{row.auroom}</span>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
