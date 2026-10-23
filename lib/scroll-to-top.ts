// Fired when a logo sends the visitor back to the top, so the header can select Home right away
export const SCROLL_TO_TOP_EVENT = "landing:scroll-to-top"

// Scrolls the landing page to the top and drops any #section from the URL.
// The scroll follows the CSS scroll-behavior, so visitors who prefer reduced motion jump instantly.
export function scrollToTop() {
  if (window.location.hash) {
    window.history.pushState(null, "", window.location.pathname + window.location.search)
  }
  window.dispatchEvent(new Event(SCROLL_TO_TOP_EVENT))
  window.scrollTo({ top: 0 })
}
