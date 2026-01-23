
'use client';

import { useState } from 'react';
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
      <DialogContent className="max-w-3xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline">{book.title}</DialogTitle>
        </DialogHeader>
        <div className="h-full">
            <iframe src={book.googleDriveLink} className="w-full h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
