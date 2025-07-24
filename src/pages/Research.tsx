
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Research = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Research & Grant</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          My research is dedicated to advancing the real-world application of artificial intelligence, with a focus on developing scalable, robust, and high-impact intelligent systems. By integrating machine learning, and data-driven modeling, I aim to address complex, uncertain challenges and drive the adoption of AI across different sectors.
        </p>
        
        <ResearchArea
          id="llm-decision-support"
          title="LLM-Enhanced Decision Support System"
          image="/lovable-uploads/16c97d0e-ae76-4f4d-a7bb-402f6ac84038.png"
          description="SR Mailing Ltd is a pioneering company in the sustainable packaging industry. In this project, we will lead the integration of cutting-edge Artificial Intelligence (AI) and Large Language Model (LLM) techniques into SR Mailing's systems. The collaboration aims to develop LLM-enhanced data analytics, customer relationship management, and operational optimisation to support sustainable practices. This integration is expected to enhance decision-making across management, marketing, and sales, drive market expansion, and position SR Mailing as a sector leader in AI-enhanced decision support. The project is funded by Innovate UK and SR Mailing Ltd."
          keyPublications={[]}
          fundingInfo="2025 - 2027, Principal Investigator, £338,916, 'LLM-enhanced decision support system for the sustainable packaging sector', Knowledge Transfer Partnerships with SR Mailing, Innovate UK"
        />
        
        <ResearchArea
          id="build-orientation"
          title="Learning-based Build Orientation in Additive Manufacturing"
          image="/lovable-uploads/ea1d636f-219d-408c-95c6-dd5199f2aee2.png"
          description="This project aims to develop intelligent algorithms that optimize the build orientation of 3D-printed parts using machine learning techniques. By leveraging data-driven insights from simulations, the approach seeks to outperform traditional optimization-based methods in terms of efficiency and effectiveness, offering scalable and automated solutions for a wide range of additive manufacturing applications."
          keyPublications={[
            {
              title: "Learn to rotate: Part orientation for reducing support volume via generalizable reinforcement learning",
              authors: "P. Shi, Q. Qi, Y. Qin, F. Meng, S. Lou, P. J. Scott, and X. Jiang",
              venue: "IEEE Transactions on Industrial Informatics, 2023, IF: 12.1",
              link: "/publications"
            },
            {
              title: "Automatic determination of part build orientation for laser powder bed fusion",
              authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
              venue: "Virtual and Physical Prototyping, 2021, IF: 10.6",
              link: "/publications"
            },
            {
              title: "Automatic generation of alternative build orientations for laser powder bed fusion based on facet clustering",
              authors: "Y. Qin, Q. Qi, P. Shi, P. J. Scott, and X. Jiang",
              venue: "Virtual and Physical Prototyping, 2020, IF: 10.6",
              link: "/publications"
            }
          ]}
        />
        
        <ResearchArea
          id="feature-recognition"
          title="Learning-based Feature Recognition in Subtractive Manufacturing"
          image="/lovable-uploads/2c78a9ea-5f63-46c9-bd3e-942ad352f67a.png"
          description="This project aims to design algorithms that automatically recognize 2.5D manufacturing features from 3D components. A novel object detection network architecture is proposed as part of this work. At the time of its release, the approach achieves state-of-the-art performance in intersecting feature recognition and localization on benchmark datasets."
          keyPublications={[
            {
              title: "Highly interacting machining feature recognition via small sample learning",
              authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
              venue: "Robotics and Computer-Integrated Manufacturing, 2022, IF: 10.4",
              link: "/publications"
            },
            {
              title: "Intersecting machining feature localisation and recognition via single shot multibox detector",
              authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
              venue: "IEEE Transactions on Industrial Informatics, 2021, IF: 12.1",
              link: "/publications"
            },
            {
              title: "A novel learning-based feature recognition method using multiple sectional view representation",
              authors: "P. Shi, Q. Qi, Y. Qin, P. J. Scott, and X. Jiang",
              venue: "Journal of Intelligent Manufacturing, 2020, IF: 8.3",
              link: "/publications"
            }
          ]}
        />
        
        <ResearchArea
          id="game-generation"
          title="Learning-based Game Generation"
          image="/lovable-uploads/cc41bb2a-69b7-4478-8f95-c07b84b58196.png"
          description="This research project aims to develop a novel procedural content generation method to create high-quality levels in Super Mario Bros. To achieve this, we propose a hybrid approach that leverages the synergy between rule-based and learning-based methods to produce constructive primitives—high-quality yet controllable game segments in Super Mario Bros. These primitives can be adopted as the basic building blocks of a game level and enable online level generation and real-time content adaptation based on various design criteria. Examples of levels generated by our approach are shown above."
          keyPublications={[
            {
              title: "Learning constructive primitives for real-time dynamic difficulty adjustment in Super Mario Bros",
              authors: "P. Shi, and K. Chen",
              venue: "IEEE Transactions on Games, 2017",
              link: "/publications"
            },
            {
              title: "Online level generation in Super Mario Bros via learning constructive primitives",
              authors: "P. Shi, and K. Chen",
              venue: "IEEE Conference on Computational Intelligence and Games, 2016",
              link: "/publications"
            }
          ]}
        />
        

        
      </div>
    </div>
  );
};

interface ResearchAreaProps {
  id: string;
  title: string;
  image: string;
  description: string;
  keyPublications: {
    title: string;
    authors: string;
    venue: string;
    link: string;
  }[];
  fundingInfo?: string;
}

const ResearchArea: React.FC<ResearchAreaProps> = ({
  id,
  title,
  image,
  description,
  keyPublications,
  fundingInfo
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section className="mb-12" id={id}>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto"
        />
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-2"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} className="mr-1" />
              {fundingInfo ? "Hide Funding Information" : "Hide Key Publications"}
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" />
              {fundingInfo ? "Show Funding Information" : "Show Key Publications"}
            </>
          )}
        </button>
        
        {expanded && (
          <div className="pl-4 border-l-2 border-blue-200 mb-4">
            {fundingInfo ? (
              <>
                <h3 className="font-medium mb-2">Funding Information</h3>
                <p className="text-gray-700">{fundingInfo}</p>
              </>
            ) : (
              <>
                <h3 className="font-medium mb-2">Key Publications</h3>
                <ul className="space-y-3">
                  {keyPublications.map((pub, index) => {
                    const venueMatch = pub.venue.match(/(.*?)(,\s*IF:\s*[\d.]+)?$/);
                    const venueText = venueMatch ? venueMatch[1] : pub.venue;
                    const impactFactor = pub.venue.match(/IF:\s*([\d.]+)/)?.[1];
                    
                    return (
                      <li key={index}>
                        <p className="font-medium">{pub.title}</p>
                        <p className="text-gray-700 text-sm">{pub.authors}</p>
                        <p className="text-gray-600 text-sm italic">
                          {venueText}
                          {impactFactor && parseFloat(impactFactor) > 7 && (
                            <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                              IF: {impactFactor}
                            </span>
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;
