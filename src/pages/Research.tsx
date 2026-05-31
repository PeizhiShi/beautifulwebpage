
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, ChevronDown, ChevronUp, MessageSquare, Rotate3D, Settings, Gamepad2, Package, Printer, Gamepad, PoundSterling, Wrench, Search, Mic, FileCheck, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import OptimizedImage from "@/components/OptimizedImage";

const Research = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("additive-manufacturing");

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
      category: "decision-support",
      image: "/lovable-uploads/sustainable-packaging-llm.png",
      imageLayout: "side" as const,
      description: (
        <>
          This research stream focuses on the design of AI systems that support complex organisational and operational decisions. Current work explores how large language models, machine learning, and optimisation can help businesses improve decision-making in sustainable operations. This work is supported by a Knowledge Transfer Partnership with <a href="https://www.srmailing.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">SR Mailing Ltd</a>, funded by Innovate UK.
        </>
      ),
      keyPublications: [],
      keyFunding: [
        {
          duration: "10/2025 - 10/2027",
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
      title: "Industrial AI for Production Systems",
      category: "additive-manufacturing",
      image: "/lovable-uploads/additive-manufacturing-build.png",
      imageLayout: "side" as const,
      description: "This research stream investigates how AI can improve production and manufacturing systems. My work includes machine learning and computer vision for manufacturing feature recognition, AI-enabled process planning, build orientation optimisation in additive manufacturing, and data-driven optimisation of production processes.",
      fundingType: "ongoing" as const
    }
  ];

  // Group projects by category
  const projectsByCategory = [
    {
      category: "decision-support",
      label: "AI-enabled Decision Support",
      icon: <Package size={16} />,
      projects: researchProjects.filter(p => p.category === "decision-support")
    },
    {
      category: "additive-manufacturing", 
      label: "Industrial AI",
      icon: <Rotate3D size={16} />,
      projects: researchProjects.filter(p => p.category === "additive-manufacturing")
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
        
        <h1 className="text-3xl font-bold mb-10 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-blue-500">Research & Grant</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="w-full mb-6">
            {projectsByCategory.map(({ category, label, icon }) => {
              console.log('Rendering tab:', category, 'with icon:', icon); // Debug log
              return (
                <TabsTrigger key={category} value={category} className="flex-1 flex items-center gap-2">
                  <span className="flex-shrink-0">{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(' ').slice(-1)[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {projectsByCategory.map(({ category, projects }) => (
            <TabsContent key={category} value={category}>
              <div className="space-y-12">
                {projects.map((project) => (
                  <ResearchArea
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    imageLayout={project.imageLayout}
                    description={project.description}
                    keyPublications={project.keyPublications}
                    keyFunding={project.keyFunding}
                    supervisor={(project as any).supervisor}
                    fundingType={project.fundingType}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Academic Engagement Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Grant</h2>
          <div>
            <h4 className="font-medium text-gray-900">LLM-Enhanced Decision Support System for Sustainable Packaging</h4>
            <div className="text-sm text-gray-600 italic">10/2025–10/2027 • Knowledge Transfer Partnership with SR Mailing Ltd • Innovate UK</div>
            <div className="text-sm text-gray-700">Principal Investigator • £338,916</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Invited Talks</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">LLM-Enhanced Decision Support System for the Sustainable Packaging Sector</h4>
              <div className="text-sm text-gray-600 italic">2025 • ATOD event, University of Leeds</div>
              <div className="text-sm text-gray-700">Co-presented with Kun Feng (Director of SR Mailing)</div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Applying AI for Enterprise Intelligence and Manufacturing Innovation</h4>
              <div className="text-sm text-gray-600 italic">2025 • The Future Advanced Metrology Hub for Sustainable Manufacturing</div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Machine Learning for Decision-making in Intelligent Manufacturing</h4>
              <div className="text-sm text-gray-600 italic">2023 • Centre for Decision Research, University of Leeds</div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Machine Learning Research in Intelligent Manufacturing</h4>
              <div className="text-sm text-gray-600 italic">2023 • Research Festival, University of Huddersfield</div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Machine Learning and its Applications</h4>
              <div className="text-sm text-gray-600 italic">2019 • EPSRC Future Advanced Metrology Hub</div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Journal Reviewer</h2>
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
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Guest Editor</h2>
          <p className="text-gray-700">Special Issue "Application of Artificial Intelligence Techniques in Additive Manufacturing" of Processes.</p>
        </section>
        
      </div>
    </div>
  );
};

interface ResearchAreaProps {
  id: string;
  title: string;
  image: string;
  imageLayout?: 'full' | 'side';
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
  imageLayout = 'full',
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
      {imageLayout === 'side' ? (
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="w-full md:w-72 flex-shrink-0 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto"
              width={288}
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto"
              width={800}
            />
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
        </>
      )}
      
      {(keyFunding || fundingInfo || (keyPublications && keyPublications.length > 0)) && (
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
