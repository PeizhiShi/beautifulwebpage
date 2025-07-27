'use client'

import { useMemo, useState } from "react";
import Link from "next/link";
import { publications } from "@/lib/publications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  pdfLink?: string;
}

const PublicationsPage = () => {
  const [selectedYear, setSelectedYear] = useState("all");

  const years = useMemo(() => {
    const allYears = [...new Set(publications.map((pub) => pub.year))];
    return ["all", ...allYears.sort((a, b) => b - a)];
  }, []);

  const filteredPublications = useMemo(() => {
    if (selectedYear === "all") {
      return publications;
    }
    return publications.filter((pub) => pub.year.toString() === selectedYear);
  }, [selectedYear]);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">Publications</h1>

        <Tabs value={selectedYear} onValueChange={setSelectedYear} className="mb-8">
          <TabsList className="w-full">
            {years.map((year) => (
              <TabsTrigger key={year} value={year} className="flex-1">
                {year === "all" ? "All Years" : year}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <section>
          <ul className="divide-y divide-gray-200">
            {filteredPublications.map((publication) => (
              <li key={publication.id} className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-4">
                    <p className="text-lg font-semibold text-gray-900">{publication.title}</p>
                    <p className="text-gray-700">{publication.authors}</p>
                    <p className="text-gray-600">{publication.venue}, {publication.year}</p>
                  </div>
                  <div className="md:col-span-1 flex justify-end items-center">
                    {publication.link && (
                      <a href={publication.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 mr-3">
                        View
                      </a>
                    )}
                    {publication.pdfLink && (
                      <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

import { ArrowLeft } from "lucide-react";

export default PublicationsPage;
