import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor?: string;
    iconBgColor?: string;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
    iconColor = 'text-yellow-600',
    iconBgColor = 'bg-yellow-100 dark:bg-yellow-900'
}: FeatureCardProps) {
    return (
        <Card className="h-full transition-all hover:shadow-lg hover:scale-105">
            <CardHeader>
                <div className={cn(
                    'h-12 w-12 rounded-lg flex items-center justify-center mb-4',
                    iconBgColor
                )}>
                    <Icon className={cn('h-6 w-6', iconColor)} />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
