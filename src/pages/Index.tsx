import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layers, GitBranch, BookOpen, User, Building2 } from "lucide-react";
import domainAxData from "@/data/domain-ax.json";
const Index = () => {
  const handlePrint = () => {
    window.print();
  };
  return <div className="min-h-screen bg-background">
      <Navigation onPrintPage={handlePrint} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-black/5" />
        
        <div className="relative container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              인증 제도 전환 안내
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Domain AX인증제 안내
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto opacity-90">
              {domainAxData.hero.subtitle}
            </p>
            
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Summary */}
            <Card className="transition-all duration-300 hover:shadow-level hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-hero rounded-lg">
                    <Building2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>프로그램 요약</CardTitle>
                </div>
                <CardDescription>Domain AX 인증 제도</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-4">
                  {domainAxData.definitions.program}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/levels">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Competency Definition */}
            <Card className="transition-all duration-300 hover:shadow-level hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-level-2 rounded-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>역량 정의</CardTitle>
                </div>
                <CardDescription>Domain AX 역량이란</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-4">
                  {domainAxData.definitions.competency}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/levels">
                    역량 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upskill Guide */}
            <Card className="transition-all duration-300 hover:shadow-level hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-level-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Upskill 안내</CardTitle>
                </div>
                <CardDescription>전환 및 수강 안내</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed mb-4">
                  기존 Domain DX 인증자 (DX Starter, DX Enabler, DX CDS)는 아래의 Upskill Course 수강을 통해 Domain AX 전환이 가능합니다.
                </p>
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/transition-plan">
                      전환 계획 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/courses">
                      과정 목록 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            
            <CardContent className="text-center">
              <div className="space-y-3">
                
                <div className="text-muted-foreground">{domainAxData.contact.unit}</div>
                <Badge variant="secondary" className="mt-4">
                  담당자: {domainAxData.contact.owner}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Index;