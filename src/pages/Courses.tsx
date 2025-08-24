import { Navigation } from "@/components/ui/navigation";
import { CourseTable } from "@/components/CourseTable";
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            각 레벨별 인정 과정과 수강 시간을 확인하고, 필요한 과정을 검색하여 수강하세요.
          </p>
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