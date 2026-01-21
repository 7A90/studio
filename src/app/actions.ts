'use server';

import { generateBookSummary } from '@/ai/flows/generate-book-summary';

export async function handleGenerateSummary(title: string, content: string): Promise<{ summary?: string; error?: string }> {
  try {
    if (!content.trim()) {
        return { summary: "This book's content is not available for summary." };
    }
    const result = await generateBookSummary({ bookTitle: title, bookContent: content });
    return { summary: result.summary };
  } catch (e) {
    console.error('Failed to generate summary:', e);
    return { error: 'Could not generate summary at this time. Please try again later.' };
  }
}
