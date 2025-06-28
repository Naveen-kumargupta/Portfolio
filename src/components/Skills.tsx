
import { Code, Database, Brain, Palette, Server, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Java", level:70},
        { name: "HTML/CSS", level: 80},
        { name: "JavaScript", level:65 },
        { name: "C", level: 70}, 
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 70 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 65 },
        { name: "Firebase", level: 70 },
      ]
    },
    
    
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive technical expertise across multiple domains of software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 group transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
