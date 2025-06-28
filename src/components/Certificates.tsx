
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Programming in Java Certificate",
      issuer: "NPTEL",
      date: "2023",
      description: "Completed 12 weeks Programming in Java NPTEL Online Certification course by IIT Kharagpur .",
      skills: ["Basics of Java", "OOP'S Concepts", "Programming", "Problem Solving"],
      link: "https://drive.google.com/file/d/1arTO9k-wYm0Lal9sbDE5dp7x9gEObM_s/view?usp=drive_link"
    },
    {
      title: "Web Development internship Certificate",
      issuer: "Oasis Infobyte",
      date: "2023",
      description: "Online web Development certification covering  Web Development skills and various projects.",
      skills: [ "HTML","CSS","JavaScript"],
      link: "https://drive.google.com/file/d/1l2Tuo5zn8tkN7YOQNpmkpIcALbgR5RMk/view?usp=drive_link"
    },
    {
      title: "Summer Intern Certificate",
      issuer: "NETCAMP",
      date: "2023",
      description: "Web development internship focusing on Web Development and Android Development.",
      skills: ["Web Development", "Android Development", "Networking"],
      link: ""
    },
    {
      title: "Introduction to Time Management ",
      issuer: "Infosys",
      date: "202",
      description: "Time Management certification.",
      skills: ["Time Management", "Team work", "Risk Management"],
      link: "https://drive.google.com/file/d/1Oawya9K7IqLXJLdSf3j0-DhQko7c1AFO/view?usp=sharing"
    },
    {
      title: "Web Development Intern Certification",
      issuer: "OCTANET SERVICE PVT LTD.",
      date: "2023",
      description: "Learn about Web development fundamentals HTML, CSS, Js and various real world projects.",
      skills: ["Data Science", "Statistics", "Data Analysis"],
      link: "https://drive.google.com/file/d/13McbDvAAQSDl1-sy9G7ujnwbZ4KA2abe/view?usp=drive_link"
    },
    
    {
      title: "Web Development Certificatiom",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive web development training covering HTML fundamentals, JavaScript .",
      skills: ["HTML/CSS", "JavaScript", "React", "Web APIs"],
      link: "https://drive.google.com/file/d/1cZJ4j2wzdRqPUiEYpaEzMXAyJsQUxMpe/view?usp=sharing"
    },
    
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & <span className="text-blue-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications and achievements showcasing continuous learning and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 group border border-slate-700/50 hover:border-blue-400/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8" />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-3 text-sm">
                {cert.issuer}
              </p>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <a
                href={cert.link}
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
