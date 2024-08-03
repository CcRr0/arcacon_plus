// noinspection SpellCheckingInspection

/*
    /search/components/main.ts
    import: /search/components/main.css
    from: /search/activate.ts
 */

function arcaconPlus(mainArea: Element): HTMLInputElement {
    const el: HTMLInputElement = document.createElement("input");
    el.className = ARCACON_PLUS;
    const getContentRecent = (): HTMLElement => mainArea.querySelector(":scope > .wrap > .content > .package-wrap:first-child")!;
    const getSideBarRecent = (): HTMLElement => mainArea.querySelector(":scope > .wrap > .sidebar > .package-item:first-child")!;
    const getContentItems = (): NodeListOf<HTMLElement> => mainArea.querySelectorAll(":scope > .wrap > .content > .package-wrap:not(:first-child)")!;
    const getSideBarItems = (): NodeListOf<HTMLElement> => mainArea.querySelectorAll(":scope > .wrap > .sidebar > .package-item:not(:first-child)")!;
    el.oninput = () => {
        const query: string = trimAll(el.value);
        if (query.length > 0) {
            getContentRecent().style.display = "none";
            getSideBarRecent().style.display = "none";
        } else {
            getContentRecent().style.display = "";
            getSideBarRecent().style.display = "";
        }
        getContentItems().forEach((item) => {
            if (trimAll(item.querySelector(".package-title")!.textContent!).includes(query)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
        getSideBarItems().forEach((item) => {
            if (trimAll(item.getAttribute("data-package-name")!).includes(query)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    };
    (new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === "attributes" && mutation.attributeName === "clear") {
                if (el.getAttribute("clear") !== null) {
                    el.value = "";
                    getContentRecent().style.display = "";
                    getSideBarRecent().style.display = "";
                    getContentItems().forEach((item) => {
                        item.style.display = "";
                    });
                    getSideBarItems().forEach((item) => {
                        item.style.display = "";
                    });
                    el.removeAttribute("clear");
                    return;
                }
            }
        }
    })).observe(el, { attributes: true });
    return el;
}

function trimAll(str: string): string {
    return str.replace(/\s+/g, "");
}
