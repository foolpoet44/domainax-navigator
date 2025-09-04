import { Navigation } from "@/components/ui/navigation";
import { CourseTable } from "@/components/CourseTable";
import { UpskillTable } from "@/components/UpskillTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, AlertCircle } from "lucide-react";
import domainAxData from "@/data/domain-ax.json";
const Courses = () => {
  const handlePrint = () => {
    window.print();
  };
  return <div className="min-h-screen bg-background">
      <Navigation onPrintPage={handlePrint} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-hero text-primary-foreground border-none">
            <BookOpen className="mr-2 h-4 w-4" />
            Domain AX 인증 과정
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Domain AX 인증 과정 목록</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">기존 DX 인증자(Starter, Enabler, CDS)는 아래의 Upskill Course 수강을 통해 
 `26년 말까지 Domain AX로 인증전환 하시기 바랍니다.</p>
        </div>

        {/* Upskill Conditions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-primary" />
            레벨별 Upskill 조건
          </h2>
          <UpskillTable conditions={domainAxData.transitionPlan.upskillConditions} />
        </div>

        {/* Course Table */}
        <div className="mb-8">
          <CourseTable courses={domainAxData.courses} />
        </div>

        {/* Information Notice */}
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          
          <CardContent>
            <div className="text-amber-900 space-y-3">
              <p className="py-[10px]">
                <strong>담당자:</strong> {domainAxData.contact.owner} ({domainAxData.contact.unit})
              </p>
              
              <div className="flex space-x-2 pt-2">
                
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  정기 업데이트
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Courses;