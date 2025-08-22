import { Level } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface LevelCardProps {
  level: Level;
  className?: string;
}

export function LevelCard({ level, className }: LevelCardProps) {
  const getGradientClass = (levelNum: number) => {
    switch (levelNum) {
      case 1: return "bg-gradient-level-1";
      case 2: return "bg-gradient-level-2"; 
      case 3: return "bg-gradient-level-3";
      default: return "bg-gradient-hero";
    }
  };

  const getLevelColor = (levelNum: number) => {
    switch (levelNum) {
      case 1: return "bg-level-1";
      case 2: return "bg-level-2";
      case 3: return "bg-level-3";
      default: return "bg-primary";
    }
  };

  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-level hover:-translate-y-1 print-break-inside-avoid",
      className
    )}>
      <div className={cn("absolute inset-0 opacity-5", getGradientClass(level.level))} />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{level.name}</CardTitle>
          <Badge 
            variant="secondary" 
            className={cn("text-white font-medium", getLevelColor(level.level))}
          >
            Level {level.level}
          </Badge>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {level.summary}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            필수 역량
          </h4>
          <div className="flex flex-wrap gap-2">
            {level.requiredSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-xs py-1 px-3 rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}