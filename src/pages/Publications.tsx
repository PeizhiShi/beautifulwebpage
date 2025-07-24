
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  FileText, 
  Book, 
  Presentation, 
  ExternalLink,
  Calendar,
  Tags,
  FolderOpen
} from "lucide-react";
import { publications } from "@/lib/publications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Group publications by type
  const publicationsByType = useMemo(() => {
    const grouped: Record<string, typeof publications> = {};
    
    publications.forEach(pub => {
      if (!grouped[pub.type]) {
        grouped[pub.type] = [];
      }
      grouped[pub.type].push(pub);
    });
    
    // Sort by publication count and then alphabetically
    const typeOrder = ['journal', 'conference', 'book', 'thesis', 'workshop', 'preprint'];
    return typeOrder
      .filter(type => grouped[type] && grouped[type].length > 0)
      .map(type => ({
        type: type.charAt(0).toUpperCase() + type.slice(1) + 's',
        publications: grouped[type].sort((a, b) => b.year - a.year)
      }));
  }, []);

  // Group publications by topic
  const publicationsByTopic = useMemo(() => {
    const mlKeywords = ['machine learning', 'reinforcement learning', 'feature recognition', 'small sample learning', 'computer vision', 'object detection', 'representation learning', 'game AI', 'procedural generation', 'computational intelligence', 'neural', 'deep learning'];
    
    // Specific papers that should be in machine learning research
    const mlTitles = [
      "Automatic generation of alternative build orientations for laser powder bed fusion based on facet clustering",
      "Automatic determination of part build orientation for laser powder bed fusion"
    ];
    
    // Specific papers that should be in other AI research
    const otherAITitles = [
      "Status, issues, and future of computer-aided part orientation for additive manufacturing",
      "Archimedean Muirhead aggregation operators of q-rung orthopair fuzzy numbers for multicriteria group decision making"
    ];
    
    const machineLearning: typeof publications = [];
    const otherAI: typeof publications = [];
    
    publications.forEach(pub => {
      // Check if it's specifically designated for ML research
      if (mlTitles.includes(pub.title)) {
        machineLearning.push(pub);
        return;
      }
      
      // Check if it's specifically designated for other AI research
      if (otherAITitles.includes(pub.title)) {
        otherAI.push(pub);
        return;
      }
      
      // Otherwise, categorize based on keywords
      const hasMLKeyword = pub.tags.some(tag => 
        mlKeywords.some(keyword => tag.toLowerCase().includes(keyword.toLowerCase()))
      ) || pub.title.toLowerCase().includes('learning') || 
          pub.title.toLowerCase().includes('neural') ||
          pub.title.toLowerCase().includes('ai');
      
      if (hasMLKeyword) {
        machineLearning.push(pub);
      } else {
        otherAI.push(pub);
      }
    });
    
    return [
      {
        topic: 'Machine learning research',
        publications: machineLearning.sort((a, b) => b.year - a.year)
      },
      {
        topic: 'Other AI research',
        publications: otherAI.sort((a, b) => b.year - a.year)
      }
    ].filter(group => group.publications.length > 0);
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
        
        <Tabs defaultValue="type" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="type" className="flex items-center gap-2">
              <FolderOpen size={16} />
              By Type
            </TabsTrigger>
            <TabsTrigger value="topic" className="flex items-center gap-2">
              <Tags size={16} />
              By Topic
            </TabsTrigger>
            <TabsTrigger value="chronological" className="flex items-center gap-2">
              <Calendar size={16} />
              Chronological
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chronological" className="mt-6">
            <div className="space-y-10">
              {publicationsByYear.map(({ year, publications }) => (
                <div key={year}>
                  <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">{year}</h2>
                  <ul className="space-y-3">
                    {publications.map((pub, index) => (
                      <PublicationItem key={index} publication={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="type" className="mt-6">
            <div className="space-y-10">
              {publicationsByType.map(({ type, publications }) => (
                <div key={type}>
                  <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">{type}</h2>
                  <ul className="space-y-3">
                    {publications.map((pub, index) => (
                      <PublicationItem key={index} publication={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="topic" className="mt-6">
            <div className="space-y-10">
              {publicationsByTopic.map(({ topic, publications }) => (
                <div key={topic}>
                  <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">{topic}</h2>
                  <ul className="space-y-3">
                    {publications.map((pub, index) => (
                      <PublicationItem key={index} publication={pub} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface PublicationItemProps {
  publication: (typeof publications)[0];
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  // Function to highlight P. Shi in author names
  const highlightAuthor = (authors: string) => {
    const parts = authors.split(/(P\. Shi)/g);
    return parts.map((part, index) => 
      part === 'P. Shi' ? (
        <span key={index} className="font-bold">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <li className="pb-4">
      <h3 className="font-medium">{publication.title}</h3>
      <p className="text-gray-700 text-sm">{highlightAuthor(publication.authors)}</p>
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
