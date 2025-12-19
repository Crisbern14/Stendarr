import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background" id="home">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white font-headline motion-preset-slide-up motion-duration-1000">
              El futuro de la confianza empresarial es digital, híbrido y basado en datos.
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl motion-preset-fade motion-delay-500 motion-duration-1000">
              En Stendarr, fusionamos auditoría avanzada, inteligencia artificial y derecho para proteger y potenciar organizaciones en entornos altamente regulados.
            </p>
          </div>
          <div className="space-x-4 pt-6 motion-preset-pop motion-delay-1000">
            <Button asChild size="lg">
              <Link href="#contact">Agendar Consultoría Estratégica</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#services">Explorar Servicios <MoveRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
