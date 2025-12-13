import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Sigma, Database, Shield, Code, Gavel } from 'lucide-react';
import Link from 'next/link';

const specialists = [
    { icon: <Sigma className="w-8 h-8 text-accent" />, role: 'Matemática Estadística', description: 'Modelos predictivos y evaluación cuantitativa de riesgos.' },
    { icon: <Database className="w-8 h-8 text-accent" />, role: 'Ingeniería de Datos', description: 'Arquitectura de datos y analítica visual en Power BI.' },
    { icon: <Shield className="w-8 h-8 text-accent" />, role: 'Ciberseguridad', description: 'Protección de activos digitales y gestión de incidentes.' },
    { icon: <Code className="w-8 h-8 text-accent" />, role: 'Desarrollo de Software', description: 'Automatización y soluciones tecnológicas a medida.' },
    { icon: <Gavel className="w-8 h-8 text-accent" />, role: 'Derecho Laboral y Tributario', description: 'Blindaje legal y gobierno corporativo.' },
];

export default function Team() {
  const cristianAvatar = PlaceHolderImages.find(p => p.id === 'cristian-bernal-avatar');

  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-headline">Un solo equipo, infinitas perspectivas.</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 md:text-lg">
            En Stendarr, el dato se encuentra con la ley y la tecnología con la estrategia.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-20">
            <Card className="bg-background border-border p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <Avatar className="w-32 h-32 border-4 border-accent">
                        <AvatarImage src={cristianAvatar?.imageUrl} alt="Cristian Bernal" data-ai-hint={cristianAvatar?.imageHint} />
                        <AvatarFallback>CB</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">Cristian Bernal</h3>
                        <p className="text-accent font-medium">Founder & Managing Partner</p>
                        <p className="text-foreground/80 mt-2">
                           Auditor forense y consultor especializado en fraude financiero y riesgos TI. Con trayectoria en el sector financiero, Cristian lidera la visión estratégica de Stendarr, transformando la auditoría tradicional en un motor de innovación basado en IA.
                        </p>
                        <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-foreground/90">
                            “La auditoría y la consultoría deben evolucionar al ritmo de la tecnología. Stendarr nace para liderar ese cambio.”
                        </blockquote>
                        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-accent hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>

        <div className="text-center mb-12">
             <h3 className="text-2xl font-bold text-white">Nuestros Especialistas</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {specialists.map(specialist => (
                <div key={specialist.role} className="flex flex-col items-center text-center p-4">
                    {specialist.icon}
                    <h4 className="mt-4 font-semibold text-white text-lg">{specialist.role}</h4>
                    <p className="mt-1 text-foreground/80 text-sm">{specialist.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
