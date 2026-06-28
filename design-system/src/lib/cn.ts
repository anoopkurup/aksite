import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the brand's custom font-size tokens so twMerge classifies e.g.
// `text-title` as a font-size (not a text-color) and stops clobbering
// `text-navy-900` / `text-white` that sit in the same className.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["hero", "display", "title", "body-lg", "body"] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
