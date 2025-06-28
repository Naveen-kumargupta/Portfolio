
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PlaceAlert: Campus Placement Management System",
      description: "A comprehensive full-stack web application built with React.js, Express.js, MongoDB, and Git & GitHub. Features JWT-based authentication, real-time notifications, and advanced scoring system for campus placement management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      features: [
        "JWT-based authentication and real-time notifications",
        "Advanced scoring system for placement evaluation",
        "Integrated MongoDB for data persistence",
        "Modern UI/UX design"
      ],
      githubUrl: "https://github.com/DevByRitesh/PlaceAlert",
      liveUrl: "#"
    },
    {
      title: "Life Below Water Awareness Website",
      description: "Interactive website promoting Sustainable Development Goal 14 (Life Below Water) with engaging educational content, interactive quiz games, and dynamic facts carousel, resulting in increased user engagement.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive quiz game for marine conservation awareness",
        "Dynamic facts carousel with engaging animations",
        "Responsive design across all device sizes",
        "Educational content with visual storytelling"
      ],
      githubUrl: "https://github.com/DevByRitesh/life-below-water",
      liveUrl: "https://devbyritesh.github.io/life-below-water/"
    },
    {
      title: "Fish Disease Detection System",
      description: "AI-powered system using Django, HTML, CSS, Git & GitHub for real-time detection of fish diseases. Leverages advanced machine learning algorithms and computer vision for accurate disease identification.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      technologies: ["Django", "Python", "Machine Learning", "OpenCV", "TensorFlow", "HTML/CSS"],
      features: [
        "Real-time fish disease detection using ML algorithms",
        "Computer vision integration for image processing",
        "Streamlit interface for enhanced user interaction",
        "Robust backend with Django framework"
      ],
      githubUrl: "https://github.com/DevByRitesh/fishDiseaseDetection",
      liveUrl: "https://fishdd.streamlit.app/"
    },
    {
      title: "Human Disease Prediction Website",
      description: "Full-stack website for human disease prediction using Django, Python, HTML, and CSS, providing a robust platform for health predictions based on symptoms and medical data analysis.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["Django", "Python", "HTML/CSS", "Machine Learning", "Data Science"],
      features: [
        "Symptom-based disease prediction system",
        "Machine learning algorithms for accurate predictions",
        "User-friendly interface for health assessment",
        "Comprehensive medical data analysis"
      ],
      githubUrl: "https://github.com/DevByRitesh/Human-Disease-Prediction-Full-Stack-Website",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions across web development, AI/ML, and full-stack applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 px-4 py-2 rounded-lg border border-blue-400/30 hover:bg-blue-400/10"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
