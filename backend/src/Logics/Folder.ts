import { app } from "electron";
import fs from "fs";
import path from "path";
import { Folder } from "./types";

const folderListPath = path.join(app.getPath("userData"), "folderList.json");

export async function getImageDir(dirPath: string): Promise<Folder[]> {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

    return entries
        .filter((e) => e.isFile())
        .map((e) => ({ name: e.name, path: path.join(dirPath, e.name) }))
        .filter((f) => /\.(jpg|jpeg|png|gif|webp)$/i.test(f.name));
}

export async function loadFolderList(): Promise<Folder[]> {
    const data = await fs.promises
        .readFile(folderListPath, "utf8")
        .then((json) => JSON.parse(json))
        .catch((err) => {
            console.error("Load FolderList Error:", err);
        });

    return data;
}

export async function saveFolderList(data: Folder[]) {
    let result = false;
    await fs.promises
        .writeFile(folderListPath, JSON.stringify(data, null, 2))
        .then(() => (result = true));
    return result;
}
