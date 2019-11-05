// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../net
//   ../../../http
//   ../../../https

import { Socket } from 'net';
import * as HTTP from 'http';
import * as HTTPS from 'https';

export const EventEmitterClient: any;
export class WebSocket extends EventEmitterClient {
    OPEN: number;
    CLOSED: number;
    external: any;
    executeOn: string;
    constructor(url: string, external?: any, isServer?: boolean);
    readonly _socket: SocketAddress;
    readonly remoteAddress: string;
    readonly readyState: number;
    onopen: Listener;
    onclose: Listener;
    onerror: Listener;
    onmessage: Listener;
    on(event: string, listener: Listener): void;
    on(event: 'open', listener: () => {}): void;
    on(event: 'error', listener: (err: Error) => void): void;
    on(event: 'message', listener: (message: string | any[]) => void): void;
    on(event: 'close', listener: (code?: number, reason?: string) => void): void;
    ping(message?: string | Buffer): void;
    send(message: string | Buffer, options?: SendOptions, cb?: Listener): void;
    terminate(): void;
    close(code?: number, reason?: string): void;
}

export const EventEmitterServer: any;
export class WebSocketServer extends EventEmitterServer {
    constructor(configs: ServerConfigs, callback?: Listener);
    on(event: string, listener: Listener): void;
    on(event: 'error', listener: (err: Error, socket?: Socket) => void): void;
    on(event: 'connection', listener: (socket: WebSocket) => void): void;
    broadcast(message: string | Buffer, options?: BroadcastOptions): void;
    startAutoPing(interval: number, appLevel?: boolean): void;
    close(callback?: Listener): void;
}

export const native: any;
export const OPCODE_TEXT: number;
export const OPCODE_PING: number;
export const OPCODE_BINARY: number;
export const APP_PING_CODE: Buffer;
export const PERMESSAGE_DEFLATE: number;
export const SLIDING_DEFLATE_WINDOW: number;
export const DEFAULT_PAYLOAD_LIMIT: number;
export const noop: any;

export class EventEmitter {
    on(event: string, listener: Listener): void;
    emit(event: string, ...args: any[]): void;
    removeEvents(): void;
}
export function eventEmitter(): any;

export type Listener = (...args: any[]) => void;
export type SocketAddress = {
    remotePort: number | string | null;
    remoteAddress: string | null;
    remoteFamily: string | null;
};
export type ConnectionInfo = {
    req: HTTP.IncomingMessage;
    origin: string;
    secure: boolean;
};
export type BroadcastOptions = {
    binary?: boolean;
};
export type VerifyClientNext = (clientVerified: boolean, code?: number, name?: string) => void;
export type ServerConfigs = {
    path?: string;
    port?: number;
    host?: string;
    server?: HTTP.Server | HTTPS.Server;
    noDelay?: boolean;
    maxPayload?: number;
    perMessageDeflate?: {
        serverNoContextTakeover: boolean;
    };
    verifyClient?: (info: ConnectionInfo, next: VerifyClientNext) => void;
};
export type SendOptions = {
    binary?: boolean;
    compress?: boolean;
};

