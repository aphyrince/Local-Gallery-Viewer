import { create } from "zustand";

interface FolderState {
    list: Folder[];
    setList: (newList: Folder[]) => void;
}

const useFolderStore = create<FolderState>()((set) => ({
    list: [],
    setList: (newList: Folder[]) => {
        set(() => ({ list: newList }));
    },
}));

export default useFolderStore;
