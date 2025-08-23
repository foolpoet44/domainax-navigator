import { Navigation } from "@/components/ui/navigation";
import { Timeline } from "@/components/Timeline";
import { UpskillTable } from "@/components/UpskillTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, BookOpen, ExternalLink } from "lucide-react";
import domainAxData from "@/data/domain-ax.json";

const TransitionPlan = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onPrintPage={handlePrint} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground border-none">
            <CalendarDays className="mr-2 h-4 w-4" />
            Domain DX → AX 전환 계획
          </Badge>
          <h1 className="text-4xl font-bold mb-4">기존 Domain DX 인증 레벨 전환 계획</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {domainAxData.transitionPlan.renumberingRule}
          </p>
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
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">전환 단계별 일정</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domainAxData.transitionPlan.phases.map((phase, index) => (
              <Card key={index} className="print-break-inside-avoid">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Badge className="mr-3 bg-gradient-hero text-primary-foreground border-none">
                      {phase.phase}단계
                    </Badge>
                  </CardTitle>
                  <CardDescription>{phase.effectiveMonth}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    전환 시기: {phase.effectiveMonth}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upskill Conditions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-primary" />
            레벨별 Upskill 조건
          </h2>
          <UpskillTable conditions={domainAxData.transitionPlan.upskillConditions} />
        </div>

        {/* Learning History Guide */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-green-900">나의 수강 이력 확인 방법</CardTitle>
                <CardDescription className="text-green-700">
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
              <Button 
                variant="outline" 
                className="border-green-500 text-green-700 hover:bg-green-100"
                onClick={() => window.open("https://lge.com", "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                학습 이력 확인하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransitionPlan;