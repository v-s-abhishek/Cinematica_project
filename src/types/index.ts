export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  director: string;
  rating: number;
  genre: string[];
  description: string;
  runtime: string;
  awards: Award[];
  cast: string[];
  trailer: string;
}

export interface Award {
  name: string;
  year: number;
  category: string;
}

export interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
}

export interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}