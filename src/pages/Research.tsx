
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, ChevronDown, ChevronUp, MessageSquare, Rotate3D, Settings, Gamepad2, Package, Printer, Gamepad, PoundSterling, Wrench, Search, Mic, FileCheck, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import OptimizedImage from "@/components/OptimizedImage";

const Research = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("sustainable-packaging");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);
  
  // Define research projects with categories
  const researchProjects = [
    {
      id: "llm-decision-support",
      title: "LLM-Enhanced Decision Support System",
      category: "sustainable-packaging",
      image: "/lovable-uploads/16c97d0e-ae76-4f4d-a7bb-402f6ac84038.png",
      description: (
        <>
          <a href="https://www.srmailing.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SR Mailing Ltd</a> is a pioneering company in the sustainable packaging industry. In this project, we will lead the integration of cutting-edge Artificial Intelligence (AI) and Large Language Model (LLM) techniques into SR Mailing's systems. The collaboration aims to develop LLM-enhanced data analytics, customer relationship management, and operational optimisation to support sustainable practices. This integration is expected to enhance decision-making across management, marketing, and sales, drive market expansion, and position SR Mailing as a sector leader in AI-enhanced decision support. The project is funded by Innovate UK and SR Mailing Ltd.
        </>
      ),
      keyPublications: [],
      keyFunding: [
        {
          duration: "2025 - 2027",
          pi: "Dr. Peizhi Shi (Academic Supervisor)",
          coIs: "Prof. Barbara Summers (Academic Lead), Dr. Xingjie Wei (Academic Advisor), Aritad Choicharoon (Academic Advisor)",
          partner: "SR Mailing Ltd",
          amount: "£338,916",
          scheme: "Knowledge Transfer Partnerships with SR Mailing, Innovate UK"
        }
      ],
      fundingType: "principal" as const
    },
    {
      id: "build-orientation",
      title: "Learning-based Build Orientation",
      category: "additive-manufacturing",
      image: "/lovable-uploads/ea1d636f-219d-408c-95c6-dd5199f2aee2.png",
      description: "This project aims to develop intelligent algorithms that optimize the build orientation of 3D-printed parts using machine learning techniques. By leveraging data-driven insights from simulations, the approach seeks to outperform traditional optimization-based methods in terms of efficiency and effectiveness, offering scalable and automated solutions for a wide range of additive manufacturing applications.",
      keyPublications: [
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
      ],
      fundingType: "ongoing" as const
    },
    {
      id: "feature-recognition",
      title: "Learning-based Feature Recognition",
      category: "subtractive-manufacturing",
      image: "/lovable-uploads/2c78a9ea-5f63-46c9-bd3e-942ad352f67a.png",
      description: "This project aims to design algorithms that automatically recognize 2.5D manufacturing features from 3D components. A novel object detection network architecture is proposed as part of this work. At the time of its release, the approach achieves state-of-the-art performance in intersecting feature recognition and localization on benchmark datasets.",
      keyPublications: [
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
          venue: "Journal of Intelligent Manufacturing, 2020, IF: 7.7",
          link: "/publications"
        }
      ],
      fundingType: "ongoing" as const
    },
    {
      id: "game-generation",
      title: "Learning-based Game Generation",
      category: "entertainment",
      image: "/lovable-uploads/cc41bb2a-69b7-4478-8f95-c07b84b58196.png",
      description: "This research project aims to develop a novel procedural content generation method to create high-quality levels in Super Mario Bros. To achieve this, we propose a hybrid approach that leverages the synergy between rule-based and learning-based methods to produce constructive primitives—high-quality yet controllable game segments in Super Mario Bros. These primitives can be adopted as the basic building blocks of a game level and enable online level generation and real-time content adaptation based on various design criteria. Examples of levels generated by our approach are shown above.",
      keyPublications: [
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
      ],
      supervisor: "Dr. Ke Chen",
      fundingType: "scholarship" as const
    }
  ];

  // Group projects by category
  const projectsByCategory = [
    {
      category: "sustainable-packaging",
      label: "AI in Sustainable Packaging",
      icon: <Package size={16} />,
      projects: researchProjects.filter(p => p.category === "sustainable-packaging")
    },
    {
      category: "additive-manufacturing", 
      label: "AI in Additive Manufacturing",
      icon: <Rotate3D size={16} />,
      projects: researchProjects.filter(p => p.category === "additive-manufacturing")
    },
    {
      category: "subtractive-manufacturing",
      label: "AI in Subtractive Manufacturing", 
      icon: <Search size={16} />,
      projects: researchProjects.filter(p => p.category === "subtractive-manufacturing")
    },
    {
      category: "entertainment",
      label: "AI in Entertainment",
      icon: <Gamepad size={16} />,
      projects: researchProjects.filter(p => p.category === "entertainment")
    }
  ];

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
        
       
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {projectsByCategory.map(({ category, label, icon }) => {
              console.log('Rendering tab:', category, 'with icon:', icon); // Debug log
              return (
                <TabsTrigger key={category} value={category} className="flex items-center gap-2">
                  <span className="flex-shrink-0">{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(' ').slice(-1)[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {projectsByCategory.map(({ category, projects }) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="space-y-12">
                {projects.map((project) => (
                  <ResearchArea
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    keyPublications={project.keyPublications}
                    keyFunding={project.keyFunding}
                    supervisor={project.supervisor}
                    fundingType={project.fundingType}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Academic Engagement Section */}
        <section className="mt-2 space-y-8">
          <div className="flex items-center gap-2 mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">
            <Mic size={20} />
            <h2 className="text-2xl font-bold text-gray-900">Invited Talks</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">LLM-Enhanced Decision Support System for the Sustainable Packaging Sector</h4>
                    <div className="text-sm text-gray-600 italic">ATOD event, University of Leeds</div>
                    <div className="text-sm text-gray-700">Co-presented with Kun Feng (Director of SR Mailing)</div>
                  </div>
                  <span className="text-sm text-gray-600">2025</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Applying AI for Enterprise Intelligence and Manufacturing Innovation</h4>
                    <div className="text-sm text-gray-600 italic">The Future Advanced Metrology Hub for Sustainable Manufacturing</div>
                  </div>
                  <span className="text-sm text-gray-600">2025</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Machine Learning for Decision-making in Intelligent Manufacturing</h4>
                    <div className="text-sm text-gray-600 italic">Centre for Decision Research, University of Leeds</div>
                  </div>
                  <span className="text-sm text-gray-600">2023</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Machine Learning Research in Intelligent Manufacturing</h4>
                    <div className="text-sm text-gray-600 italic">Research Festival, University of Huddersfield</div>
                  </div>
                  <span className="text-sm text-gray-600">2023</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">Machine Learning and its Applications</h4>
                    <div className="text-sm text-gray-600 italic">EPSRC Future Advanced Metrology Hub</div>
                  </div>
                  <span className="text-sm text-gray-600">2019</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-2 mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">
            <FileCheck size={20} />
            <h2 className="text-2xl font-bold text-gray-900">Journal Reviewer</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <p className="text-gray-700">IEEE Transactions on Industrial Informatics</p>
                <p className="text-gray-700">Robotics and Computer-integrated Manufacturing</p>
                <p className="text-gray-700">Artificial Intelligence Review</p>
                <p className="text-gray-700">Journal of Intelligent Manufacturing</p>
                <p className="text-gray-700">CIRP Annals - Manufacturing Technology</p>
                <p className="text-gray-700">IEEE Transactions on Games</p>
                <p className="text-gray-700">Journal of Business Analytics</p>
                <p className="text-gray-700">Journal of the Operational Research Society</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-2 mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">
            <Edit size={20} />
            <h2 className="text-2xl font-bold text-gray-900">Guest Editor</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Special Issue "Application of Artificial Intelligence Techniques in Additive Manufacturing" of Processes.</p>
            </CardContent>
          </Card>
        </section>
        
      </div>
    </div>
  );
};

interface ResearchAreaProps {
  id: string;
  title: string;
  image: string;
  description: string | React.ReactNode;
  keyPublications: {
    title: string;
    authors: string;
    venue: string;
    link: string;
  }[];
  keyFunding?: {
    title?: string;
    duration: string;
    pi: string;
    coIs: string;
    partner: string;
    amount: string;
    scheme: string;
  }[];
  fundingInfo?: string;
  supervisor?: string;
  fundingType?: 'principal' | 'ongoing' | 'scholarship';
}

const ResearchArea: React.FC<ResearchAreaProps> = ({
  id,
  title,
  image,
  description,
  keyPublications,
  keyFunding,
  fundingInfo,
  supervisor,
  fundingType
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const getFundingBadge = () => {
    if (!fundingType) return null;
    
    switch (fundingType) {
      case 'principal':
        return (
          <>
           
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Funded by Innovate UK & SR Mailing
            </span>
          </>
        );
      case 'ongoing':
        return (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Ongoing Research
          </span>
        );
      case 'scholarship':
        return (
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            Funded by PhD Scholarship
          </span>
        );
      default:
        return null;
    }
  };

  const getSupervisorBadge = () => {
    if (!supervisor) return null;
    
    return (
      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
        Supervised by {supervisor}
      </span>
    );
  };
  
  return (
    <section className={`mb-12 ${fundingType ? 'bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200' : ''}`} id={id}>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 flex items-center justify-between">
        <div className="flex items-center">
          {getProjectIcon(title)}
          {title}
        </div>
        <div className="flex gap-2 flex-wrap">
          {getFundingBadge()}
          {getSupervisorBadge()}
        </div>
      </h2>
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto"
          width={800}
        />
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {(keyFunding || fundingInfo || keyPublications.length > 0) && (
        <div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-2"
          >
            {expanded ? (
              <>
                <ChevronUp size={16} className="mr-1" />
                {keyFunding ? "Hide Funding Information" : fundingInfo ? "Hide Funding Information" : "Hide Key Publications"}
              </>
            ) : (
              <>
                <ChevronDown size={16} className="mr-1" />
                {keyFunding ? "Show Funding Information" : fundingInfo ? "Show Funding Information" : "Show Key Publications"}
              </>
            )}
          </button>
        
          {expanded && (
            <div className="pl-4 border-l-2 border-blue-200 mb-4">
              {keyFunding ? (
                <>
                  <h3 className="font-medium mb-2">Funding Information</h3>
                  <ul className="space-y-3">
                    {keyFunding.map((funding, index) => (
                      <li key={index}>
                        <div className="text-gray-700 text-sm space-y-1">
                          <p><span className="font-medium">Duration:</span> {funding.duration}</p>
                          <p><span className="font-medium">Principal Investigator:</span> {funding.pi}</p>
                          <p><span className="font-medium">Co-Investigators:</span> {funding.coIs}</p>
                          <p><span className="font-medium">Industry Partner:</span> {funding.partner}</p>
                          <p><span className="font-medium">Funding Amount:</span> {funding.amount}</p>
                          <p><span className="font-medium">Funding Scheme:</span> {funding.scheme}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : fundingInfo ? (
                <>
                  <h3 className="font-medium mb-2">Funding Information</h3>
                  <ul className="space-y-2">
                    {fundingInfo.split('\n').filter(line => line.trim()).map((line, index) => (
                      <li key={index} className="text-gray-700">
                        {line.replace('• **', '').replace(':**', ':')}
                      </li>
                    ))}
                  </ul>
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
      )}
    </section>
  );
};

const getProjectIcon = (title: string) => {
  return null;
};

export default Research;
