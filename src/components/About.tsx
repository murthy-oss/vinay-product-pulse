
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <User className="h-6 w-6" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed mb-4">
                  I am an aspiring Product Manager with a strong technical foundation in Computer Science from Aditya Institute of Technology and Management. My journey combines technical know-how with product thinking, allowing me to bridge the gap between user needs, business goals, and technical feasibility.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Through my experiences at Geeks for Geeks and HeyDoc AI, I've developed a passion for creating user-centric products that solve real problems. I thrive on conducting user research, analyzing data, and iterating based on feedback to create impactful solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  As an Android Lead at Google Developer Student Clubs, I've cultivated leadership skills and the ability to communicate complex ideas simply. I'm motivated by seeing how the right product decisions can drive positive user experiences and business outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-5">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="font-medium">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-gray-600 mb-2">Aditya Institute of Technology and Management, Tekkali</p>
                <p className="text-gray-600 mb-4">2021-25 • CGPA: 9.0</p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Contact Details</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Email:</span> vinaylakkoju17@gmail.com</p>
                  <p><span className="font-medium">Phone:</span> +91-9603043375</p>
                  <div className="flex mt-4 space-x-4">
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
