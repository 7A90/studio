import { Header } from '@/components/header';
import { BookCatalog } from '@/components/book-catalog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BookWithImage } from '@/components/book-card';
import type { Book } from '@/lib/books';

export default async function Home() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.trim() || !supabaseAnonKey.trim()) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <div className="text-center py-16 px-4 bg-card rounded-lg border border-dashed border-destructive">
            <h3 className="text-xl font-semibold text-destructive">Supabase Configuration Missing</h3>
            <p className="text-muted-foreground mt-2">
              Your Supabase URL and anonymous key are not set up.
            </p>
            <p className="text-muted-foreground mt-2">
              Please add the following to your <code className="font-mono p-1 bg-muted rounded">.env</code> file:
            </p>
            <pre className="mt-4 p-4 bg-muted rounded-md text-left overflow-x-auto">
              <code className="text-sm">
                {`NEXT_PUBLIC_SUPABASE_URL=your_project_url\nNEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key`}
              </code>
            </pre>
            <p className="text-sm text-muted-foreground mt-4">
              You can find these values in your Supabase project settings under Settings &gt; API.
            </p>
          </div>
        </main>
        <footer className="py-6 md:px-8 md:py-0 bg-card border-t mt-auto">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
              Built by 7490. &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    );
  }

  const { supabase } = await import('@/lib/supabase/client');
  const { data: books, error } = await supabase.from('books').select('*');

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          <div className="text-center py-16 px-4 bg-card rounded-lg border border-dashed border-destructive">
            <h3 className="text-xl font-semibold text-destructive">Failed to load books</h3>
            <p className="text-muted-foreground mt-2">
              Could not fetch data from the database. Please check your Supabase configuration.
            </p>
            <p className="text-sm text-muted-foreground mt-2">({error.message})</p>
          </div>
        </main>
        <footer className="py-6 md:px-8 md:py-0 bg-card border-t mt-auto">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
              Built by 7490. &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    );
  }

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
      <footer className="py-6 md:px-8 md:py-0 bg-card border-t mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built by 7490. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
