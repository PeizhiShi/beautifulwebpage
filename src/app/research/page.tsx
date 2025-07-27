'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ChevronDown, ChevronUp, Package, Rotate3D, Search, Gamepad, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const Research = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("sustainable-packaging");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Research & Grant</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="sustainable-packaging" className="flex-1">
              <Package size={16} className="mr-2" />
              Sustainable Packaging
            </TabsTrigger>
            <TabsTrigger value="additive-manufacturing" className="flex-1">
              <Rotate3D size={16} className="mr-2" />
              Additive Manufacturing
            </TabsTrigger>
            <TabsTrigger value="subtractive-manufacturing" className="flex-1">
              <Search size={16} className="mr-2" />
              Subtractive Manufacturing
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="flex-1">
              <Gamepad size={16} className="mr-2" />
              Entertainment
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="sustainable-packaging">
            <div className="space-y-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">LLM-Enhanced Decision Support System</h3>
                  <img 
                    src="/lovable-uploads/16c97d0e-ae76-4f4d-a7bb-402f6ac84038.png" 
                    alt="LLM Decision Support"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <p className="text-gray-700">
                    Integration of AI and LLM techniques for sustainable packaging industry decision support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="additive-manufacturing">
            <div className="space-y-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Learning-based Build Orientation</h3>
                  <img 
                    src="/lovable-uploads/ea1d636f-219d-408c-95c6-dd5199f2aee2.png" 
                    alt="Build Orientation"
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <p className="text-gray-700">
                    Development of intelligent algorithms that optimize 3D-printed part orientations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subtractive-manufacturing">
            <div className="space-y-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Learning-based Feature Recognition</h3>
                  <p className="text-gray-700">
                    Algorithms that automatically recognize 2.5D manufacturing features from 3D components.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entertainment">
            <div className="space-y-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Learning-based Game Generation</h3>
                  <p className="text-gray-700">
                    Novel procedural content generation for creating high-quality game levels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Invited Talks</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">Multiple invited talks at universities and conferences.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-blue-500">Journal Reviewer</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">IEEE Transactions on Industrial Informatics, and other top journals.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Research;