// Para tipado que nos ayude en renderer
//
// export interface IElectronAPI {
//   loadPreferences: () => Promise<void>,
// }

// declare global {
//   interface Window {
//     electronAPI: IElectronAPI
//   }
// }

//Para que el renderer(App.tsx) pueda acceder a las variables de preload.ts
export {};

declare global {
  interface Window {
    // Variables expuestas por preload.ts que es un String
    myAPI: {
      saludo: string;
    };
    // Funcion expuesta por preload.ts que retorna un String
    myAAPI: {
      saluda: () => string;
    };
  }
}
