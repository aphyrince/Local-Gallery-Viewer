import { contextBridge, ipcRenderer } from "electron";
import { Folder } from "./Logics/types";

contextBridge.exposeInMainWorld("api", {
    getImageDir: (dirPath: string) => {
        console.log("PRELOAD getImageDir() Called.");
        return ipcRenderer.invoke("get-image-dir", dirPath);
    },

    loadFolderList: () => {
        console.log("PRELOAD loadFolderList() Called.");
        return ipcRenderer.invoke("load-folder-list");
    },

    saveFolderList: (data: Folder[]) => {
        console.log("PRELOAD saveFolderList() Called.");
        return ipcRenderer.invoke("save-folder-list", data);
    },
});
