import path from 'path'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

const pathDatabase = path.resolve(__dirname, '../database/database.sqlite')
export async function database() {
  // open database
  const db = await open({
    filename: pathDatabase,
    driver: sqlite3.Database,
  })

  // create user table on database
  await db.getDatabaseInstance().serialize(async () => {
    const sql =
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
    await db.exec(sql)
  })
  return db
}
