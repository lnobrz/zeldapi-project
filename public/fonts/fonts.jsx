import { Kadwa, Bitter, Georgia } from "@next/font/google";
import localFont from "@next/font/local";

export const bitter = Bitter({
  subsets: ["latin"],
});

export const georgia = Bitter({
  subsets: ["latin"],
});

export const hyliaSerif = localFont({
  src: "./HyliaSerifBeta-Regular.otf",
});

export const kadwa = Kadwa({
  subsets: ["latin"],
  weight: ["400", "700"],
});
