interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}
  
interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  status: "Actual" | "Completado";
}
  
interface SkillCategory {
  name: string;
  skills: string[];
}
  
interface Language {
  name: string;
  level: string;
  flag: string;
}
  
export interface AboutData {
  title: string;
  subtitle: string;
  education: Education;
  experience: Experience[];
  skills: SkillCategory[];
  languages: Language[];
}