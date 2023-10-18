// toggles both, keeping one inactive and one active
export function toggleReadStatus(bookEntry) {
    bookEntry.classList.toggle('is-read');
    bookEntry.classList.toggle('is-unread');
}