'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { fraudDetectionModel, type FraudDetectionModelOutput } from '@/ai/flows/fraud-detection-model';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  clientData: z.string().min(50, { message: 'Por favor, proporciona al menos 50 caracteres de datos.' }),
});

export function FraudForm() {
  const [result, setResult] = useState<FraudDetectionModelOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientData: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const output = await fraudDetectionModel(values);
      setResult(output);
    } catch (error) {
      console.error('Error running fraud detection model:', error);
      toast({
        title: 'Error de Análisis',
        description: 'No se pudo completar la evaluación. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
        case 'low':
        case 'bajo':
            return 'text-chart-2';
        case 'medium':
        case 'medio':
            return 'text-chart-3';
        case 'high':
        case 'alto':
            return 'text-chart-5';
        default:
            return 'text-muted-foreground';
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="clientData"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Datos del Cliente</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe la transacción, comportamiento del cliente, historial, etc. (e.g., 'Nuevo cliente realiza una compra de alto valor ($5000) de un producto electrónico con una tarjeta de crédito internacional desde una IP de alto riesgo.')"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analizando...
              </>
            ) : (
                <>
                <Zap className="mr-2 h-4 w-4" />
                Evaluar Riesgo
                </>
            )}
          </Button>
        </form>
      </Form>

      {isLoading && (
         <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-accent" />
            <p className="mt-2 text-foreground/80">La IA está procesando los datos...</p>
         </div>
      )}

      {result && (
        <Card className="mt-8 bg-background border-border">
          <CardHeader>
            <CardTitle>Resultados del Análisis de Fraude</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-foreground/80">Puntaje de Fraude</h4>
                    <p className="text-4xl font-bold text-accent">{result.fraudScore.toFixed(2)}</p>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-foreground/80">Nivel de Riesgo</h4>
                    <p className={`text-4xl font-bold ${getRiskColor(result.riskLevel)}`}>{result.riskLevel}</p>
                </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground/80">Explicación</h4>
              <p className="mt-1 text-foreground/90 bg-card p-4 rounded-lg border">{result.explanation}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
