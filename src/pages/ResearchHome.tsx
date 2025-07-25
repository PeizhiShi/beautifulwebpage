
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
  MapPin
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import OrcidIcon from "../components/OrcidIcon";

const ResearchHome = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex flex-col md:flex-row gap-8 items-start pb-8 mb-8">
          <div className="w-48 min-w-48 bg-gray-200 overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/a345f82a-2491-481b-9bd0-6bbb6b3eb76f.png" 
              alt="Profile" 
              className="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Dr. Peizhi Shi</h1>
            <h2 className="text-xl text-gray-600 mb-4">Lecturer in Applied Artificial Intelligence</h2>
            
            <div className="flex flex-wrap gap-1 mb-5">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Machine Learning</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Computer Vision</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Large Language Model</span>
              <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-sm">Production Research</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              I am a Lecturer in Applied Artificial Intelligence at the Centre for Decision Research, within the Analytics, Technology and Operations Department at the University of Leeds. My research interests lie in machine learning, artificial intelligence, and their real-world applications, with a particular focus on sustainable manufacturing, design for additive manufacturing, and production research.
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
              <a href="https://github.com/PeizhiShi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://orcid.org/0000-0001-6724-282X" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <OrcidIcon size={16} />
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
            <li><Link to="/research" className="text-blue-600 hover:text-blue-800 font-medium">Research & Grant</Link></li>
            <li><Link to="/publications" className="text-blue-600 hover:text-blue-800 font-medium">Publications</Link></li>
            <li><Link to="/academic-engagement" className="text-blue-600 hover:text-blue-800 font-medium">Academic Engagement</Link></li>
            <li><Link to="/teaching" className="text-blue-600 hover:text-blue-800 font-medium">Teaching</Link></li>
            <li><Link to="/cv" className="text-blue-600 hover:text-blue-800 font-medium">Curriculum Vitae</Link></li>
          </ul>
        </nav>
        
        <main>
            
            
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Research Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">LLM-Enhanced Decision Support System</h3>
                  <p className="text-gray-700 mb-3">Integration of AI and LLM techniques for sustainable packaging industry decision support.</p>
                  <Link to="/research#llm-decision-support" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Learning-based Build Orientation</h3>
                  <p className="text-gray-700 mb-3">Development of intelligent algorithms that optimize 3D-printed part orientations.</p>
                  <Link to="/research#build-orientation" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
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
                    I welcome enquiries from prospective PhD students with interests aligned to mine, specifically in machine learning and its applications. Applicants are expected to have a strong academic background in computer science, machine learning, mathematics, operational research, optimisation, data science, or related disciplines. If you are considering doctoral research and are passionate about applying advanced machine learning to real-world problems, please feel free to get in touch with your academic CV and a research proposal.
                  </p>
                  <p className="text-gray-700">
                    <strong>Scholarship opportunities:</strong> <a href="https://phd.leeds.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">University Scholarship</a>, <a href="https://www.csc.edu.cn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">CSC Scholarship</a> (open to Chinese citizens only), and <a href="https://wrdtp.ac.uk/studentships/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">White Rose Scholarship</a>.
                  </p>
                </CardContent>
              </Card>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Recent News</h2>
            <ul className="space-y-4">
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
              <li className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700">
                  <strong>Publication:</strong> Our work "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning" has been accepted for publication in IEEE Transactions on Industrial Informatics (Impact Factor: 12.1)!
                </p>
              </li>
            </ul>
          </section>
        </main>
        
        <footer className="text-center text-gray-600 relative pt-6 mt-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent">
          <p>© 2025 Dr. Peizhi Shi. Last updated: July 2025 <a href="https://clustrmaps.com/site/1bohv"  title="ClustrMaps"><img width="5px" src="//www.clustrmaps.com/map_v2.png?d=GNKaZ2hx2hnIWDV343dbm1lxrydeLScrzGYnPqib9SA&cl=ffffff" /></a>  
</p>

        </footer>


      </div>
    </div>
  );
};


export default ResearchHome;
