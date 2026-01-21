'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a book summary.
 *
 * - generateBookSummary - A function that generates a book summary.
 * - GenerateBookSummaryInput - The input type for the generateBookSummary function.
 * - GenerateBookSummaryOutput - The return type for the generateBookSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBookSummaryInputSchema = z.object({
  bookTitle: z.string().describe('The title of the book to summarize.'),
  bookContent: z.string().describe('The content of the book to summarize.'),
});
export type GenerateBookSummaryInput = z.infer<typeof GenerateBookSummaryInputSchema>;

const GenerateBookSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the book content.'),
});
export type GenerateBookSummaryOutput = z.infer<typeof GenerateBookSummaryOutputSchema>;

export async function generateBookSummary(input: GenerateBookSummaryInput): Promise<GenerateBookSummaryOutput> {
  return generateBookSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBookSummaryPrompt',
  input: {schema: GenerateBookSummaryInputSchema},
  output: {schema: GenerateBookSummaryOutputSchema},
  prompt: `You are an expert summarizer of children's books.

  Please provide a concise summary of the following book content:

  Book Title: {{{bookTitle}}}
  Book Content: {{{bookContent}}}
  `,
});

const generateBookSummaryFlow = ai.defineFlow(
  {
    name: 'generateBookSummaryFlow',
    inputSchema: GenerateBookSummaryInputSchema,
    outputSchema: GenerateBookSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
