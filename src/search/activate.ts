// noinspection SpellCheckingInspection

/*
    /search/activate.ts
    import: /search/components/main.ts
    from: /content_scripts/comment/loader.ts, /content_scripts/write/loader.ts
 */

async function activateSearch(arcaconPicker: Element): Promise<HTMLInputElement> {
    const titleArea: Element = arcaconPicker.querySelector(".title-area") ??
        await arrive((e) => e.className === "title-area", arcaconPicker);
    const mainArea: Element = arcaconPicker.querySelector(".main-area")!;
    const search: HTMLInputElement = arcaconPlus(mainArea);
    titleArea.insertBefore(search, titleArea.lastChild);
    return search;
}
