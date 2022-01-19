import fs from 'fs'

const read = () => {
    const db = {}

    db.gsoTable = fs.readFileSync('./db/gsoTable.json', 'utf-8')

    return db
}

const write = (db) => {
    fs.writeFile('./db/gsoTable.json', 'utf-8', JSON.stringify(db.gsoTable))
}

export { read, write }
