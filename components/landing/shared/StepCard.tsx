import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StepCardProps {
    step: number;
    icon: LucideIcon;
    title: string;
    description: string;
    time?: string;
    iconColor?: string;
    iconBgColor?: string;
}

export function StepCard({
    step,
    icon: Icon,
    title,
    description,
    time,
    iconColor = 'text-yellow-600',
    iconBgColor = 'bg-yellow-100 dark:bg-yellow-900'
}: StepCardProps) {
    return (
        <Card className="h-full transition-all hover:shadow-lg">
            <CardHeader>
                <div className={cn(
                    'h-12 w-12 rounded-lg flex items-center justify-center mb-4',
                    iconBgColor
                )}>
                    <Icon className={cn('h-6 w-6', iconColor)} />
                </div>
                <CardTitle className="flex items-center gap-2">
                    <span className="text-yellow-600">{step}.</span> {title}
                </CardTitle>
                {time && (
                    <CardDescription className="text-xs">⏱️ {time}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
