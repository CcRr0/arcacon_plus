// noinspection SpellCheckingInspection

/*
    /content_scripts/comment/loader.ts
    import: /search/activate.ts, /content_scripts/comment/autofocus.ts
 */

document.addEventListener("DOMContentLoaded", () => {
    (async () => {
        const search = await activateSearch(document.querySelector(ARCACON_PICKER)!);
        autofocusComment(document.querySelector(".reply-form")!, search);
    })();
    document.querySelector(".article-comment")!.addEventListener("click", async (e) => {
        if (e.target === null) {
            return;
        }
        if ((<Element>e.target).className === "reply-link" || (<Element>e.target).className === "icon ion-reply") {
            const commentWrapper: Element = (<Element>e.target).closest(".comment-wrapper")!;
            if (commentWrapper.querySelector(`:scope > .reply-form ${ARCACON_PICKER}`) !== null) {
                return;
            }
            const replyForm: Element = await arrive(
                (e) => e.className === "reply-form" && e.querySelector(ARCACON_PICKER) !== null,
                commentWrapper);
            const search: HTMLInputElement = await activateSearch(commentWrapper.querySelector(ARCACON_PICKER)!);
            autofocusComment(replyForm, search);
        }
    });
});
