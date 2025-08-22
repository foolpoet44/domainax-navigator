import { DomainAx } from "./types";
import domainAxData from "@/data/domain-ax.json";

export function loadDomainAxData(): DomainAx {
  return domainAxData as DomainAx;
}

export function getCourseStatistics() {
  const data = loadDomainAxData();
  
  const stats = {
    totalCourses: data.courses.length,
    offlineCourses: data.courses.filter(c => c.delivery.includes("오프라인")).length,
    onlineCourses: data.courses.filter(c => c.delivery.includes("온라인")).length,
    level1Courses: data.courses.filter(c => c.eligible.L1).length,
    level2Courses: data.courses.filter(c => c.eligible.L2).length,
    level3Courses: data.courses.filter(c => c.eligible.L3).length,
    averageHours: Math.round(data.courses.reduce((sum, c) => sum + c.hours, 0) / data.courses.length * 10) / 10,
  };
  
  return stats;
}

export function getUniqueDeliveryMethods() {
  const data = loadDomainAxData();
  return [...new Set(data.courses.map(c => c.delivery))];
}