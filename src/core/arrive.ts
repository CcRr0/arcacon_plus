// noinspection SpellCheckingInspection

/*
    /core/arrive.ts
    from: *
 */

async function arrive(condition: (element: Element) => boolean, from: Node = document): Promise<Element> {
    return new Promise((resolve) => {
        let found: boolean = false;
        (new MutationObserver((mutations, observer) => {
            for (const mutation of mutations) {
                if (mutation.type === "childList") {
                    for (const node of mutation.addedNodes) {
                        if (!found && node.nodeType === Node.ELEMENT_NODE && condition(<Element>node)) {
                            observer.disconnect();
                            found = true;
                            resolve(<Element>node);
                            break;
                        }
                    }
                }
                if (found) {
                    break;
                }
            }
        })).observe(from, { childList: true, subtree: true });
    });
}
