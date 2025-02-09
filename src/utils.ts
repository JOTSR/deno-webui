import { exists, osPaths, path } from "../deps.ts";

/**
 * The function converts a base64 string to a Uint8Array buffer.
 * @param {string} b64 - The parameter `b64` is a string that represents a base64 encoded value.
 * @returns a Uint8Array, which is a typed array representing an array of 8-bit unsigned integers.
 */
export function b64ToBuffer(b64: string): Uint8Array {
  const byteArray = atob(b64).split("").map((c) => c.codePointAt(0) ?? 0);
  return new Uint8Array(byteArray);
}

/**
 * The function `writeLib` writes a library file to a temporary directory and returns the path of the
 * written file.
 * @param {string} libName - The `libName` parameter is a string that represents the name of the
 * library file that will be written.
 * @param {Uint8Array} libBuffer - The `libBuffer` parameter is a `Uint8Array` that represents the
 * binary data of the library file that needs to be written.
 * @returns a promise that resolves to a string.
 */
export async function writeLib(
  libName: string,
  libBuffer: Uint8Array,
): Promise<string> {
  const libPath = path.join(osPaths.temp(), libName);
  if (!await exists(libPath)) {
    await Deno.writeFile(libPath, libBuffer);
  }
  if (!await exists(libPath)) {
    throw new WebUiError(`Can't write ${libName} at ${libPath}`);
  }
  return libPath;
}

/**
 * Convert a String to C-String.
 * @param {string} value
 * @returns a char[].
 */
export function stringToUint8array(value: string): Uint8Array {
  return new TextEncoder().encode(value + "\0");
}

/**
 * Convert C-String to String.
 * @param {ArrayBuffer} value - an `ArrayBuffer` that contains a C-String.
 * @returns a string.
 */
export function uint8arrayToString(value: ArrayBuffer): string {
  return new TextDecoder().decode(value);
}

/**
 * Sleep for an amount of milliseconds.
 * @param {number} ms
 */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class WebUiError extends Error {}
