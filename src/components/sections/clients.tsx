import { Briefcase, Building, Rocket, TrendingUp } from 'lucide-react';

const clientSegments = [
    { icon: <Briefcase className="w-8 h-8 text-accent" />, name: "Fintechs & Neobancos", description: "Seguridad y cumplimiento en la frontera digital." },
    { icon: <Rocket className="w-8 h-8 text-accent" />, name: "Startups Tecnológicas", description: "Escalabilidad protegida por expertos." },
    { icon: <TrendingUp className="w-8 h-8 text-accent" />, name: "Pymes en Crecimiento", description: "Profesionalización del riesgo y control." },
    { icon: <Building className="w-8 h-8 text-accent" />, name: "Entidades Financieras", description: "Auditoría forense y analítica de datos de alto nivel." },
];

export default function Clients() {
    return (
        <section id="clients" className="w-full py-16 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-headline">Aliados de quienes construyen el mañana</h2>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {clientSegments.map((segment) => (
                        <div key={segment.name} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border intersect:motion-preset-slide-right motion-duration-1000 intersect-once">
                            {segment.icon}
                            <div>
                                <h3 className="text-xl font-bold text-white">{segment.name}</h3>
                                <p className="text-foreground/80">{segment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
