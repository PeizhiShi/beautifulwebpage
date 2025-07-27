'use client'

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Go back home
        </Link>
      </div>
    </div>
  );
}