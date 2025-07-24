
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Users, ExternalLink, GraduationCap } from "lucide-react";
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
        
        <Tabs defaultValue="current" className="mb-10">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="current" className="flex-1">
              <Calendar size={16} className="mr-2" />
              Current Modules
            </TabsTrigger>
            <TabsTrigger value="past" className="flex-1">
              <BookOpen size={16} className="mr-2" />
              Past Modules
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="space-y-8">
              <ModuleCard
                code="LUBS5586M"
                title="Quantitative Analysis"
                term="Semester 1 (Sep to Jan) 2025/26"
                level="Postgraduate"
                university="University of Leeds"
                role="Module Leader"
                description="This course aims to give students a sound grounding in quantitative analysis at the level necessary to: 1) facilitate their study of academic literature on their MSc programme, 2) facilitate their undertaking of a quantitative research project for their dissertation, and 3) allow them to use and interpret results from such methods in a business environment."
                topics={[
                  "Probability and probability distributions",
                  "Hypothesis testing and confidence intervals",
                  "The multivariate analysis of linear relationships",
                  "Group comparisons (using ANOVA)",
                  "Exploratory factor analysis"
                ]}
                materials={[
                  { label: "Module Catalogue", link: "https://catalogue.leeds.ac.uk/Module/TP/LUBS/5586M/202526" },
                  { label: "Timetable", link: "http://timetable.leeds.ac.uk/teaching/202526/reporting/Individual?objectclass=module&idtype=name&identifier=LUBS5586M01&template=SWSCUST+module+Individual&days=1-7&weeks=1-52&periods=1-21" }
                ]}
              />
              
              <ModuleCard
                code="LUBS5565M"
                title="Applied AI in Business"
                term="Semester 2 (Feb to Jun) 2025/26"
                level="Postgraduate"
                university="University of Leeds"
                role="Module Leader"
                description="This module introduces students to the practical applications of artificial intelligence in business contexts. Students will learn how AI technologies can be leveraged to solve real-world business problems, improve decision-making, and create competitive advantages across various industries."
                topics={[
                  "Provide a comprehensive introduction to AI, machine learning, and NLP in business applications",
                  "Develop practical skills in programming, data processing, and AI-driven text analysis",
                  "Explore various approaches to building, fine-tuning, and applying AI models for business use cases",
                  "Introduce best practices for designing effective AI-driven solutions, including prompt engineering and model evaluation",
                  "Encourage critical thinking about AI's impact, including ethical considerations and future trends"
                ]}
                materials={[
                  { label: "Module Catalogue", link: "https://catalogue.leeds.ac.uk/Module/TP/LUBS/5565M/202526" },
                  { label: "Timetable", link: "https://timetable.leeds.ac.uk/teaching/202526/reporting/Individual?objectclass=module&idtype=name&identifier=LUBS5565M01&template=SWSCUST+module+Individual&days=1-7&weeks=1-52&periods=1-21" }
                ]}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-4">
              {/* University of Leeds */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  University of Leeds
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">LUBS5586M: Quantitative Analysis</h4>
                      <div className="text-sm text-gray-600">2024/25 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Module Leader</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">LUBS5996M: Understanding Data for Decision Making</h4>
                      <div className="text-sm text-gray-600">2024/25 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Staff</span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">LUBS5988M: Research Design and Analysis</h4>
                      <div className="text-sm text-gray-600">2024/25 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Staff</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">LUBS5990M: Machine Learning in Practice</h4>
                      <div className="text-sm text-gray-600">2023/24 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Staff</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">LUBS5308M: Business Analytics and Decision Science</h4>
                      <div className="text-sm text-gray-600">2023/24, 2024/25 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Staff</span>
                  </div>
                  
                  
                </div>
              </div>

              {/* University of Manchester */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  University of Manchester
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Modelling and Visualization of High Dimensional Data</h4>
                      <div className="text-sm text-gray-600">2015 • Postgraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Assistant</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Introduction to Machine Learning</h4>
                      <div className="text-sm text-gray-600">2015 • Undergraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Assistant</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Algorithms and Imperative Programming</h4>
                      <div className="text-sm text-gray-600">2013-2015, 2017 • Undergraduate</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Assistant</span>
                  </div>
                </div>
              </div>

              {/* University of Science and Technology of China */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  University of Science and Technology of China
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">3rd Asian-Pacific Summer School on Formal Methods</h4>
                      <div className="text-sm text-gray-600">Summer 2011</div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">Teaching Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Professional Recognition Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Professional Recognition</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <GraduationCap size={24} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Fellow of the Higher Education Academy</h3>
                  <p className="text-gray-600">Professional recognition for excellence in higher education teaching and learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Student Supervision Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Student Supervision</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users size={24} className="text-gray-600 mt-1 flex-shrink-0" />
                  <div className="space-y-6">
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="font-semibold text-lg text-gray-800">Academic Personal Tutoring</h3>
                      <p className="text-gray-600">2023/24 • University of Leeds</p>
                      <p className="text-gray-700 mt-2">Providing academic guidance and personal support to students throughout their academic journey.</p>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="font-semibold text-lg text-gray-800">MSc Dissertation Projects</h3>
                      <p className="text-gray-600">2023/24 • Leeds University Business School, University of Leeds</p>
                      <p className="text-gray-700 mt-2">Supervised three MSc students in their dissertation projects, providing guidance on research methodology, data analysis, and academic writing.</p>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h3 className="font-semibold text-lg text-gray-800">Undergraduate Final Year Project</h3>
                      <p className="text-gray-600">2016 • BSc Computer Science, University of Manchester</p>
                      <p className="text-gray-700 mt-2">Supervised undergraduate student's final year project, mentoring them through the complete research and development process.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
      </div>
    </div>
  );
};

interface ModuleCardProps {
  code?: string;
  title: string;
  term: string;
  level?: "Undergraduate" | "Graduate" | "Postgraduate";
  university: string;
  role: string;
  description?: string;
  topics?: string[];
  materials?: {
    label: string;
    link: string;
  }[];
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  code,
  title,
  term,
  level,
  university,
  role,
  description,
  topics,
  materials
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">
              {code ? `${code}: ${title}` : title}
            </h3>
            <p className="text-gray-600 flex items-center gap-2 flex-wrap">
              <span>{term}</span>
              {level && (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  level === "Postgraduate" ? "bg-blue-100 text-blue-800" :
                  level === "Graduate" ? "bg-purple-100 text-purple-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {level}
                </span>
              )}
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                university === "University of Leeds" ? "bg-indigo-100 text-indigo-800" :
                university === "University of Manchester" ? "bg-amber-100 text-amber-800" :
                "bg-rose-100 text-rose-800"
              }`}>
                {university}
              </span>
            </p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            role === "Module Leader" ? "bg-green-100 text-green-800" : 
            role === "Teaching Staff" ? "bg-blue-100 text-blue-800" : 
            "bg-orange-100 text-orange-800"
          }`}>
            {role}
          </span>
        </div>
        
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        
        {topics && topics.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium mb-2">Key Topics</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              {topics.map((topic, index) => (
                <li key={index}>• {topic}</li>
              ))}
            </ul>
          </div>
        )}
        
        {materials && materials.length > 0 && (
          <div>
            <h4 className="font-medium mb-2">Module Materials</h4>
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
        )}
      </CardContent>
    </Card>
  );
};

export default Teaching;
