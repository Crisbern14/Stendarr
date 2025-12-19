import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { FirebaseClientProvider } from '@/firebase';
import ObserverProvider from '@/components/ui/observer-provider';

export const metadata: Metadata = {
  title: 'Stendarr | Auditoría, IA & Ciberseguridad en Colombia',
  description: 'Consultoría boutique híbrida en Colombia. Expertos en auditoría forense, riesgos, ciberseguridad, IA y cumplimiento legal para Fintechs y empresas digitales.',
  keywords: ['Auditoría forense Colombia', 'consultoría IA', 'riesgos ciberseguridad', 'cumplimiento tributario', 'análisis de datos', 'prevención de fraude', 'legal compliance'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground" suppressHydrationWarning>
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ObserverProvider />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
