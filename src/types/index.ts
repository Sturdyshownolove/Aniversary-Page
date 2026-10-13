export interface Memory {
  id: string;
  date: string;
  title: string;
  location?: string;
  description: string;
  photos: string[];
  caption?: string;
  layoutType?: 'single-large' | 'editorial-duo' | 'cinematic-full' | 'scrapbook-trio';
  songSnippet?: string;
  note?: string;
}

export interface NoteItem {
  id: string;
  text: string;
  date?: string;
  rotationDegree?: number;
}

export interface SecretItem {
  id: string;
  triggerLabel: string;
  title: string;
  secretMessage: string;
  unlockedPhoto?: string;
}

export interface FutureItem {
  id: string;
  category: 'places' | 'activities' | 'photos';
  title: string;
  description?: string;
  completed?: boolean;
}

export interface LivePhotoItem {
  id: string;
  title?: string;
  src: string; // .mov veya .mp4 video yolu (Örn: "/images/live1.mov")
  poster?: string; // Görsel önizleme kapak resmi (Örn: "/images/live1.jpg")
  caption?: string;
}

export interface LivePhotosSectionData {
  title: string;
  subtitle: string;
  centerPhoto: string; // Ortadaki ana fotoğraf
  centerCaption?: string;
  livePhotos: LivePhotoItem[]; // Çevresindeki 7 adet canlı fotoğraf (.mov video)
}

export interface AnniversaryConfig {
  coupleNames: {
    partnerName: string;
    userName: string;
  };
  startDate: string; // ISO string e.g., "2023-09-18T00:00:00"
  anniversaryDateText: string;
  heroTagline: string;
  musicTrack?: {
    title: string;
    artist: string;
    src: string;
  };
  timeline: Memory[];
  memories: Memory[];
  livePhotosSection?: LivePhotosSectionData; // Bölüm 3 — Canlı Anılar & Live Photos
  unspokenNotes?: NoteItem[];
  favoriteMoments?: Memory[];
  secrets?: SecretItem[];
  futureBucketList: FutureItem[];
  finalMessage: {
    heading: string;
    subheading: string;
    letter?: string; // Uzun kişisel mektup / özel mesaj alanı
    footerDate: string;
    note: string;
  };
}
