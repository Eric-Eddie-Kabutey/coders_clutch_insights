export { };

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google: {
      translate: {
        TranslateElement: {
          new(options: any, element: string): any;
          InlineLayout: {
            SIMPLE: any;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
    Tawk_API?: {
      showWidget: () => void;
      hideWidget: () => void;
      maximize: () => void;
      minimize: () => void;
      endChat?: () => void;
      onLoad?: () => void;
      onChatMinimized?: () => void;
      onChatEnded?: () => void;
    };
  }
}