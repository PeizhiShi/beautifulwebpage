import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientProvider from './ClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Peizhi's Website",
  description: 'Peizhi Shi - Academic Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lovable-uploads/502a9e5e-f3dd-4d21-b7f2-87d04d1eb47a.png" type="image/png" />
        <meta property="og:image" content="/og-image.png" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','3783fc0f-6a21-11f0-9db8-960004340fd3','va')`
        }} />
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module" />
      </head>
      <body className={inter.className}>
        <ClientProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ClientProvider>
      </body>
    </html>
  )
}