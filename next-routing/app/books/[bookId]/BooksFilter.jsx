'use client';

import { useSearchParams } from 'next/navigation';

export default function BooksFilter() {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const author = searchParams.get('author');

  return (
    <div>
      <h1>Books</h1>
      {genre && <p>Filtering by genre: <strong>{genre}</strong></p>}
      {author && <p>Filtering by author: <strong>{author}</strong></p>}
    </div>
  );
}
