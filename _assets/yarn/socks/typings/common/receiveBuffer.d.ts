/// <reference types="node" />
declare class ReceiveBuffer {
    private _buffer;
    private _offset;
    private _originalSize;
    constructor(size?: number);
    get length(): number;
    append(data: Buffer): number;
    peek(length: number): Buffer;
    get(length: number): Buffer;
}
export { ReceiveBuffer };
