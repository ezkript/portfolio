interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  staticImage?: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend";
  status: "Activo" | "Completado" | "En Desarrollo";
  period: string;
  highlights: string[];
  github: string;
  demo: string;
}
  
interface Category {
  id: string;
  label: string;
  count: number;
}
  
export interface ProjectsData {
  title: string;
  subtitle: string;
  projects: Project[];
  categories: Category[];
  notificationMessage: string;
  ctaSection: {
    title: string;
    description: string;
    buttons: {
      contact: string;
    };
  };
}