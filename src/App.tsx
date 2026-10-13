import React, { useState } from 'react';
import { anniversaryData } from './data/anniversaryData';
import { BackgroundGrain } from './components/BackgroundGrain';
import { BookContainer } from './components/BookContainer';
import { BookPages, BOOK_PAGE_TITLES } from './components/BookPages';
import { PhotoLightbox } from './components/PhotoLightbox';

export function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    caption?: string;
    title?: string;
    date?: string;
    location?: string;
  } | null>(null);

  const handleOpenPhoto = (
    url: string,
    caption?: string,
    title?: string,
    date?: string,
    location?: string
  ) => {
    setSelectedPhoto({ url, caption, title, date, location });
  };

  const handleTurnNext = () => {
    if (currentPage < BOOK_PAGE_TITLES.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="relative bg-[#141012] text-[#FAF7F2] min-h-screen overflow-hidden">
      {/* Background Texture Overlay */}
      <BackgroundGrain />

      {/* Main 3D Interactive Book Frame */}
      <BookContainer
        totalPages={BOOK_PAGE_TITLES.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageTitles={BOOK_PAGE_TITLES}
      >
        {(pageIndex) => (
          <BookPages
            pageIndex={pageIndex}
            onSelectPhoto={handleOpenPhoto}
            onTurnNext={handleTurnNext}
          />
        )}
      </BookContainer>

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        photoUrl={selectedPhoto?.url || null}
        caption={selectedPhoto?.caption}
        title={selectedPhoto?.title}
        date={selectedPhoto?.date}
        location={selectedPhoto?.location}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}

export default App;
