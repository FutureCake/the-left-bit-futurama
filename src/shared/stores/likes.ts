import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type LikesStore = {
    ids: number[];
    addId: (id: number) => void;
    removeId: (id: number) => void;
    clearIds: () => void;
};

export const useLikesStore = create<LikesStore>()(
    persist(
        immer(
            (set) => ({
                ids: [],
                addId: (id) => set((state) => {

                    if (state.ids.includes(id)) return

                    state.ids.push(id);

                }),
                removeId: (id) => set((state) => {
                    state.ids = state.ids.filter(i => i !== id);
                }),
                clearIds: () => set((state) => {
                    state.ids = [];
                })
            })
        ),
        {
            name: "likes-store"
        }
    )
);