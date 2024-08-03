// noinspection SpellCheckingInspection

/*
    /content_scripts/comment/autofocus.ts
    from: /content_scripts/comment/loader.ts
 */

function autofocusComment(replyForm: Element, search: HTMLInputElement) {
    search.focus();
    (new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "data-state") {
                if (replyForm.getAttribute("data-state") === "arcacon") {
                    search.setAttribute("clear", "clear");
                    search.focus();
                    return;
                }
            }
        }
    })).observe(replyForm, { attributes: true });
}
