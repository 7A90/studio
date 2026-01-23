'use server';

import { generateBookSummary } from '@/ai/flows/generate-book-summary';

export async function handleGenerateSummary(title: string, content: string): Promise<{ summary?: string; error?: string }> {
  try {
    if (!content.trim()) {
        return { summary: "محتوى هذا الكتاب غير متاح للتلخيص." };
    }
    const result = await generateBookSummary({ bookTitle: title, bookContent: content });
    return { summary: result.summary };
  } catch (e) {
    console.error('Failed to generate summary:', e);
    return { error: 'تعذر إنشاء الملخص في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقًا.' };
  }
}
