
import { Folder, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "CheckMyResume – AI Resume Analyzer",
      description: "AI-powered Resume Analyzer to Maximize Your Job Prospects",
      achievements: [
        "Led product ideation and development for a resume scoring app with over 5000+ Play Store downloads.",
        "Integrated Gemini API to deliver AI-powered content feedback, improving user engagement by 40%.",
        "Managed user feedback loop to prioritize feature requests, enhancing retention."
      ],
      technologies: ["Flutter", "Gemini API", "UX Research"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Prompt GPT – AI Prompt Enhancer",
      description: "Your Personalized AI Prompt Engine for Every Skill Level",
      achievements: [
        "Designed a tiered prompt optimization tool catering to different user expertise levels (Basic, Medium, Pro) with over 5000+ Play Store downloads.",
        "Conducted user interviews to validate use cases, resulting in 3 validated personas.",
        "Built MVP and collaborated cross-functionally to achieve platform feature parity."
      ],
      technologies: ["Flutter", "Gemini API", "UX Research"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <Folder className="h-6 w-6" />
          <h2 className="section-title">Product Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-gray-600 italic mt-1">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc ml-5 space-y-2 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-end space-x-4">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="View Live Demo"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
