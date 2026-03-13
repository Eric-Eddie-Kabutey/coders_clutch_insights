declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateInitialized: boolean;
  }
}

export {};