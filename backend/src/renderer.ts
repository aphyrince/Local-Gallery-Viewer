/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";
import { Folder } from "./Logics/types";

const folderList: Folder[] = [
    { name: "배경화면", path: `C:\\Users\\dkswj\\Desktop\\이것저것\\배경화면` },
    { name: "스크린샷", path: `C:\\Users\\dkswj\\Pictures\\Screenshots` },
    { name: "내 사진들", path: `C:\\Users\\dkswj\\Desktop\\이것저것\\사진` },
];

console.log(
    '👋 This message is being logged by "renderer.ts", included via Vite'
);

// console.log(window.api.getImageDir());
window.api
    .saveFolderList(folderList)
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));

window.api
    .loadFolderList()
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));

window.api
    .getImageDir(`C:\\Users\\dkswj\\Desktop\\이것저것\\배경화면`)
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));
