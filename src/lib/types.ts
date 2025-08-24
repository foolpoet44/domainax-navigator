export interface Level {
  id: string;
  name: string;
  level: number;
  summary: string;
  requiredSkills: string[];
}

export interface Course {
  delivery: string;
  title: string;
  hours: number;
  eligible: {
    L1: boolean;  
    L2: boolean;
    L3: boolean;
  };
  link: string | null;
  needsVerification?: boolean;
}

export interface TransitionPhase {
  phase: number;
  effectiveMonth: string;
}

export interface Milestone {
  date: string;
  label: string;
}

export interface UpskillCondition {
  level: string;
  offlineCoursesMin?: number;
  onlineCoursesMin?: number;
  onlineHoursMin?: number;
  genAIAssignment: boolean;
}

export interface TransitionPlan {
  periodEnd: string;
  renumberingRule: string;
  phases: TransitionPhase[];
  milestones: Milestone[];
  upskillConditions: UpskillCondition[];
  learningHistoryGuide: {
    path: string;
    note: string;
  };
}

export interface Contact {
  owner: string;
  unit: string;
}

export interface DomainAx {
  hero: {
    title: string;
    subtitle: string;
  };
  definitions: {
    program: string[];
    competency: string[];
    upskillGuide: string[];
  };
  levels: Level[];
  transitionPlan: TransitionPlan;
  courses: Course[];
  contact: Contact;
}

export interface CourseFilters {
  search: string;
  delivery: string;
  level: string;
  minHours: number;
  maxHours: number;
}

export type SortField = 'title' | 'delivery' | 'hours';
export type SortDirection = 'asc' | 'desc';