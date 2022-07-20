import { ISanitizerLib } from '../../core/interfaces/lib/i-sanitizer'
import { injectable } from 'inversify'
@injectable()
export class TextSanitizer implements ISanitizerLib {
  constructor() {}
  sanitize(input: string): string {
    /* TODO : function implementation needed */
    return input + '  :text is checked'
  }
}
