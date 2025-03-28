'use client';

import { 
  Award, 
  CheckCircle2,
  Code,
  DatabaseIcon,
  WrenchIcon,
  ServerIcon
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'Django', level: 70, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', level: 80, category: 'database' },
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'Redis', level: 70, category: 'database' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Figma', level: 65, category: 'tools' },
];

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de Datos',
  tools: 'Herramientas',
};

const categoryIcons = {
  frontend: Code,
  backend: ServerIcon,
  database: DatabaseIcon,
  tools: WrenchIcon,
};

const Skills = () => {
  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>;

  return (
    <section id="habilidades" className="bg-white dark:bg-gray-900">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <h2 className="section-title">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-primary-500" />
                  <h3 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary">
                    {categoryLabels[category]}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-text-light-secondary dark:text-text-dark-secondary">
                            {skill.name}
                          </span>
                          <span className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificaciones */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-primary-500" />
            <h3 className="text-xl font-semibold text-text-light-primary dark:text-text-dark-primary">
              Certificaciones
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <CheckCircle2 className="w-full h-full text-primary-500" />
              </div>
              <h4 className="text-lg font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                AWS Certified Developer
              </h4>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Amazon Web Services
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <CheckCircle2 className="w-full h-full text-primary-500" />
              </div>
              <h4 className="text-lg font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                Professional Scrum Master
              </h4>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Scrum.org
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <CheckCircle2 className="w-full h-full text-primary-500" />
              </div>
              <h4 className="text-lg font-medium text-text-light-primary dark:text-text-dark-primary mb-2">
                Google Cloud Professional
              </h4>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Google Cloud
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 