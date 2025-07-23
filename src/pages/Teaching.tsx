
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Users, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Teaching = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Teaching</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          I teach various courses in quantitative analysis, applied AI, machine learning, 
          and data science. My teaching philosophy emphasizes practical application, 
          real-world problem solving, and bridging the gap between theoretical concepts 
          and business applications.
        </p>
        
        <Tabs defaultValue="current" className="mb-10">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="current" className="flex-1">
              <Calendar size={16} className="mr-2" />
              Current Courses
            </TabsTrigger>
            <TabsTrigger value="past" className="flex-1">
              <BookOpen size={16} className="mr-2" />
              Past Courses
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Module Leader @ University of Leeds</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">Quantitative Analysis</h3>
                      <p className="text-gray-600">2024, 2025</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Applied AI in Business</h3>
                      <p className="text-gray-600">2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 pt-6">Teaching Staff @ University of Leeds</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">Understanding Data for Decision Making</h3>
                      <p className="text-gray-600">2025</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Research Design and Analysis</h3>
                      <p className="text-gray-600">2025</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Machine Learning in Practice</h3>
                      <p className="text-gray-600">2024</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Analytics and Decision Science</h3>
                      <p className="text-gray-600">2023 – 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Teaching Assistant @ University of Manchester</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">Modelling and Visualization of High Dimensional Data</h3>
                      <p className="text-gray-600">2015</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Introduction to Machine Learning</h3>
                      <p className="text-gray-600">2015</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Algorithms and Imperative Programming</h3>
                      <p className="text-gray-600">2013 – 2017</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 pt-6">Teaching Assistant @ USTC</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div>
                    <h3 className="font-bold text-lg">3rd Asian-Pacific Summer School on Formal Methods</h3>
                    <p className="text-gray-600">2011</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
};

interface CourseCardProps {
  code: string;
  title: string;
  term: string;
  level: "Undergraduate" | "Graduate";
  description: string;
  topics: string[];
  materials: {
    label: string;
    link: string;
  }[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  code,
  title,
  term,
  level,
  description,
  topics,
  materials
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{code}: {title}</h3>
            <p className="text-gray-600">{term} • {level}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            level === "Graduate" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
          }`}>
            {level}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Key Topics</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            {topics.map((topic, index) => (
              <li key={index}>• {topic}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Course Materials</h4>
          <div className="flex gap-3">
            {materials.map((material, index) => (
              <a 
                key={index} 
                href={material.link}
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                <ExternalLink size={14} className="mr-1" />
                {material.label}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Teaching;
