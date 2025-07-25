import { Link } from "react-router-dom";
import { ArrowLeft, Mic, FileCheck, Edit } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AcademicEngagement = () => {
  const [activeTab, setActiveTab] = useState("invited-talks");

  const engagementSections = [
    {
      id: "invited-talks",
      label: "Invited Talks",
      icon: <Mic size={16} />,
      content: (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium text-gray-900">LLM-Enhanced Decision Support System for the Sustainable Packaging Sector</h4>
                <span className="text-gray-600 text-sm">2025</span>
              </div>
              <p className="text-gray-600 text-sm italic mb-1">ATOD event, University of Leeds</p>
              <p className="text-gray-700 text-sm">Co-presented with Kun Feng (Director of SR Mailing)</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium text-gray-900">Applying AI for Enterprise Intelligence and Manufacturing Innovation</h4>
                <span className="text-gray-600 text-sm">2025</span>
              </div>
              <p className="text-gray-600 text-sm italic">The Future Advanced Metrology Hub for Sustainable Manufacturing</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium text-gray-900">Machine Learning for Decision-making in Intelligent Manufacturing</h4>
                <span className="text-gray-600 text-sm">2023</span>
              </div>
              <p className="text-gray-600 text-sm italic">Centre for Decision Research, University of Leeds</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium text-gray-900">Machine Learning Research in Intelligent Manufacturing</h4>
                <span className="text-gray-600 text-sm">2023</span>
              </div>
              <p className="text-gray-600 text-sm italic">Research Festival, University of Huddersfield</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h4 className="font-medium text-gray-900">Machine Learning and its Applications</h4>
                <span className="text-gray-600 text-sm">2019</span>
              </div>
              <p className="text-gray-600 text-sm italic">EPSRC Future Advanced Metrology Hub</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "journal-reviewer",
      label: "Journal Reviewer",
      icon: <FileCheck size={16} />,
      content: (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">IEEE Transactions on Industrial Informatics</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Robotics and Computer-integrated Manufacturing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Artificial Intelligence Review</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Journal of Intelligent Manufacturing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">CIRP Annals - Manufacturing Technology</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">IEEE Transactions on Games</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Journal of Business Analytics</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Journal of the Operational Research Society</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: "guest-editor",
      label: "Guest Editor",
      icon: <Edit size={16} />,
      content: (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Special Issue "Application of Artificial Intelligence Techniques in Additive Manufacturing" of Processes.</p>
            </CardContent>
          </Card>
        </div>
      )
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
        
        <h1 className="text-3xl font-bold mb-6">Academic Engagement</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          I actively engage with the academic community through invited talks, peer review activities, 
          and editorial contributions. This engagement helps advance the field and foster collaboration 
          across research communities.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {engagementSections.map(({ id, label, icon }) => (
              <TabsTrigger key={id} value={id} className="flex items-center gap-2">
                {icon}
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {engagementSections.map(({ id, content }) => (
            <TabsContent key={id} value={id} className="mt-6">
              {content}
            </TabsContent>
          ))}
        </Tabs>
        
      </div>
    </div>
  );
};

export default AcademicEngagement;
