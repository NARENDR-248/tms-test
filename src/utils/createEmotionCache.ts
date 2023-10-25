import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
const isBrowser = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]');
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  const ltrCache = createCache({ key: "mui-style", insertionPoint });
  const rtlCache = createCache({
    key: "mui-style-rtl",
    stylisPlugins: [rtlPlugin],
  });

  return { ltrCache, rtlCache };
}
