/**
 * The size of the initialization vector.
 */
const INITIALIZATION_VECTOR_SIZE = 12 as const

/**
 * The `encrypt()` function encrypts the given plaintext using the given key,
 * returning the encrypted data and the initialization vector in a tuple. The
 * initialization vector is base64 encoded.
 *
 * @example
 * ```ts
 * const key = '<key>'
 * const plaintext = '<content_to_be_encrypted>'
 *
 * const [cipherText, iv] = await encrypt(plaintext, key)
 * ```
 */
async function encrypt(plaintext: string, key: string): Promise<[string, string]> {
  const initializationVector = crypto.getRandomValues(new Uint8Array(INITIALIZATION_VECTOR_SIZE))
  const encodedPlaintext = new TextEncoder().encode(plaintext)

  const rawKey = Uint8Array.from(atob(key), (character) => character.charCodeAt(0))

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

  const cipherTextBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: initializationVector,
    },
    secretKey,
    encodedPlaintext,
  )

  const cipherText = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(cipherTextBuffer))))

  // NOTE: The initialization vector for the encrypted data is base64 encoded.
  const iv = btoa(String.fromCharCode.apply(null, Array.from(initializationVector)))

  return [cipherText, iv]
}

export default encrypt
