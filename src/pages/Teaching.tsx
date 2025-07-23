
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
                code="CS4001"
                title="Advanced Computer Vision"
                term="Fall 2023"
                level="Graduate"
                university="Stanford University"
                description="This module covers advanced topics in computer vision including object detection, 
                instance segmentation, 3D vision, and visual SLAM. Students will implement state-of-the-art 
                computer vision algorithms and complete a research project."
                topics={[
                  "Deep learning for visual recognition",
                  "Multi-view geometry and 3D reconstruction",
                  "Visual tracking and motion estimation",
                  "Visual SLAM systems",
                  "Generative models for vision"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Module Website", link: "#" }
                ]}
              />
              
              <ModuleCard
                code="CS2005"
                title="Introduction to Machine Learning"
                term="Spring 2024"
                level="Undergraduate"
                university="Stanford University"
                description="An introductory module on machine learning covering fundamental concepts, 
                algorithms, and applications. Topics include supervised learning, unsupervised learning, 
                and basic deep learning. The module emphasizes practical skills with programming assignments in Python."
                topics={[
                  "Linear and logistic regression",
                  "Decision trees and random forests",
                  "Neural networks and backpropagation",
                  "Clustering and dimensionality reduction",
                  "Model evaluation and validation"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Module Website", link: "#" }
                ]}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-8">
              <ModuleCard
                code="CS3002"
                title="Computer Vision"
                term="Spring 2023"
                level="Undergraduate"
                university="MIT"
                description="An introduction to computer vision covering image formation, feature detection, 
                image segmentation, object recognition, and deep learning approaches to vision problems."
                topics={[
                  "Image processing and filtering",
                  "Feature detection and matching",
                  "Camera models and calibration",
                  "Convolutional neural networks for vision",
                  "Object detection and segmentation"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Module Materials", link: "#" }
                ]}
              />
              
              <ModuleCard
                code="CS5001"
                title="Deep Learning for Computer Vision"
                term="Fall 2022"
                level="Graduate"
                university="MIT"
                description="A specialized module focusing on deep learning techniques for computer vision tasks. 
                The module covers CNN architectures, training methodologies, and applications to various vision problems."
                topics={[
                  "CNN architectures (ResNet, EfficientNet, Vision Transformer)",
                  "Object detection (YOLO, Faster R-CNN)",
                  "Semantic segmentation (FCN, U-Net)",
                  "Generative models (GANs, VAEs)",
                  "Transfer learning and fine-tuning"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Module Materials", link: "#" }
                ]}
              />
              
              <ModuleCard
                code="CS1001"
                title="Introduction to Programming"
                term="Fall 2021"
                level="Undergraduate"
                university="University of California, Berkeley"
                description="A first module in programming using Python, covering basic programming concepts, 
                data structures, algorithms, and problem-solving techniques."
                topics={[
                  "Variables, expressions, and statements",
                  "Control flow (conditionals, loops)",
                  "Functions and modular programming",
                  "Data structures (lists, dictionaries, sets)",
                  "File I/O and error handling"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Module Materials", link: "#" }
                ]}
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
  level: "Undergraduate" | "Graduate";
  university: string;
  description: string;
  topics: string[];
  materials: {
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
            <p className="text-gray-500 text-sm mt-1">{university}</p>
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
      </CardContent>
    </Card>
  );
};

export default Teaching;
