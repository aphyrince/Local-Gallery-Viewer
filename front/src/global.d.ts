interface Folder {
    name: string;
    path: string;
}

declare global {
    interface Window {
        api: {
            getImageDir: (dirPath: string) => Promise<string[]>;
            loadFolderList: () => Promise<Folder[]>;
            saveFolderList: (data: Folder[]) => Promise<boolean>;
        };
    }
}
