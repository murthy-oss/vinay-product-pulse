
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Product-Focused Android Intern",
      company: "Geeks for Geeks",
      location: "Noida",
      period: "Feb 2025",
      type: "Internship",
      description: [
        "Collaborated with product and design teams to conceptualize and develop a learning app that improved student retention by implementing user-centric features.",
        "Conducted user research and feedback sessions to identify pain points, directly influencing 3+ feature iterations.",
        "Ensured product usability and performance through continuous A/B testing, leading to a 90% user satisfaction score."
      ]
    },
    {
      title: "Software Development Intern – Product Delivery",
      company: "HeyDoc AI",
      location: "Hybrid",
      period: "Nov 2024 - Jan 2025",
      type: "Internship",
      description: [
        "Collaborated with stakeholders to define product requirements for healthcare mobile solutions, aligning technical feasibility with business objectives.",
        "Designed MVP features focused on user engagement, resulting in a 30% increase in daily active users.",
        "Implemented cross-platform testing and user behavior tracking to guide product roadmap decisions."
      ]
    },
    {
      title: "Android Lead",
      company: "Google Developer Student Clubs (GDSC)",
      location: "AITAM",
      period: "July 2023 – July 2024",
      type: "Leadership",
      description: [
        "Spearheaded Android development initiatives, conducting workshops and mentorship sessions to upskill 100+ students.",
        "Acted as a key liaison between the GDSC core team and students, customizing learning resources based on community feedback."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6" />
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-primary">
              <CardHeader className="bg-gray-50 p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{exp.company} • {exp.location}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      {exp.type}
                    </Badge>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc ml-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
