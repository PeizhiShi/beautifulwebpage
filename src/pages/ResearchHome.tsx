
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Github, 
  BookOpen, 
  FileText, 
  Presentation,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResearchHome = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex flex-col md:flex-row gap-8 items-start pb-8 mb-8">
          <div className="w-40 h-40 min-w-40 bg-gray-200 overflow-hidden rounded-full">
            <img 
              src="/lovable-uploads/1ffac403-948a-44ba-84cd-4d6903233aee.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Dr. Peizhi Shi</h1>
            <h2 className="text-xl text-gray-600 mb-4">Lecturer in Applied Artificial Intelligence</h2>
            
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Machine Learning</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Computer Vision</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Robotics</span>
            </div>
            
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:p.shi@leeds.ac.uk" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Mail size={16} />
                <span>p.shi@leeds.ac.uk</span>
              </a>
              <a href="https://github.com/PeizhiShi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://orcid.org/0000-0001-6724-282X" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <User size={16} />
                <span>ORCID</span>
              </a>
              <a href="https://scholar.google.com/citations?user=qQuCvmQAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <GraduationCap size={16} />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </header>
        
        <nav className="mb-10">
          <ul className="flex flex-wrap gap-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-blue-200 after:via-blue-400 after:to-blue-200">
            <li><Link to="/research" className="text-blue-600 hover:text-blue-800 font-medium">Research</Link></li>
            <li><Link to="/publications" className="text-blue-600 hover:text-blue-800 font-medium">Publications</Link></li>
            <li><Link to="/teaching" className="text-blue-600 hover:text-blue-800 font-medium">Teaching</Link></li>
            <li><Link to="/cv" className="text-blue-600 hover:text-blue-800 font-medium">CV</Link></li>
          </ul>
        </nav>
        
        <main>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">About Me</h2>
            <p className="text-gray-700">
              I am a Lecturer in Applied Artificial Intelligence at University of Leeds. My research interests include machine learning (ML), artificial intelligence (AI), and their real-world applications, particularly in sustainable manufacturing, design for additive manufacturing, and production research.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Research Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Real-time Object Detection</h3>
                  <p className="text-gray-700 mb-3">Novel approaches to object detection in resource-constrained environments.</p>
                  <Link to="/research#object-detection" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Neural Architecture Search</h3>
                  <p className="text-gray-700 mb-3">Automated discovery of efficient neural network architectures.</p>
                  <Link to="/research#neural-architecture" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Recent News</h2>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-700">
                  <strong>June 2025:</strong> Kun Feng, Director of SR Mailing, and I were invited to co-present at the Analytics, Technology and Operations Department event. Our talk explored the use of large language models to support sustainable innovation in the packaging industry.
                </p>
              </li>
              <li className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700">
                  <strong>Funding:</strong> Our KTP project has been jointly funded by SR Mailing and Innovate UK (£338,916). I will serve as the principal investigator for this project.
                </p>
              </li>
              <li className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-700">
                  <strong>September 2023:</strong> I am joining University of Leeds as a Lecturer in Applied Artificial Intelligence!
                </p>
              </li>
              <li className="border-l-4 border-orange-500 pl-4">
                <p className="text-gray-700">
                  <strong>Publication:</strong> Our work "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning" has been accepted for publication in IEEE Transactions on Industrial Informatics (Impact Factor: 12.3)!
                </p>
              </li>
            </ul>
          </section>
        </main>
        
        <footer className="text-center text-gray-600 relative pt-6 mt-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent">
          <p>© 2023 Dr. Jane Researcher. Last updated: November 2023</p>
        </footer>
      </div>
    </div>
  );
};

const latestPublications = [
  {
    title: "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning",
    authors: "P. Shi, Q. Qi, Y. Qin, F. Meng, S. Lou, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2023,
    pdf: "#"
  },
  {
    title: "Highly interacting machining feature recognition via small sample learning",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Robotics and Computer-Integrated Manufacturing",
    year: 2022,
    pdf: "#"
  },
  {
    title: "Intersecting machining feature localisation and recognition via single shot multibox detector",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "IEEE Transactions on Industrial Informatics",
    year: 2021,
    pdf: "#"
  },
  {
    title: "Automatic determination of part build orientation for laser powder bed fusion",
    authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
    venue: "Virtual and Physical Prototyping",
    year: 2021,
    pdf: "#"
  },
  {
    title: "A novel learning-based feature recognition method using multiple sectional view representation",
    authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
    venue: "Journal of Intelligent Manufacturing",
    year: 2020,
    pdf: "#"
  }
] as const;

export default ResearchHome;
