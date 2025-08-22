import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-4xl font-bold mb-2">404</CardTitle>
            <CardDescription className="text-xl mb-4">페이지를 찾을 수 없습니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              요청하신 페이지 "{location.pathname}"를 찾을 수 없습니다.
              <br />
              URL을 확인하시거나 홈페이지로 돌아가세요.
            </p>
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                홈으로 돌아가기
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
