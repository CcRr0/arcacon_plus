// noinspection SpellCheckingInspection

/*
    /content_scripts/write/loader.ts
    import: /search/activate.ts, /content_scripts/write/autofocus.ts
 */

(async () => {
    const toolBar: Element = await arrive((e) => e.classList.contains("fr-toolbar"));
    const popup: Element = await arrive(
        (e) => e.classList.contains("fr-popup") && e.querySelector(ARCACON_PICKER) !== null,
        toolBar);
    const arcaconPicker: HTMLElement = popup.querySelector(ARCACON_PICKER)!;
    arcaconPicker.style.width = toolBar.clientWidth + "px";
    const search: HTMLInputElement = await activateSearch(arcaconPicker);
    search.focus();
    popup.classList.add("fr-active");
    search.disabled = false;
    autofocusWrite(toolBar.querySelector("#arcacon-1")!, search);
})();
