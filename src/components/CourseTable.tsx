import { useState, useMemo } from "react";
import { Course, CourseFilters, SortField, SortDirection } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle, ArrowUpDown, ArrowUp, ArrowDown, Search, Filter, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseTableProps {
  courses: Course[];
  className?: string;
}

export function CourseTable({ courses, className }: CourseTableProps) {
  const [filters, setFilters] = useState<CourseFilters>({
    search: "",
    delivery: "all",
    level: "all",
    minHours: 0,
    maxHours: 50
  });
  
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(filters.search.toLowerCase());
      const matchesDelivery = filters.delivery === "all" || course.delivery === filters.delivery;
      const matchesHours = course.hours >= filters.minHours && course.hours <= filters.maxHours;
      
      let matchesLevel = filters.level === "all";
      if (filters.level === "L1") matchesLevel = course.eligible.L1;
      if (filters.level === "L2") matchesLevel = course.eligible.L2;
      if (filters.level === "L3") matchesLevel = course.eligible.L3;
      
      return matchesSearch && matchesDelivery && matchesHours && matchesLevel;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortField) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "delivery":
          comparison = a.delivery.localeCompare(b.delivery);
          break;
        case "hours":
          comparison = a.hours - b.hours;
          break;
      }
      
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [courses, filters, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortDirection === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  const EligibilityIndicator = ({ eligible }: { eligible: boolean }) => (
    eligible ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-red-600" />
    )
  );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>과정 목록</span>
          <Badge variant="secondary">{filteredAndSortedCourses.length}개 과정</Badge>
        </CardTitle>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="과정명 검색..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="pl-10"
            />
          </div>
          
          <Select
            value={filters.delivery}
            onValueChange={(value) => setFilters(prev => ({ ...prev, delivery: value }))}
          >
            <SelectTrigger>
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="구분" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 구분</SelectItem>
              <SelectItem value="오프라인">오프라인</SelectItem>
              <SelectItem value="온라인">온라인</SelectItem>
              <SelectItem value="온라인 (Udemy)">온라인 (Udemy)</SelectItem>
            </SelectContent>
          </Select>
          
          <Select
            value={filters.level}
            onValueChange={(value) => setFilters(prev => ({ ...prev, level: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="레벨" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 레벨</SelectItem>
              <SelectItem value="L1">Level 1</SelectItem>
              <SelectItem value="L2">Level 2</SelectItem>
              <SelectItem value="L3">Level 3</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="최소 시간"
              value={filters.minHours}
              onChange={(e) => setFilters(prev => ({ ...prev, minHours: Number(e.target.value) || 0 }))}
              className="w-20"
              min="0"
            />
            <span className="text-muted-foreground">~</span>
            <Input
              type="number"
              placeholder="최대 시간"
              value={filters.maxHours}
              onChange={(e) => setFilters(prev => ({ ...prev, maxHours: Number(e.target.value) || 50 }))}
              className="w-20"
              min="0"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("delivery")}
                    className="h-auto p-0 font-semibold"
                  >
                    <span className="mr-2">구분</span>
                    {getSortIcon("delivery")}
                  </Button>
                </th>
                <th className="text-left p-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("title")}
                    className="h-auto p-0 font-semibold"
                  >
                    <span className="mr-2">과정명</span>
                    {getSortIcon("title")}
                  </Button>
                </th>
                <th className="text-left p-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort("hours")}
                    className="h-auto p-0 font-semibold"
                  >
                    <span className="mr-2">인정시간</span>
                    {getSortIcon("hours")}
                  </Button>
                </th>
                <th className="text-center p-3 font-semibold">L1</th>
                <th className="text-center p-3 font-semibold">L2</th>
                <th className="text-center p-3 font-semibold">L3</th>
                <th className="text-center p-3 font-semibold">링크</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedCourses.map((course, index) => (
                <tr key={index} className="border-b hover:bg-muted/50 transition-colors print-break-inside-avoid">
                  <td className="p-3">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-xs",
                        course.delivery.includes("오프라인") && "border-green-500 text-green-700",
                        course.delivery.includes("온라인") && "border-blue-500 text-blue-700"
                      )}
                    >
                      {course.delivery}
                    </Badge>
                  </td>
                  <td className="p-3">
                    <div className="font-medium leading-relaxed">{course.title}</div>
                  </td>
                  <td className="p-3">
                    <Badge variant="outline" className="font-mono">
                      {course.hours}시간
                    </Badge>
                  </td>
                  <td className="p-3 text-center">
                    <EligibilityIndicator eligible={course.eligible.L1} />
                  </td>
                  <td className="p-3 text-center">
                    <EligibilityIndicator eligible={course.eligible.L2} />
                  </td>
                  <td className="p-3 text-center">
                    <EligibilityIndicator eligible={course.eligible.L3} />
                  </td>
                  <td className="p-3 text-center">
                    {course.link ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          링크
                        </a>
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        링크 준비 중
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAndSortedCourses.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            검색 조건에 맞는 과정이 없습니다.
          </div>
        )}
      </CardContent>
    </Card>
  );
}