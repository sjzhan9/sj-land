const CATEGORY_ICONS = {
  "career update": "users",
  health: "activity",
  "investment update": "bar-chart",
  learning: "reading",
  personal: "star",
  project: "projects",
};

export function getUpdateFallbackIcon(tags = [], title = "") {
  const category = tags[0]?.name?.toLowerCase();
  const normalizedTitle = title.toLowerCase();

  if (
    category === "health" ||
    ["cycling", "running", "training", "fitness", "sport"].some((term) =>
      normalizedTitle.includes(term)
    )
  ) {
    return "activity";
  }

  return CATEGORY_ICONS[category] || "recents";
}
