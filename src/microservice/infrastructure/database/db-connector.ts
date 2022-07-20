import { Db, MongoClient } from 'mongodb'
import { IDBConnector } from '@core/interfaces/db/i-db-connector'
import { injectable } from 'inversify'
import mongoose, { connect } from 'mongoose'

@injectable()
export class DBService implements IDBConnector {
  private _db: Db

  async connect() {
    /* singleton pattern */
    if (!this._db) {
      const client = new MongoClient('mongodb://localhost:27017')
      await client.connect()
      this._db = client.db('testdb')
    }
    // console.log('~~> database is connected successfully')
    return this._db
  }
}

// @injectable()
// export class DBService implements IDBConnector {
//   private _db: typeof mongoose

//   async connect() {
//     /* singleton pattern */
//     if (!this._db) {
//       this._db = await connect('mongodb://localhost:27017/testdb')
//     }
//     console.log('~~> database is connected successfully')
//     return this._db
//   }
// }
