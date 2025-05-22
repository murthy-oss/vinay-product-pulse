
import { Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Agile", "Roadmapping", "A/B Testing", "Wireframing", "Analytics", "MVP Design"]
    },
    {
      title: "Technical",
      skills: ["Flutter", "Firebase", "Dart", "SQL", "Git", "APIs", "Google ML Kit"]
    },
    {
      title: "Tools",
      skills: ["Jira", "Figma", "Notion", "Postman", "Google Analytics"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Leadership", "Empathy", "User-Centric Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="h-6 w-6" />
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-white px-3 py-2 rounded-md text-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Looking for my next opportunity</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            I'm currently seeking Associate Product Manager roles where I can leverage my technical background 
            and product thinking to create exceptional user experiences and business value.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
