/**
 * The `decrypt()` function decrypts the given cipher text using the given key
 * and initialization vector, returning the decrypted plaintext.
 *
 * @example
 * ```ts
 * const key = '<key>'
 * const iv = '<initialization_vector>'
 *
 * const plaintext = await decrypt(cipherText, iv, key)
 * ```
 */
async function decrypt(cipherText: string, initializationVector: string, key: string) {
  const rawKey = Uint8Array.from(atob(key), (character) => character.charCodeAt(0))
  const rawInitializationVector = Uint8Array.from(atob(initializationVector), (character) => character.charCodeAt(0))

  const cipherTextBuffer = Uint8Array.from(atob(cipherText), (character) => character.charCodeAt(0))

  const secretKey = await crypto.subtle.importKey(
    'raw',
    rawKey,
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  )

  const clearTextBuffer = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: rawInitializationVector,
    },
    secretKey,
    cipherTextBuffer,
  )

  return new TextDecoder().decode(clearTextBuffer)
}

export default decrypt
