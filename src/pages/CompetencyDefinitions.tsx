import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cpu, Zap } from "lucide-react";

const CompetencyDefinitions = () => {
  const handlePrint = () => {
    window.print();
  };

  const competencyData = [
    {
      id: "generative-ai",
      title: "생성형 AI 기술과 상호작용",
      icon: Brain,
      color: "bg-gradient-level-1",
      skills: [
        "생성형 AI 개념",
        "AI 도구 활용", 
        "프롬프트 엔지니어링 개념과 최적화"
      ]
    },
    {
      id: "ai-data-fundamentals", 
      title: "AI 기초 원리 및 데이터 역량",
      icon: Database,
      color: "bg-gradient-level-2",
      skills: [
        "데이터 수집",
        "데이터 정제 및 전처리",
        "딥러닝 개념 이해",
        "메타 Data의 이해와 활용"
      ]
    },
    {
      id: "ai-models",
      title: "주요 AI 모델 아키텍처", 
      icon: Cpu,
      color: "bg-gradient-level-3",
      skills: [
        "CNN의 이해와 활용 사례",
        "RNN, LSTM의 이해와 활용 사례", 
        "LSTM의 이해와 활용 사례"
      ]
    },
    {
      id: "ai-automation",
      title: "AI 응용 심화 및 자동화",
      icon: Zap,
      color: "bg-gradient-hero",
      skills: [
        "RAG(검색 중심 생성)의 이해와 활용",
        "AI Agent의 이해와 활용 사례",
        "Responsible AI의 이해"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onPrintPage={handlePrint} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground border-none">
            Domain AX 역량 정의
          </Badge>
          <h1 className="text-4xl font-bold mb-4">역량 정의</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Domain AX 인증에 필요한 핵심 역량과 세부 스킬을 확인하세요.
          </p>
        </div>

        {/* Competency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {competencyData.map((competency, index) => {
            const IconComponent = competency.icon;
            return (
              <Card key={competency.id} className="group hover:shadow-card transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${competency.color} shadow-soft`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {competency.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        스킬군 {index + 1} - 핵심 역량
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/90 mb-4">주요 스킬 리스트</h4>
                    <div className="grid gap-3">
                      {competency.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                          <span className="text-sm font-medium text-foreground/80">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900 text-center">역량별 학습 가이드</CardTitle>
            <CardDescription className="text-blue-700 text-center">
              각 스킬군별로 체계적인 학습을 통해 Domain AX 인증을 준비하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-900">
              {competencyData.map((competency, index) => (
                <div key={competency.id} className="text-center space-y-2">
                  <div className={`w-12 h-12 mx-auto rounded-full ${competency.color} flex items-center justify-center shadow-soft mb-3`}>
                    <competency.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm">{competency.title}</h4>
                  <p className="text-xs text-blue-600">
                    {competency.skills.length}개 핵심 스킬
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetencyDefinitions;