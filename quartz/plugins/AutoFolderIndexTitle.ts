import type { QuartzTransformerPlugin } from "./types"

// Auto-sets a title for folder index pages (e.g., /campaign-1/index.md -> "campaign 1")
// ONLY runs if frontmatter.title is missing.
export default function AutoFolderIndexTitle(): QuartzTransformerPlugin {
  return {
    name: "AutoFolderIndexTitle",
    async transform(_ctx, page) {
      const slug = page.fileData.slug // e.g., "campaign-1/index"
      const parts = slug.split("/")
      const fileName = parts.at(-1)
      const folderName = parts.at(-2)

      if (fileName === "index" && folderName && !page.frontmatter?.title) {
        // prettify: kebab -> spaced words, Capitalize Each Word
        const pretty = folderName
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (m) => m.toUpperCase())

        page.frontmatter = {
          ...page.frontmatter,
          title: pretty,
        }
      }
      return page
    },
  }
}
