import { IComment } from '../domain/entities/i-comment'

export interface ICommentRepository {
  findOne(id: string): Promise<Object>
  addOne(comment: IComment): Promise<boolean>
}
