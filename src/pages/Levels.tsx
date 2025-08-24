import { Navigation } from "@/components/ui/navigation";
import { LevelCard } from "@/components/LevelCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import domainAxData from "@/data/domain-ax.json";

const Levels = () => {
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
            Domain AX 레벨 시스템
          </Badge>
          <h1 className="text-4xl font-bold mb-4">레벨별 인증 안내</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Domain AX 인증은 3단계 레벨로 구성되어 있으며, 각 레벨별로 요구되는 역량과 스킬이 다릅니다.
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {domainAxData.levels.map((level) => (
            <LevelCard key={level.id} level={level} />
          ))}
        </div>

        {/* Additional Information */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-blue-900">레벨 진행 가이드</CardTitle>
                <CardDescription className="text-blue-700">효과적인 레벨 업을 위한 권장사항</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-900">
              <div className="space-y-2">
                <h4 className="font-semibold">AX Starter (Level 1)</h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• 기초 데이터 분석 이해</li>
                  <li>• 생성형 AI 기본 개념 학습</li>
                  <li>• 생성형 AI 활용법 습득</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">AX Enabler (Level 2)</h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• 데이터 시각화 도구 활용</li>
                  <li>• 머신러닝 기초 이론 습득</li>
                  <li>• AX 과제 설계 및 실행</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">AX CDS (Level 3)</h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• 비정형 데이터 분석</li>
                  <li>• 최신 AI 기술 적용 역량</li>
                  <li>• 조직 내 AI 도입 및 변화 리딩</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Levels;
