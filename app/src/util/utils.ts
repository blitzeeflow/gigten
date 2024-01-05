export type CategoryId = "article" | "website" | "script-writing";
export const getCategoryNameById = (id: CategoryId) => {
  switch (id) {
    case "article":
      return "Article & Blog Posts";
    case "website":
      return "Website Content";
    case "script-writing":
      return "Script Writing";
  }
};
