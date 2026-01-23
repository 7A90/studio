import { Header } from '@/components/header';
import { BookCatalog } from '@/components/book-catalog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BookWithImage } from '@/components/book-card';
import type { Book } from '@/lib/books';
import { Footer } from '@/components/footer';
import { books as allBooks } from '@/lib/all-books';

export default async function Home() {
  const books: Book[] = allBooks;

  const booksWithImages: BookWithImage[] = (books as Book[]).map(book => {
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
              مرحبا بك على مكتبتك المحمولة
            </h2>
            <p className="text-muted-foreground text-center mt-2">
              الق نظرة على عناوين الكتب المدرسية الرسمية
            </p>
          </div>
          <BookCatalog books={booksWithImages} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
