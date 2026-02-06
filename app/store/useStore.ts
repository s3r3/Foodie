import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

interface WebState {
  isShareModalOpen: boolean;
  setShareModalOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isSubscribed: boolean;
  subscribeEmail: (email: string) => void;
  // allow both numeric and string keys for checked ingredients
  checkedIngredients: (string | number)[];
  checkedSteps: string[];
  toggleStep: (recipeId: string, stepId: number) => void;
  // toggle can accept either a single unique key or recipeId + ingredientKey
  toggleIngredient: (
    recipeIdOrKey: string | number,
    ingredientKey?: string,
  ) => void;
}

export const useNavStore = create<NavState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

export const useStore = create<WebState>()(
  persist(
    (set) => ({
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
      activeCategory: "All",
      setActiveCategory: (category) => set({ activeCategory: category }),

      isShareModalOpen: false,
      setShareModalOpen: (open) => set({ isShareModalOpen: open }),

      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id)
            : [...state.favorites, id],
        })),
      checkedSteps: [],
      toggleStep: (recipeId, stepId) =>
        set((state) => {
          const stepKey = `${recipeId}-step-${stepId}`;
          return {
            checkedSteps: state.checkedSteps.includes(stepKey)
              ? state.checkedSteps.filter((key) => key !== stepKey)
              : [...state.checkedSteps, stepKey],
          };
        }),

      isSubscribed: false,
      subscribeEmail: (email) => {
        console.log(`Subscribing: ${email}`);
        set({ isSubscribed: true });
      },

      checkedIngredients: [],
      // Implementasi toggleIngredient: accepts either a single unique key (string|number)
      // or a recipeId + ingredientKey pair which will be combined into a unique string.
      toggleIngredient: (recipeIdOrKey, ingredientKey) =>
        set((state) => {
          const uniqueKey: string | number =
            typeof ingredientKey !== "undefined"
              ? `${recipeIdOrKey}-${ingredientKey}`
              : recipeIdOrKey;
          const isExist = state.checkedIngredients.includes(uniqueKey);

          return {
            checkedIngredients: isExist
              ? state.checkedIngredients.filter((key) => key !== uniqueKey)
              : [...state.checkedIngredients, uniqueKey],
          };
        }),
    }),
    {
      name: "foodieland-storage", // Nama key di localStorage
      partialize: (state) => ({
        favorites: state.favorites,
        checkedIngredients: state.checkedIngredients,
      }), // Hanya simpan favorites & ingredients, searchQuery tidak perlu di-persist
    },
  ),
);
