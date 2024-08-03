// noinspection SpellCheckingInspection

/*
    /content_scripts/write/autofocus.ts
    from: /content_scripts/write/loader.ts
 */

function autofocusWrite(arcaconButton: Element, search: HTMLInputElement) {
    search.focus();
    let active: boolean = true;
    (new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                if (arcaconButton.classList.contains("fr-btn-active-popup")) {
                    if (active) {
                        return;
                    }
                    active = true;
                    search.setAttribute("clear", "clear");
                    search.focus();
                    return;
                } else {
                    active = false;
                    return;
                }
            }
        }
    })).observe(arcaconButton, { attributes: true });
}
