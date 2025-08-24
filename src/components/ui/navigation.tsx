import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Layers, GitBranch, BookOpen, FileDown } from "lucide-react";
interface NavigationProps {
  onPrintPage?: () => void;
}
export function Navigation({
  onPrintPage
}: NavigationProps) {
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "홈",
    icon: Home
  }, {
    path: "/levels",
    label: "레벨 안내",
    icon: Layers
  }, {
    path: "/transition-plan",
    label: "전환 계획",
    icon: GitBranch
  }, {
    path: "/courses",
    label: "과정 목록",
    icon: BookOpen
  }];
  return <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-hero">
              <span className="text-xs font-bold text-primary-foreground">AX</span>
            </div>
            <span className="hidden font-bold sm:inline-block">PRI Domain AX</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="flex items-center space-x-2">
              {navItems.map(item => {
              const Icon = item.icon;
              return <Button key={item.path} variant={location.pathname === item.path ? "default" : "ghost"} size="sm" asChild className={cn("transition-colors", location.pathname === item.path && "bg-gradient-hero text-primary-foreground")}>
                    <Link to={item.path}>
                      <Icon className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </Link>
                  </Button>;
            })}
            </div>
          </div>
          
          {onPrintPage && (
            <Button onClick={onPrintPage} variant="outline" size="sm">
              <FileDown className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">인쇄</span>
            </Button>
          )}
        </div>
      </div>
    </nav>;
}