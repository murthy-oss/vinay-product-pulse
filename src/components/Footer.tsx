
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Vinay Lakkoju</h3>
            <p className="text-gray-400 mb-4">Associate Product Manager</p>
            <p className="text-gray-300">Building user-centric products with impact.</p>
          </div>
          
          <div className="md:text-right">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
                <a href="#about">About</a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
                <a href="#experience">Experience</a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
                <a href="#projects">Projects</a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
                <a href="#skills">Skills</a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:text-white hover:bg-gray-800">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Vinay Lakkoju. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
