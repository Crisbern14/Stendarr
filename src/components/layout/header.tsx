import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const StendarrLogo = () => (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold text-white">STENDARR</span>
    </Link>
  );


export default function Header() {
  const navItems = [
    { name: 'Inicio', href: '/#home' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Equipo', href: '/#team' },
    { name: 'Clientes', href: '/#clients' },
    { name: 'Contacto', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <StendarrLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild className="hidden md:flex">
             <Link href="/#contact">Agendar Consultoría</Link>
           </Button>
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium mt-16">
                <StendarrLogo />
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {item.name}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
