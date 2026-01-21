import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookSummaryDialog } from './book-summary-dialog';
import type { Book } from '@/lib/books';

export type BookWithImage = Book & { coverImageUrl: string, imageHint: string };

export function BookCard({ book }: { book: BookWithImage }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[2/3] w-full">
          <Image
            src={book.coverImageUrl}
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={book.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="font-headline text-lg leading-tight truncate" title={book.title}>
          {book.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline">المستوى {book.gradeLevel}</Badge>
          <Badge variant="secondary">{book.subject}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <BookSummaryDialog book={book} />
      </CardFooter>
    </Card>
  );
}
