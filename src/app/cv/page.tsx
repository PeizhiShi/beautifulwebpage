'use client'

import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone, Globe, Briefcase, GraduationCap, Award, FileText } from "lucide-react";

const CV = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-gray-600">
            A summary of my qualifications, skills, and experience.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={16} />
              <span>Leeds, UK</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={16} />
              <a href="mailto:p.shi@leeds.ac.uk" className="hover:text-blue-600">p.shi@leeds.ac.uk</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={16} />
              <span>+44 (0) 7404 741886</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Globe size={16} />
              <a href="https://peizhishi.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">peizhishi.com</a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-gray-700">
            A highly motivated and skilled researcher with a strong background in machine learning and its applications. Proven ability to develop and implement innovative solutions to complex problems. Seeking a challenging and rewarding position in a research-intensive environment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Lecturer in Applied Artificial Intelligence</h3>
              <p className="text-gray-600">University of Leeds • 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Leading and teaching postgraduate modules in quantitative analysis and applied AI in business.</li>
                <li>Conducting research in machine learning and its applications to sustainable manufacturing.</li>
                <li>Supervising MSc dissertation projects.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Knowledge Transfer Partnership (KTP) Associate</h3>
              <p className="text-gray-600">University of Leeds & SR Mailing Ltd • 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Leading a KTP project focused on integrating AI and LLM techniques into sustainable packaging.</li>
                <li>Developing and implementing AI-driven solutions for data analytics, CRM, and operational optimization.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Research Associate</h3>
              <p className="text-gray-600">University of Manchester • 2021 - 2024</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Conducted research on machine learning for manufacturing feature recognition.</li>
                <li>Developed novel object detection network architectures.</li>
                <li>Published research in top-tier journals and conferences.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">PhD in Computer Science</h3>
              <p className="text-gray-600">University of Manchester • 2017 - 2021</p>
              <p className="text-gray-700 mt-2">Thesis: Learning-based Methods for Automated Process Planning in Manufacturing</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">MSc in Advanced Computer Science</h3>
              <p className="text-gray-600">University of Manchester • 2015 - 2016</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">BEng in Software Engineering</h3>
              <p className="text-gray-600">University of Science and Technology of China • 2011 - 2015</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Data Analysis</li>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Awards and Recognition</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Fellow of the Higher Education Academy (FHEA)</li>
            <li>Best Paper Award at the International Conference on Manufacturing Research (ICMR), 2021</li>
            <li>University of Manchester President's Doctoral Scholar Award</li>
          </ul>
        </section>

        <footer className="text-center text-gray-600">
          <p>© 2025 Dr. Peizhi Shi</p>
          <Link href="/lovable-uploads/Peizhi_Shi_CV.pdf" className="inline-flex items-center text-blue-600 hover:text-blue-800" target="_blank">
              <FileText size={16} className="mr-2" />
              Download CV
            </Link>
        </footer>
      </div>
    </div>
  );
};

export default CV;
