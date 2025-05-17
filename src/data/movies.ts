import { Movie } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://images.pexels.com/photos/3692639/pexels-photo-3692639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: 2010,
    director: "Christopher Nolan",
    rating: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runtime: "2h 28min",
    awards: [
      { name: "Academy Award", year: 2011, category: "Best Visual Effects" },
      { name: "Academy Award", year: 2011, category: "Best Cinematography" },
      { name: "BAFTA Award", year: 2011, category: "Best Production Design" }
    ],
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.3,
    genre: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    runtime: "2h 22min",
    awards: [
      { name: "Academy Award Nomination", year: 1995, category: "Best Picture" },
      { name: "Golden Globe Nomination", year: 1995, category: "Best Actor" }
    ],
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: 2008,
    director: "Christopher Nolan",
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    runtime: "2h 32min",
    awards: [
      { name: "Academy Award", year: 2009, category: "Best Supporting Actor" },
      { name: "Academy Award", year: 2009, category: "Best Sound Editing" }
    ],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: 1994,
    director: "Quentin Tarantino",
    rating: 8.9,
    genre: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    runtime: "2h 34min",
    awards: [
      { name: "Academy Award", year: 1995, category: "Best Original Screenplay" },
      { name: "Palme d'Or", year: 1994, category: "Cannes Film Festival" }
    ],
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    id: 5,
    title: "The Godfather",
    posterUrl: "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    year: 1972,
    director: "Francis Ford Coppola",
    rating: 9.2,
    genre: ["Crime", "Drama"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    runtime: "2h 55min",
    awards: [
      { name: "Academy Award", year: 1973, category: "Best Picture" },
      { name: "Academy Award", year: 1973, category: "Best Actor" },
      { name: "Academy Award", year: 1973, category: "Best Adapted Screenplay" }
    ],
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
  }
];