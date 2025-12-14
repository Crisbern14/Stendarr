import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Fingerprint, Lock, BrainCircuit, Gavel, Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    title: 'Auditoría & Riesgos 4.0',
    description: 'Auditoría interna/externa y financiera potenciada por IA. Evaluación de control interno con enfoque en datos.',
  },
  {
    icon: <Fingerprint className="w-10 h-10 text-accent" />,
    title: 'Forensic & Fraud Investigation',
    description: 'Investigaciones complejas de fraude financiero y reconstrucción de transacciones mediante análisis forense digital.',
  },
  {
    icon: <Lock className="w-10 h-10 text-accent" />,
    title: 'Ciberseguridad & InfoSec',
    description: 'Pentesting, Ethical Hacking y gestión de vulnerabilidades bajo estándares internacionales (ISO 27001, NIST).',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    title: 'IA & Analítica Avanzada',
    description: 'Modelos predictivos de detección de fraude, automatización inteligente y dashboards ejecutivos en Power BI.',
    link: '/fraud-detection',
    linkLabel: 'Probar herramienta de detección'
  },
  {
    icon: <Gavel className="w-10 h-10 text-accent" />,
    title: 'Legal & Compliance',
    description: 'Experticia en derecho laboral y tributario, soporte jurídico a investigaciones y cumplimiento normativo (SARLAFT, SAGRILAFT, PTEE).',
  },
  {
    icon: <Code className="w-10 h-10 text-accent" />,
    title: 'Desarrollo Tecnológico',
    description: 'Software a medida y automatización de procesos (RPA + IA) para el monitoreo y control empresarial.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-headline">Soluciones de Alto Impacto</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors duration-300 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.15), transparent 70%)'
              }}></div>
              <CardHeader className="flex flex-col items-start gap-4 z-10 relative">
                {service.icon}
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="z-10 relative flex-grow flex flex-col">
                <p className="text-foreground/80 flex-grow">{service.description}</p>
                {service.link && (
                  <Link href={service.link} className="text-accent hover:underline mt-4 inline-flex items-center group/link">
                    {service.linkLabel} <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
