
import { MessageCircle, Users, Zap, Target, BookOpen, Lightbulb } from "lucide-react";

const Strengths = () => {
  const strengths = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication",
      description: "Skilled in fostering meaningful connections and collaborating with diverse teams.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedication",
      description: "Consistently demonstrates commitment and perseverance in achieving objectives.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Leadership",
      description: "Effective in guiding teams towards successful project completion and goal achievement.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Adaptability",
      description: "Quickly adjusts to new challenges and environments, embracing change with enthusiasm.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Quick Learner",
      description: "Rapidly assimilates new concepts and technologies, facilitating efficient learning.",
      color: "from-red-400 to-rose-400"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Analytical mindset with strong ability to break down complex problems into manageable solutions.",
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="strengths" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core <span className="text-blue-400">Strengths</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Personal and professional qualities that drive success and meaningful collaboration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
              
              <div className="relative bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 transform hover:scale-105">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${strength.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {strength.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {strength.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {strength.description}
                </p>
                
                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${strength.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
