
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  FileText, 
  Book, 
  Presentation, 
  ExternalLink
} from "lucide-react";
import { publications } from "@/lib/publications";

const Publications = () => {
  // Group publications by year for the chronological view
  const publicationsByYear = useMemo(() => {
    const grouped: Record<string, typeof publications> = {};
    
    publications.forEach(pub => {
      const year = pub.year.toString();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(pub);
    });
    
    // Sort years in descending order
    return Object.entries(grouped)
      .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
      .map(([year, pubs]) => ({
        year,
        publications: pubs
      }));
  }, []);
  
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Publications</h1>
        
        <div className="space-y-10">
          {publicationsByYear.map(({ year, publications }) => (
            <div key={year}>
              <h2 className="text-xl font-bold mb-4 bg-gray-100 p-2">{year}</h2>
              <ul className="space-y-6">
                {publications.map((pub, index) => (
                  <PublicationItem key={index} publication={pub} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PublicationItemProps {
  publication: (typeof publications)[0];
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <li className="pb-4">
      <h3 className="font-medium">{publication.title}</h3>
      <p className="text-gray-700 text-sm">{publication.authors}</p>
      <p className="text-gray-600 text-sm italic">
        {publication.venue}, {publication.year}
        {publication.impactFactor && publication.impactFactor > 7 && (
          <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
            IF: {publication.impactFactor}
          </span>
        )}
      </p>
      
      {publication.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {publication.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="mt-2 flex flex-wrap gap-3">
        {publication.doi && (
          <a 
            href={`https://doi.org/${publication.doi}`} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Book size={14} />
            <span>DOI</span>
          </a>
        )}
        {publication.slides && (
          <a 
            href={publication.slides} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Presentation size={14} />
            <span>Slides</span>
          </a>
        )}
        {publication.link && (
          <a 
            href={publication.link} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} />
            <span>Link</span>
          </a>
        )}
      </div>
    </li>
  );
};

export default Publications;
