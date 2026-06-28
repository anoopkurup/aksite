import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Register the site's custom font-size tokens (tailwind.config.ts fontSize)
// so twMerge classifies e.g. `text-title` as a font-size, not a text-color —
// otherwise it drops a sibling `text-navy-900`/`text-white` in the same
// className and text renders at the wrong colour/size.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "hero-mobile",
            "display",
            "display-sm",
            "title",
            "body-lg",
            "body",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
