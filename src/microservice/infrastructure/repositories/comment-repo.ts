import { INTERFACES } from '@core/CONSTANTS/interfaces-enum'
import { CommentDtoMaker } from '@core/domain/entities/comment/comment-dto-maker'
import { IComment } from '@core/interfaces/domain/entities/i-comment'
import { ICommentRepository } from '@core/interfaces/repos/i-comment-repo'
import { DBService } from '@infrastructure/database/db-connector'
import { inject, injectable } from 'inversify'
import { Schema } from 'mongoose'
import { globalContainer } from '@/web/di-global-container'

@injectable()
export class CommentRepository implements ICommentRepository {
  constructor(
    @inject(INTERFACES.I_DB_CONNECTOR)
    private readonly _db: DBService
  ) {}
  /* TODO: remove inject fom injected classes */
  async addOne(comment: IComment) {
    const db = await this._db.connect()
    const commentDbModel = db.collection('comments')
    const commentDTO = globalContainer.get(CommentDtoMaker).build(comment)
    const { text, author, hash } = commentDTO
    const result = await commentDbModel.insertOne({
      author: author,
      text: text,
      hash: hash
    })
    return result.acknowledged
  }

  async findOne(id: string) {
    const db = await this._db.connect()
    const commentDbModel = db.collection('comments')
    const result = await commentDbModel.findOne({ _id: id })
    return result!
  }
}

/*

 const commentMongooseModel = new Schema<ICommentDTO>({
  _id: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
})

@injectable()
export class CommentRepository implements ICommentRepository {
  constructor(
    @inject(INTERFACES.I_DB_CONNECTOR)
    private readonly _db: DBService
  ) {}
  async addOne(comment: IComment) {
    const db = await this._db.connect()
    const model = db.model<ICommentDTO>('comments', commentMongooseModel)
    const commentDTO = appKernel.get(CommentDtoMaker).build(comment)
    const result = await new model({ ...commentDTO }).save()
    return result != null
  }

  async findOne(id: string) {
    const db = await this._db.connect()
    const model = db.model<ICommentDTO>('comments', commentMongooseModel)
    const result = await model.findById(id)
    return result!
  }
}
 */
