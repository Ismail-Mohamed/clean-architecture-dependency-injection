import { inject, injectable } from 'inversify'
import { ICommentRepository } from '@core/interfaces/repos/i-comment-repo'
import { INTERFACES } from '@core/CONSTANTS/interfaces-enum'
import { ICommentService } from '@core/interfaces/domain/services/i-comment-service'
import { IComment } from '@core/interfaces/domain/entities/i-comment'

@injectable()
export class CommentService implements ICommentService {
  constructor(
    @inject(INTERFACES.I_COMMENT_REPO)
    private readonly _CommentRepo: ICommentRepository
  ) {}

  async addOne(comment: IComment) {
    return this._CommentRepo.addOne(comment)
  }

  /* TODO: how pass comment entity in dto factory ???  */
  async findOne(id: string) {
    return (await this._CommentRepo.findOne(id)) as IComment
  }
}
