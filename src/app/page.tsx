import { Header } from '@/components/header';
import { BookCatalog } from '@/components/book-catalog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BookWithImage } from '@/components/book-card';
import type { Book } from '@/lib/books';
import { Footer } from '@/components/footer';

export default async function Home() {
  // NOTE: This is a placeholder for where you would fetch your books from a database.
  // This application is not connected to a database, so we are using a static list of books.
  const books: Book[] = [
  {
    "id": "1",
    "title": "كتاب الرياضيات للسنة الأولى ابتدائي",
    "author": "وزارة التربية الوطنية",
    "gradeLevel": "1",
    "subject": "رياضيات",
    "coverImageId": "placeholder-1",
    "googleDriveLink": "https://example.com/book1",
    "content": ""
  },
  {
    "id": "2",
    "title": "كتاب اللغة العربية للسنة الأولى ابتدائي",
    "author": "وزارة التربية الوطنية",
    "gradeLevel": "1",
    "subject": "لغة عربية",
    "coverImageId": "placeholder-2",
    "googleDriveLink": "https://example.com/book2",
    "content": ""
  }
];


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
