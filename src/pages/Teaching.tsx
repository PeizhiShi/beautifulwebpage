
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
          I teach undergraduate and graduate modules in computer vision, machine learning, 
          and related areas. My teaching philosophy emphasizes hands-on learning, 
          real-world applications, and the development of both theoretical understanding 
          and practical implementation skills.
        </p>
        
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
            <div className="space-y-8">
              <ModuleCard
                code="LUBS5586M"
                title="Quantitative Analysis"
                term="Semester 1 (Sep to Jan) 2024/25"
                level="Postgraduate"
                university="University of Leeds"
                role="Module Leader"
                
              />
              
              <ModuleCard
                code="LUBS5996M"
                title="Understanding Data for Decision Making"
                term="Semester 2 (Feb to Jun) 2024/25"
                level="Postgraduate"
                university="University of Leeds"
                role="Teaching Staff"
                
              />

              <ModuleCard
                code="LUBS5990M"
                title="Machine Learning in Practice"
                term="Semester 2 (Feb to Jun) 2023/24"
                level="Postgraduate"
                university="University of Leeds"
                role="Teaching Staff"
              />

              <ModuleCard
                code="LUBS5308M"
                title="Business Analytics and Decision Science"
                term="Semester 1 (Sep to Jan) 2023/24, 2024/25"
                level="Postgraduate"
                university="University of Leeds"
                role="Teaching Staff"
                
              />

              <ModuleCard
                code="LUBS5988M"
                title="Research Design and Analysis"
                term="Semester 2 (Feb to Jun) 2023/24"
                level="Postgraduate"
                university="University of Leeds"
                role="Teaching Staff"
                
              />

              <ModuleCard
                title="Modelling and Visualization of High Dimensional Data"
                term="2015"
                level="Postgraduate"
                university="University of Manchester"
                role="Teaching Assistant"
                
              />

              <ModuleCard
                title="Introduction to Machine Learning"
                term="2015"
                level="Undergraduate"
                university="University of Manchester"
                role="Teaching Assistant"
                
              />

              <ModuleCard
                title="Algorithms and Imperative Programming"
                term="2013 -- 2015, 2017"
                level="Undergraduate"
                university="University of Manchester"
                role="Teaching Assistant"
                
              />

              <ModuleCard
                title="3rd Asian-Pacfic summer school on formal methods"
                term="Summer 2011"
                level="All"
                university="University of Science and Technology of China"
                role="Teaching Assistant"
                
              />

              
            </div>
          </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
};

interface ModuleCardProps {
  code: string;
  title: string;
  term: string;
  level: "Undergraduate" | "Graduate" | "Postgraduate";
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
            <h3 className="font-bold text-lg">{code}: {title}</h3>
            <p className="text-gray-600">{term} • {level} • {university}</p>
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
