'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { BookWithImage } from './book-card';

export function BookSummaryDialog({ book }: { book: BookWithImage }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground">
          تصفح الآن
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[95vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="font-headline">{book.title}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow">
          <iframe
            src={book.googleDriveLink}
            className="w-full h-full border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
