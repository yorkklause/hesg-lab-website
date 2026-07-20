const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

const newsList = document.querySelector("[data-news-list]");

if (newsList) {
  Array.from(newsList.querySelectorAll(".news-item"))
    .map((item, index) => {
      const dateText = item.querySelector("time")?.getAttribute("datetime") || "";
      const timestamp = Date.parse(dateText);
      return {
        item,
        index,
        pinned: item.dataset.pinned === "true",
        timestamp: Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp,
      };
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.timestamp - a.timestamp || a.index - b.index)
    .forEach(({ item }) => newsList.appendChild(item));
}

document.querySelectorAll("[data-citation-toggle]").forEach((button) => {
  const citation = button.closest("[data-expandable-citation]");
  const shortCitation = citation?.querySelector("[data-citation-short]");
  const fullCitation = citation?.querySelector("[data-citation-full]");

  if (!shortCitation || !fullCitation) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    shortCitation.hidden = !isExpanded;
    fullCitation.hidden = isExpanded;
    button.textContent = isExpanded ? "Show more" : "Show less";
  });
});
