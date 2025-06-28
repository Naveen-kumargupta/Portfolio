
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Development Internship", 
      company: "Oasis Infobyte",
      period: "May 2023 - June 2023",
      description: "Developed responsive and interactive website 'Library Management System'",
      skills: ["HTML", "CSS", "JavaScript", "Web Design"]
    },
    {
      type: "work",
      title: "Web Development Internship",
      company: "NetCamp Solutions Private Limited",
      period: "Jan 2023 - Feb 2023",
      description: "Gained hands-on experience in various web development technologies, enhancing both front-end and back-end skills through practical projects.",
      skills: ["Web Development", "Project Management"]
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      company: "Raj Kumar Goel Institute of Technology ",
      period: "2021 - 2025",
      description: "Computer Science and Engineering with focus on modern technologies, algorithms, and software development practices.",
      skills: ["Computer Science", "Software Engineering", "Data Structures"]
    },
    {
      type: "education",
      title: "Intermediate",
      company: "M.S College Motihari",
      period: "2020-2021",
      description: "Completed intermediate education with strong foundation in mathematics and science.",
      skills: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      type: "education",
      title: "High School",
      company: "Jeewan Public School",
      period: "2018-2019",
      description: "Completed High School education with strong foundation in mathematics and science.",
      skills: ["Science","Maths","English","Hindi","Sanskrit"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 ml-12 md:ml-0">
                  <div className="flex items-center gap-3 mb-3">
                    {exp.type === "work" ? (
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                    )}
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-blue-400 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
