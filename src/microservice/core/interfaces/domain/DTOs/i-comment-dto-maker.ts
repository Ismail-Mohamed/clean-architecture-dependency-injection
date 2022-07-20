import { IComment } from '../entities/i-comment'
import { ICommentDTO } from './i-comment-dto'
export interface ICommentDtoMaker {
  build(comment: IComment): ICommentDTO
}
