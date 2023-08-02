import { CID } from './index.js';
import type * as API from './interface.js';
/**
 * @template T - Logical type of the data encoded in the block
 * @template C - multicodec code corresponding to codec used to encode the block
 * @template A - multicodec code corresponding to the hashing algorithm used in CID creation.
 * @template V - CID version
 */
declare class Block<T, C extends number, A extends number, V extends API.Version> implements API.BlockView<T, C, A, V> {
    readonly cid: CID<T, C, A, V>;
    readonly bytes: API.ByteView<T>;
    readonly value: T;
    readonly asBlock: this;
    constructor({ cid, bytes, value }: {
        cid: CID<T, C, A, V>;
        bytes: API.ByteView<T>;
        value: T;
    });
    links(): Iterable<[string, CID<unknown, number, number, API.Version>]>;
    tree(): Iterable<string>;
    get(path?: string): API.BlockCursorView<unknown>;
}
/**
 * @template T - Logical type of the data encoded in the block
 * @template Code - multicodec code corresponding to codec used to encode the block
 * @template Alg - multicodec code corresponding to the hashing algorithm used in CID creation.
 */
declare function encode<T, Code extends number, Alg extends number>({ value, codec, hasher }: {
    value: T;
    codec: API.BlockEncoder<Code, T>;
    hasher: API.MultihashHasher<Alg>;
}): Promise<API.BlockView<T, Code, Alg>>;
/**
 * @template T - Logical type of the data encoded in the block
 * @template Code - multicodec code corresponding to codec used to encode the block
 * @template Alg - multicodec code corresponding to the hashing algorithm used in CID creation.
 */
declare function decode<T, Code extends number, Alg extends number>({ bytes, codec, hasher }: {
    bytes: API.ByteView<T>;
    codec: API.BlockDecoder<Code, T>;
    hasher: API.MultihashHasher<Alg>;
}): Promise<API.BlockView<T, Code, Alg>>;
/**
 * @template T - Logical type of the data encoded in the block
 * @template Code - multicodec code corresponding to codec used to encode the block
 * @template Alg - multicodec code corresponding to the hashing algorithm used in CID creation.
 * @template V - CID version
 */
declare function createUnsafe<T, Code extends number, Alg extends number, V extends API.Version>({ bytes, cid, value: maybeValue, codec }: {
    cid: API.Link<T, Code, Alg, V>;
    value: T;
    codec?: API.BlockDecoder<Code, T>;
    bytes: API.ByteView<T>;
} | {
    cid: API.Link<T, Code, Alg, V>;
    bytes: API.ByteView<T>;
    value?: undefined;
    codec: API.BlockDecoder<Code, T>;
}): API.BlockView<T, Code, Alg, V>;
/**
 * @template T - Logical type of the data encoded in the block
 * @template Code - multicodec code corresponding to codec used to encode the block
 * @template Alg - multicodec code corresponding to the hashing algorithm used in CID creation.
 * @template V - CID version
 */
declare function create<T, Code extends number, Alg extends number, V extends API.Version>({ bytes, cid, hasher, codec }: {
    bytes: API.ByteView<T>;
    cid: API.Link<T, Code, Alg, V>;
    hasher: API.MultihashHasher<Alg>;
    codec: API.BlockDecoder<Code, T>;
}): Promise<API.BlockView<T, Code, Alg, V>>;
export { encode, decode, create, createUnsafe, Block };
//# sourceMappingURL=block.d.ts.map