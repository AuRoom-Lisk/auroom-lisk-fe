import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
    name: string;
    description?: string;
    icon?: string;
    size?: 'sm' | 'lg';
    className?: string;
}

export function TechBadge({
    name,
    description,
    icon,
    size = 'lg',
    className
}: TechBadgeProps) {
    if (size === 'sm') {
        return (
            <div className={cn(
                'px-4 py-2 rounded-full bg-muted border text-sm font-medium transition-all hover:bg-muted/80 hover:scale-105',
                className
            )}>
                {name}
            </div>
        );
    }

    return (
        <Card className={cn('transition-all hover:shadow-lg hover:scale-105', className)}>
            <CardContent className="p-6 text-center space-y-3">
                {icon && (
                    <div className="text-4xl">{icon}</div>
                )}
                <div className="font-bold text-lg">{name}</div>
                {description && (
                    <p className="text-sm text-muted-foreground">{description}</p>
                )}
            </CardContent>
        </Card>
    );
}
