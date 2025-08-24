import { Navigation } from "@/components/ui/navigation";
import { Timeline } from "@/components/Timeline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, ExternalLink } from "lucide-react";
import domainAxData from "@/data/domain-ax.json";
const TransitionPlan = () => {
  const handlePrint = () => {
    window.print();
  };
  return <div className="min-h-screen bg-background">
      <Navigation onPrintPage={handlePrint} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground border-none">
            <CalendarDays className="mr-2 h-4 w-4" />
            Domain DX → AX 전환 계획
          </Badge>
          <h1 className="text-4xl font-bold mb-4">기존 Domain DX 인증 레벨 전환 계획</h1>
          
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <CalendarDays className="mr-3 h-6 w-6 text-primary" />
            전환 일정 타임라인
          </h2>
          <Timeline milestones={domainAxData.transitionPlan.milestones} />
        </div>

        {/* Phase Information */}
        


        {/* Learning History Guide */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-green-900">나의 수강 이력 확인 방법</CardTitle>
                <CardDescription className="text-green-700 mx-0 py-[5px]">
                  {domainAxData.transitionPlan.learningHistoryGuide.path}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-green-900 space-y-4">
              <p className="leading-relaxed">
                <strong>확인 경로:</strong> {domainAxData.transitionPlan.learningHistoryGuide.path}
              </p>
              <p className="leading-relaxed">
                <strong>확인 사항:</strong> {domainAxData.transitionPlan.learningHistoryGuide.note}
              </p>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default TransitionPlan;