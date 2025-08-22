import { Milestone } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";

interface TimelineProps {
  milestones: Milestone[];
  className?: string;
}

export function Timeline({ milestones, className }: TimelineProps) {
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    return `${year}년 ${month}월`;
  };

  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary" />
      
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start space-x-6 print-break-inside-avoid">
            {/* Timeline dot */}
            <div className="relative flex h-16 w-16 flex-none items-center justify-center">
              <div className="absolute h-4 w-4 rounded-full bg-gradient-hero shadow-soft" />
              <div className="absolute h-8 w-8 rounded-full bg-primary/20" />
              <CalendarDays className="relative h-5 w-5 text-primary" />
            </div>
            
            {/* Content */}
            <Card className="flex-1 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-sm font-medium">
                    {formatDate(milestone.date)}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold leading-relaxed">
                  {milestone.label}
                </h3>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}