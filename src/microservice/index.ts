import { CommentRepository } from '@/microservice/infrastructure/repositories/comment-repo'
import { CommentService } from '@core/domain/services/comment-service'
import { ICommentRepository } from '@interfaces/repos/i-comment-repo'
import { DBService } from '@infrastructure/database/db-connector'
import { IDBConnector } from '@interfaces/db/i-db-connector'
import { INTERFACES } from '@core/CONSTANTS/interfaces-enum'
import { IComment } from '@interfaces/domain/entities/i-comment'
import { CommentEntity } from '@domain/entities/comment/comment-entity'
import { CommentDtoMaker } from '@domain/entities/comment/comment-dto-maker'
import { ICommentDtoMaker } from '@interfaces/domain/DTOs/i-comment-dto-maker'
import { IHashLib } from '@interfaces/lib/i-cipher'
import { CipherEngine } from '@infrastructure/lib/cipher-engine'
import { ISanitizerLib } from '@interfaces/lib/i-sanitizer'
import { TextSanitizer } from '@infrastructure/lib/text-sanitizer'
import { ICommentService } from '@interfaces/domain/services/i-comment-service'
import { AbstractContainerModule } from './infrastructure/container_module/i-di-container-module'
import { interfaces, ContainerModule } from 'inversify'

export class CommentContainer extends ContainerModule {
  constructor() {
    super((bind) => {
      bind<IDBConnector>(INTERFACES.I_DB_CONNECTOR).to(DBService)
      bind<ICommentRepository>(INTERFACES.I_COMMENT_REPO).to(CommentRepository)
      bind<ICommentDtoMaker>(INTERFACES.I_COMMENT_DTO_MAKER).to(CommentDtoMaker)
      bind<IComment>(INTERFACES.I_COMMENT_ENTITY).to(CommentEntity)
      bind<IHashLib>(INTERFACES.I_HASH_LIB).to(CipherEngine)
      bind<ISanitizerLib>(INTERFACES.I_SANITIZE_LIB).to(TextSanitizer)
      bind<ICommentService>(INTERFACES.I_ADD_COMMENT_USE_CASE).to(
        CommentService
      )
    })
  }
}
