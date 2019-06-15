export const jsonToB64 = json => {
  return Buffer.from(JSON.stringify(json), 'ascii').toString('base64')
}

export const b64ToJson = b64 => {
  return JSON.parse(Buffer.from(b64, 'base64').toString('ascii'))
}
