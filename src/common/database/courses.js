import {readFile, writeFile} from 'fs/promises'

export class CourseDatabase {
    async save(item) {
        
        const {pathname: databasePath} = new URL('./courses.json', import.meta.url)
        const curretDatabase = JSON.parse((await readFile(databasePath)))
        const currentDatabaseLength  = curretDatabase.length
        curretDatabase.push({
            id: currentDatabaseLength + 1,
            ...item
        })
        await writeFile(databasePath, JSON.stringify(curretDatabase))
        return curretDatabase.pop()

    }
}