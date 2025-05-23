
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-lg font-medium text-gray-600 mb-2">Hello, I'm</h2>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
                Vinay Lakkoju
              </h1>
              <p className="text-2xl font-medium text-gray-700">
                Associate Product Manager
              </p>
            </div>
            <p className="text-lg text-gray-600 max-w-lg">
              Building user-centric products with a focus on impact. 
              I blend technical knowledge with product thinking to solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 mx-auto overflow-hidden rounded-full bg-gray-100 border-4 border-white shadow-xl">
                <div className="flex items-center justify-center h-full">
                 <img src="https://likhithdeveloper.github.io/developers.gen/assets/images/3.png"  className="hero-image"
                 style={{ maxWidth: '100%', height: '100%' }}
                 ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
