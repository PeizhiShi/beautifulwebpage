import { Link } from "react-router-dom";
import { ArrowLeft, Mic, FileCheck, Edit } from "lucide-react";

const AcademicEngagement = () => {
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500 flex items-center" id="invited-talks">
            <Mic size={20} className="mr-2" />
            Invited talk
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">"LLM-Enhanced Decision Support System for the Sustainable Packaging Sector"</h3>
              <p className="text-gray-600">2025 • ATOD event, University of Leeds</p>
              <p className="text-gray-700 mt-2">Co-presented with Kun Feng (Director of SR Mailing)</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">"Applying AI for Enterprise Intelligence and Manufacturing Innovation"</h3>
              <p className="text-gray-600">2025 • The Future Advanced Metrology Hub for Sustainable Manufacturing</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">"Machine Learning for Decision-making in Intelligent Manufacturing"</h3>
              <p className="text-gray-600">2023 • Centre for Decision Research, University of Leeds</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">"Machine Learning Research in Intelligent Manufacturing"</h3>
              <p className="text-gray-600">2023 • Research Festival, University of Huddersfield</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-lg text-gray-800">"Machine Learning and its Applications"</h3>
              <p className="text-gray-600">2019 • EPSRC Future Advanced Metrology Hub</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500 flex items-center" id="journal-reviewer">
            <FileCheck size={20} className="mr-2" />
            Journal reviewer
          </h2>
          <ul className="space-y-2">
            <li><p className="text-gray-700">IEEE Transactions on Industrial Informatics</p></li>
            <li><p className="text-gray-700">Robotics and Computer-integrated Manufacturing</p></li>
            <li><p className="text-gray-700">Artificial Intelligence Review</p></li>
            <li><p className="text-gray-700">Journal of Intelligent Manufacturing</p></li>
            <li><p className="text-gray-700">CIRP Annals - Manufacturing Technology</p></li>
            <li><p className="text-gray-700">IEEE Transactions on Games</p></li>
            <li><p className="text-gray-700">Journal of Business Analytics</p></li>
            <li><p className="text-gray-700">Journal of the Operational Research Society</p></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500 flex items-center" id="guest-editor">
            <Edit size={20} className="mr-2" />
            Guest editor
          </h2>
          <ul className="space-y-2">
            <li><p className="text-gray-700">Special Issue "Application of Artificial Intelligence Techniques in Additive Manufacturing" of Processes.</p></li>
          </ul>
        </section>
        
      </div>
    </div>
  );
};

export default AcademicEngagement;