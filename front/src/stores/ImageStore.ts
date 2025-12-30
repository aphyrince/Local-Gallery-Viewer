import { create } from "zustand";

interface ImageState {
    list: string[];
    setList: (newList: string[]) => void;
}

const useImageStore = create<ImageState>()((set) => ({
    list: [],
    setList: (newList: string[]) => {
        set(() => ({ list: newList }));
    },
}));

export default useImageStore;
