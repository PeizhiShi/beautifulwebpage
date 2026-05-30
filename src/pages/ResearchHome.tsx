
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
  GraduationCap,
  MapPin,
  Award
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import OptimizedImage from "../components/OptimizedImage";

const ResearchHome = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex flex-col md:flex-row gap-8 items-start pb-2 mt-6 mb-2">
          <div className="w-40 min-w-40 overflow-hidden rounded-lg">
            <OptimizedImage 
              src="/lovable-uploads/C16CC70A-9C83-4E11-A878-5E995B84EEC5_1_105_c.png" 
              alt="Profile" 
              className="w-full h-auto object-cover"
              loading="eager"
              priority={true}
              width={127}
              height={169}
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Dr. Peizhi Shi</h1>
            <h2 className="text-xl text-gray-600 mb-4">Assistant Professor in Applied Artificial Intelligence</h2>
            
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Machine Learning</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Industrial AI</span>
              <span className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">AI-enabled Decision Support</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Sustainable Operations</span>
            </div>
            
            <p className="text-gray-700 mb-6">
           </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={16} />
                <span>University of Leeds</span>
              </div>
              <a href="mailto:p.shi@leeds.ac.uk" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Mail size={16} />
                <span>p.shi@leeds.ac.uk</span>
              </a>
              
              <a href="https://scholar.google.com/citations?user=qQuCvmQAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <GraduationCap size={16} />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </header>
        
        <nav className="mb-10 mt-2">
          <ul className="flex flex-wrap gap-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-blue-200 after:via-blue-400 after:to-blue-200">
            <li><Link to="/research" className="text-blue-600 hover:text-blue-800 font-medium">Research</Link></li>
            <li><Link to="/publications" className="text-blue-600 hover:text-blue-800 font-medium">Publications</Link></li>
            <li><Link to="/teaching" className="text-blue-600 hover:text-blue-800 font-medium">Teaching</Link></li>
            <li><Link to="/cv" className="text-blue-600 hover:text-blue-800 font-medium">Curriculum Vitae</Link></li>
          </ul>
        </nav>
        
        <main>
            
            
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Profile</h2>
            <p className="text-gray-700 leading-relaxed">
              I am an Assistant Professor in Applied Artificial Intelligence at the Centre for Decision Research, University of Leeds. My research develops AI-enabled decision systems for sustainable business and industrial operations, with particular emphasis on machine learning, computer vision, and large language models for complex real-world problems. My work connects Industrial AI with decision support in areas such as sustainable operations, production research, intelligent manufacturing, business analytics, and AI for sustainable business.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Research Highlights</h2>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-64 flex-shrink-0">
                      <OptimizedImage 
                        src="/lovable-uploads/sustainable-packaging-llm.png" 
                        alt="LLM-Enhanced Decision Support System for Sustainable Packaging" 
                        className="w-full h-auto rounded-lg"
                        width={256}
                        height={256}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">AI-enabled Decision Support for Sustainable Operations</h3>
                      <p className="text-gray-700 mb-3">Developing large language model-based decision support systems to help organisations make more informed, efficient, and sustainable operational decisions.</p>
                      <Link to="/research?tab=sustainable-packaging" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-100">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">Industrial AI for Production Research</h3>
                      <p className="text-gray-700 mb-3">Using machine learning, computer vision, and reinforcement learning to improve production decisions, manufacturing feature recognition, process planning, and additive manufacturing operations.</p>
                      <Link to="/research?tab=additive-manufacturing" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                    </div>
                    <div className="w-full md:w-64 flex-shrink-0">
                      <OptimizedImage 
                        src="/lovable-uploads/additive-manufacturing-build.png" 
                        alt="Learning-based Build Orientation for Additive Manufacturing" 
                        className="w-full h-auto rounded-lg"
                        width={256}
                        height={256}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">PhD Opportunities</h2>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Message to Potential PhD Students</h3>
                  <p className="text-gray-700 mb-4">
I welcome enquiries from prospective PhD students interested in Industrial AI, AI-enabled decision support, and sustainable operations. I am particularly interested in projects that use machine learning, computer vision, large language models, and optimisation to improve decision-making in production, operations, and sustainability. If you are considering doctoral research in these areas, please feel free to get in touch with your academic CV and a brief statement of research interests. </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Application information:</strong> Please visit the <a href="https://business.leeds.ac.uk/research-degrees" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">LUBS PhD page</a> for programs, requirements and applications.
                  </p>
                  <p className="text-gray-700">
                    <strong>Scholarship opportunities:</strong> <a href="https://phd.leeds.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">University Scholarship</a>, and <a href="https://wrdtp.ac.uk/studentships/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">White Rose Scholarship</a>.
                  </p>
                </CardContent>
              </Card>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Recent News</h2>
            <ul className="space-y-4">

              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Publication:</strong> Our work "Machine learning in feature recognition for manufacturing: Taxonomy, analytical review, comparisons, trends, challenges, and outlook" has been accepted for publication in International Journal of Production Research (Impact Factor: 8.8, ABS3)!
                </p>
              </li>

              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Publication:</strong> Our work "Multi-scale and real-time load forecasting: A universal online functional analysis framework " has been accepted for publication in IEEE Transactions on Engineering Management (ABS3)!
                </p>
              </li>
              
              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Invited talk:</strong> Kun Feng, Director of <a href="https://www.srmailing.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SR Mailing Ltd</a>, and I were invited to co-present at the Analytics, Technology and Operations Department event. Our talk explored the use of large language models to support sustainable innovation in the packaging industry.
                </p>
              </li>
              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Citation milestone:</strong> Our paper "A novel learning-based feature recognition method using multiple sectional view representation" has reached 100 citations!
                </p>
              </li>
              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Funding:</strong> Our KTP project has been jointly funded by <a href="https://www.srmailing.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SR Mailing Ltd</a> and Innovate UK (£338,916). I will serve as the principal investigator for this project.
                </p>
              </li>
              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>New position:</strong> I am joining University of Leeds as a Lecturer in Applied Artificial Intelligence!
                </p>
              </li>
              
            </ul>
          </section>

          
        </main>
        
        <footer className="text-center text-gray-600 relative pt-6 mt-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent">
          <p>© 2026 Dr. Peizhi Shi. Last updated: June 2026 <a href="https://clustrmaps.com/site/1bohv"  title="ClustrMaps"><img width="5px" src="//www.clustrmaps.com/map_v2.png?d=GNKaZ2hx2hnIWDV343dbm1lxrydeLScrzGYnPqib9SA&cl=ffffff" /></a>  
</p>

        </footer>


      </div>
    </div>
  );
};


export default ResearchHome;
