import { IHashLib } from '@core/interfaces/lib/i-cipher'
import { injectable } from 'inversify'
import { createHash } from 'crypto'

// @injectable()
// export class CipherEngine implements IHashLib {
//   constructor() {}
//   hash(input: string): string {
//     /* TODO: hash function implementation needed */
//     return '03655505CC0F70EF1243B60DD994A19'
//   }
// }

@injectable()
export class CipherEngine implements IHashLib {
  constructor() {}

  hash(text: string) {
    return createHash('md5').update(text, 'utf-8').digest('hex')
  }
}
