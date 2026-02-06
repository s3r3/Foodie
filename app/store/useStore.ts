import { create } from "zustand";

interface NavState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

interface WebState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  favorites: number[]; // Menyimpan ID resep yang di-like
  toggleFavorite: (id: number) => void;
  isSubscribed: boolean;
  subscribeEmail: (email: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export const useStore = create<WebState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  activeCategory: "All",
  setActiveCategory: (category) => set({ activeCategory: category }),
  favorites: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id],
    })),
  isSubscribed: false,
  subscribeEmail: (email) => {
    console.log(`Subscribing: ${email}`);
    set({ isSubscribed: true });
  },
}));
