import { Header } from '@/components/header';
import { BookCatalog } from '@/components/book-catalog';
import { books } from '@/lib/books';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BookWithImage } from '@/components/book-card';

export default function Home() {
  const booksWithImages: BookWithImage[] = books.map(book => {
    const placeholder = PlaceHolderImages.find(p => p.id === book.coverImageId);
    return {
      ...book,
      coverImageUrl: placeholder?.imageUrl ?? 'https://picsum.photos/seed/default/400/600',
      imageHint: placeholder?.imageHint ?? 'book cover',
    };
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-headline text-center">
              Welcome to the School Library
            </h2>
            <p className="text-muted-foreground text-center mt-2">
              Explore our collection of books for young readers.
            </p>
          </div>
          <BookCatalog books={booksWithImages} />
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0 bg-card border-t mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built by PrimaryReads. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
