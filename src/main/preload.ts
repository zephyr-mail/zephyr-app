import { contextBridge, ipcRenderer } from 'electron';

// El contentido de preload.ts se ejecuta antes de que el contenido web empiece a cargar.
// Preload carga scripts dentro del contexto del renderizado por lo que tiene los
// privilegios de utilizar APIs de electron, node, etc. además de poder comunicarse con el renderer.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string | undefined) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text ?? '';
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

//API que accedera al renderer, la hemos creado para que el renderer pueda acceder a una string de saludo.
contextBridge.exposeInMainWorld('myAPI', {
  saludo: 'Hola desde preload, soy un string',
});

//API que accedera al renderer, la hemos creado para que el renderer pueda acceder a una funcion de saludo.
contextBridge.exposeInMainWorld('myAAPI', {
  saluda: () => 'Hola desde preload, soy una función',
});

// ¡NO utilizar ContextIsolation! dejarlo por defecto.
// Asi se expone una variable/función de forma segura al renderer.
contextBridge.exposeInMainWorld('electronAPI', {
  generateMail: () => {
    ipcRenderer.invoke('ia:generateMail');
  },
});
