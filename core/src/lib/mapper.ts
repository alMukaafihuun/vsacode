/**
 * A module that generates files
 * @module mapper
 * @author alMukaafih
 */

/**
 * Creates a new Map Blueprint
 * @class MapFileIcons
 * @param {string} txt_1 - CSS class name prefix
 * @param {string} [txt_2] - CSS class name suffix
 * @param {string} [isFile=true] - it is a File and not a Folder
 */
function encode(text: string): string {
    const match: RegExpMatchArray | null = text.match(/[^a-zA-Z0-9_-]/g);
    if (match == null)
        return text
    let pattern: RegExp;
    let u = "u";
    let encoded: string;
    let unicode: string;
    for (const char of match) {
        encoded = char.charCodeAt(0).toString(16);
        unicode = `\\u{${encoded}}`;
        if (encoded.length == 4) {
            unicode = "\\u" + encoded;
            u = "";
        }
        pattern = new RegExp(unicode, `g${u}`);
        text = text.replace(pattern, `0x${encoded}`)
    }
    return text
}
export class MapFileIcons {
    x: string;
    y: string;
    z: string;
    isFile: boolean;
    isFullFile: boolean;
    map0: ObjectMap;
    map1: StringMap
    map2: ArrayMap;
    key: string;
    value: string;
    constructor(txt_1: string, txt_2="", isFile=true, isFullFile=false) {
        /** Prefix */
        this.x = txt_1;
        /** Suffix */
        this.y = txt_2;
        /** ::before string */
        this.z = "::before";
        /** Switch */
        this.isFile = isFile;
        this.isFullFile = isFullFile;
    }
    /** Maps Map1 to Map2
     * @param {Map} map1 - MapX
     * @param {Map} map2 - MapY
     * @param {Map} map0 - Main map
     * @returns {Map}
     */
    map(map1, map2, map0) {
        this.map1 = map1;
        this.map2 = map2;
        this.map0 = map0;
        for([this.key, this.value] of Object.entries(this.map1)) {
            if (this.map0[this.value] == undefined)
                continue;
            if (this.map2[this.value] == undefined)
                this.map2[this.value] = [];
            if (this.isFile)
                this.key = encode(this.key);

            if (this.isFile && this.isFullFile)
                this.key = "f_" + this.key;
            this.key = this.x + this.key + this.y + this.z;
            this.map2[this.value].push(this.key);
        }
        return this.map2;
    }
}

export class MapThemes {
    themes
    constructor(themes) {
        this.themes = themes
    }
    map() {
        /* empty */
    }
}