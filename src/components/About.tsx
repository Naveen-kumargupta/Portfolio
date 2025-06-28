
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://res.cloudinary.com/disdjaxce/image/upload/v1751136314/WhatsApp_Image_2025-06-29_at_00.13.02_3d450b86_hkrai7.jpg"
              alt="Naveen Kumar"
              className="relative rounded-lg shadow-xl w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies 
                and Software Development. Currently I am a fresher, Completed my B.tech (CSE) degree from Raj Kumar Goel Institute 
                of Technology, I've developed a strong foundation in both frontend 
                and backend development.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in technology has led me to work on various projects ranging from 
                web applications to Software Development solutions. I'm particularly interested 
                in creating scalable, user-friendly applications that solve real-world problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">6+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">1+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
