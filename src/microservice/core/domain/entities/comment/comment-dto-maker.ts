import { inject, injectable } from 'inversify'
import { IHashLib } from '@interfaces/lib/i-cipher'
import { ISanitizerLib } from '@interfaces/lib/i-sanitizer'
import { ICommentDTO } from '@interfaces/domain/DTOs/i-comment-dto'
import { ICommentDtoMaker } from '@interfaces/domain/DTOs/i-comment-dto-maker'
import { IComment } from '@interfaces/domain/entities/i-comment'
import { INTERFACES } from '@core/CONSTANTS/interfaces-enum'

@injectable()
export class CommentDtoMaker implements ICommentDtoMaker {
  constructor(
    @inject(INTERFACES.I_HASH_LIB)
    private readonly _HashLib: IHashLib,
    @inject(INTERFACES.I_SANITIZE_LIB)
    private readonly _SanitizeTextLib: ISanitizerLib
  ) {}

  private hashThis = this._HashLib.hash

  private sanitizeThis = this._SanitizeTextLib.sanitize

  public build(comment: IComment): ICommentDTO {
    /* TODO : validation needed  */
    /* TODO : Error handling needed  */
    return {
      _id: comment._id,
      author: comment.author,
      // remove hacking scripts
      text: this.sanitizeThis(comment.text),
      // generating hacking
      hash: this.hashThis(comment.author + comment.text)
    }
  }
}
