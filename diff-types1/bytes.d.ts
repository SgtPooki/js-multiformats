declare const empty: Uint8Array;
declare function toHex(d: Uint8Array): string;
declare function fromHex(hex: string): Uint8Array;
declare function equals(aa: Uint8Array, bb: Uint8Array): boolean;
declare function coerce(o: ArrayBufferView | ArrayBuffer | Uint8Array): Uint8Array;
declare function isBinary(o: unknown): o is ArrayBuffer | ArrayBufferView;
declare function fromString(str: string): Uint8Array;
declare function toString(b: Uint8Array): string;
export { equals, coerce, isBinary, fromHex, toHex, fromString, toString, empty };
//# sourceMappingURL=bytes.d.ts.map