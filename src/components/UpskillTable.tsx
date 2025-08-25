import { UpskillCondition } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";
interface UpskillTableProps {
  conditions: UpskillCondition[];
  className?: string;
}
export function UpskillTable({
  conditions,
  className
}: UpskillTableProps) {
  return <Card className={className}>
      <CardHeader>
        <CardTitle>아래 중 1개 이상 충족시 AX 인증으로 전환됩니다.</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-semibold">레벨</th>
                <th className="text-left p-4 font-semibold">오프라인 과정</th>
                <th className="text-left p-4 font-semibold">온라인 과정</th>
                <th className="text-left p-4 font-semibold">온라인 시간</th>
                <th className="text-left p-4 font-semibold">생성형 AI 과제</th>
              </tr>
            </thead>
            <tbody>
              {conditions.map((condition, index) => <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4">
                    <Badge variant="outline" className="font-medium">
                      {condition.level}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {condition.offlineCoursesMin ? <span className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{condition.offlineCoursesMin}개 이상</span>
                      </span> : <span className="text-muted-foreground">-</span>}
                  </td>
                  <td className="p-4">
                    {condition.onlineCoursesMin ? <span className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{condition.onlineCoursesMin}개 이상</span>
                      </span> : <span className="text-muted-foreground">-</span>}
                  </td>
                  <td className="p-4">
                    {condition.onlineHoursMin ? <span className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{condition.onlineHoursMin}시간 이상</span>
                      </span> : <span className="text-muted-foreground">-</span>}
                  </td>
                  <td className="p-4">
                    {condition.genAIAssignment ? <span className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Axplorer 완료</span>
                      </span> : <span className="flex items-center space-x-2">
                        <XCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">해당 없음</span>
                      </span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>;
}