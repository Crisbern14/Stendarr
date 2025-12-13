import { FraudForm } from './fraud-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FraudDetectionPage() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Herramienta de Detección de Fraude con IA</h1>
          <p className="mt-4 text-foreground/80 md:text-lg">
            Introduce los datos del cliente para obtener una evaluación de riesgo de fraude. Nuestra IA analizará la información y te proporcionará un puntaje, nivel de riesgo y una explicación detallada.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardHeader>
            <CardTitle>Análisis de Fraude</CardTitle>
            <CardDescription>Completa el formulario para iniciar la evaluación.</CardDescription>
          </CardHeader>
          <CardContent>
            <FraudForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
