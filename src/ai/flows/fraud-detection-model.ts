'use server';

/**
 * @fileOverview AI model for predicting fraud using client data.
 *
 * - fraudDetectionModel - A function that predicts fraud using client data.
 * - FraudDetectionModelInput - The input type for the fraudDetectionModel function.
 * - FraudDetectionModelOutput - The return type for the fraudDetectionModel function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FraudDetectionModelInputSchema = z.object({
  clientData: z.string().describe('Client data for fraud detection.'),
});
export type FraudDetectionModelInput = z.infer<typeof FraudDetectionModelInputSchema>;

const FraudDetectionModelOutputSchema = z.object({
  fraudScore: z.number().describe('The predicted fraud score based on the client data.'),
  riskLevel: z.string().describe('The risk level associated with the fraud score (e.g., low, medium, high).'),
  explanation: z.string().describe('Explanation of factors contributing to the fraud score.'),
});
export type FraudDetectionModelOutput = z.infer<typeof FraudDetectionModelOutputSchema>;

export async function fraudDetectionModel(input: FraudDetectionModelInput): Promise<FraudDetectionModelOutput> {
  return fraudDetectionModelFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fraudDetectionModelPrompt',
  input: {schema: FraudDetectionModelInputSchema},
  output: {schema: FraudDetectionModelOutputSchema},
  prompt: `You are an AI consultant specializing in fraud detection.
  Based on the client data provided, predict the fraud score, risk level, and provide an explanation.

  Client Data: {{{clientData}}}
  \n`,
});

const fraudDetectionModelFlow = ai.defineFlow(
  {
    name: 'fraudDetectionModelFlow',
    inputSchema: FraudDetectionModelInputSchema,
    outputSchema: FraudDetectionModelOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
