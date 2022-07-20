import { INTERFACES } from '@core/CONSTANTS/interfaces-enum'
import { ICommentService } from '@core/interfaces/domain/services/i-comment-service'
import { inject, injectable, interfaces } from 'inversify'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { NextFunction, Request, Response } from 'express'

@controller('/comment')
export class CommentController {
  constructor(
    @inject(INTERFACES.I_ADD_COMMENT_USE_CASE)
    private readonly _commentService: ICommentService
  ) {}

  @httpGet('/')
  async index(req: Request, res: Response) {
    const result = await this._commentService.findOne(req.body.id)
    res.status(200).json(result)
  }

  @httpPost('/')
  async add(req: Request, res: Response, next: NextFunction) {
    const result = await this._commentService.addOne(req.body)
    if (result) res.status(200).json('comment added successfully')
    else res.status(500).json('sorry! internal server error happen ')
  }
}
