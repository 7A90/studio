'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { handleGenerateSummary } from '@/app/actions';
import { Loader2, BookOpenCheck, ExternalLink, Sparkles } from 'lucide-react';
import type { BookWithImage } from './book-card';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

export function BookSummaryDialog({ book }: { book: BookWithImage }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onGenerateSummary = async () => {
    setIsLoading(true);
    setSummary('');
    const result = await handleGenerateSummary(book.title, book.content);
    setIsLoading(false);

    if (result.summary) {
      setSummary(result.summary);
    } else if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error Generating Summary',
        description: result.error,
      });
    }
  };

  return (
    <Dialog onOpenChange={(open) => !open && (setSummary(''), setIsLoading(false))}>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground">
          <BookOpenCheck className="mr-2 h-4 w-4" /> تصفح الآن
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">{book.title}</DialogTitle>
          <DialogDescription>by {book.author}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <Button
              onClick={onGenerateSummary}
              disabled={isLoading}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate AI Summary
            </Button>

            {summary && (
              <ScrollArea className="h-40 rounded-md border p-4">
                <h4 className="font-semibold mb-2">Summary:</h4>
                <p className="text-sm text-muted-foreground">{summary}</p>
              </ScrollArea>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button asChild className="w-full">
            <a href={book.googleDriveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Open in Google Drive
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
