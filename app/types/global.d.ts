declare global {
  interface Window {
    readAloud: (audioElement: HTMLAudioElement, playerElement: HTMLElement) => void;
    readAloudInit: (audioElement: HTMLAudioElement, playerElement: HTMLElement) => void;
  }
}

// 这个 export {} 语句不会导出任何内容，但它会使得 TypeScript 把这个文件视为模块，从而正确地处理 declare global 块
export {};
