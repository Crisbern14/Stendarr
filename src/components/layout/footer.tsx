import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
                <p>Stendarr Consulting Group © 2025 | Bogotá, Colombia</p>
                {/* Social media links can be added here if needed
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                    <Link href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
                    <Link href="#" className="hover:text-foreground"><Github className="h-5 w-5" /></Link>
                </div>
                */}
            </div>
        </footer>
    );
}
