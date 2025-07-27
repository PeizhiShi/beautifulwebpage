import { Link } from "react-router-dom";
import { ArrowLeft, Mic, FileCheck, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AcademicEngagement = () => {
  const engagementSections = [
    {
      id: "invited-talks",
      label: "Invited Talks",
      icon: <Mic size={16} />,
      content: (
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
      )
    },
    {
      id: "journal-reviewer",
      label: "Journal Reviewer",
      icon: <FileCheck size={16} />,
      content: (
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
      )
    },
    {
      id: "guest-editor",
      label: "Guest Editor",
      icon: <Edit size={16} />,
      content: (
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700">Special Issue "Application of Artificial Intelligence Techniques in Additive Manufacturing" of Processes.</p>
          </CardContent>
        </Card>
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
        
        <div className="space-y-8">
          {engagementSections.map(({ id, label, icon, content }) => (
            <div key={id}>
              <div className="flex items-center gap-2 mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">
                {icon}
                <h2 className="text-2xl font-semibold text-gray-900">{label}</h2>
              </div>
              {content}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default AcademicEngagement;
