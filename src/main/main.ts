import { app, BrowserWindow } from "electron";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import "./ipc/ai.handler.js";

// Buscar la ruta del archivo actual y el directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Para permitir que acceda a la API expuesta en preload.ts
      nodeIntegration: true,
      //Para hacer que pueda acceder a las APIs de Electron y Node.js
      contextIsolation: true,
      // contextIsolation: false, <- Expone al renderer todas la variables de preload.ts
      // preload: join(__dirname, "preload.js"), <- Es para que busque el archivo preload.js y asi encuentre la API expuesta
      preload: join(__dirname, "preload.js"),
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile("dist/index.html");
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
