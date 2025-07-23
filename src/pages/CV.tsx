
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, MapPin, Phone, Globe, Briefcase, GraduationCap, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CV = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-2xl font-bold">Dr. Peizhi Shi</h2>
                <h3 className="text-xl text-gray-600">Lecturer in Applied Artificial Intelligence</h3>
              </div>
              
              <div className="mt-4 md:mt-0 space-y-1 text-gray-700">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>p.shi@leeds.ac.uk</span>
                </div>
              
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>University of Leeds</span>
                </div>
                <div className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  <span>https://peizhishi.github.io</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500 flex items-center">
            <Briefcase size={20} className="mr-2" />
            Work Experience
          </h2>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Lecturer in Applied AI</h3>
                <span className="text-gray-600">2023 - Present</span>
              </div>
              <div className="text-gray-700 mb-1">University of Leeds</div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Research Fellow in Machine Learning</h3>
                <span className="text-gray-600">2019 - 2023</span>
              </div>
              <div className="text-gray-700 mb-1">EPSRC Future Advanced Metrology Hub</div>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500 flex items-center">
            <GraduationCap size={20} className="mr-2" />
            Education
          </h2>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Ph.D. in Computer Science (Machine Learning)</h3>
                <span className="text-gray-600">2013 - 2019</span>
              </div>
              <div className="text-gray-700 mb-1">University of Manchester</div>
              <div className="text-gray-600 text-sm">Supervisor: Dr. Ke Chen</div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Master in Software Engineering</h3>
                <span className="text-gray-600">2010 - 2013</span>
              </div>
              <div className="text-gray-700 mb-1">University of Science and Technology of China</div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Bachelor in Computer Science</h3>
                <span className="text-gray-600">2006 - 2010</span>
              </div>
              <div className="text-gray-700 mb-1">Guilin University of Electronic Technology</div>
            </li>
          </ul>
        </section>
        
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Programming Languages</h3>
                <p className="text-gray-700">Python, C++, C, Java, MATLAB, CUDA</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Frameworks & Libraries</h3>
                <p className="text-gray-700">PyTorch, TensorFlow, OpenCV, scikit-learn, NumPy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Research Skills</h3>
                <p className="text-gray-700">Deep Learning, Computer Vision, Optimization, Algorithm Design</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Languages</h3>
                <p className="text-gray-700">Chinese (Native), English (Proficient)</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
      
        
      </div>
    </div>
  );
};


export default CV;
