import { IComment } from '@interfaces/domain/entities/i-comment'

export interface ICommentService {
  findOne(id: string): Promise<IComment>
  addOne(commentDTO: IComment): Promise<boolean>
}
