import express, { Express, Request, Response } from 'express'

import cors from 'cors'
import { insertTIL } from './database'


const app: Express = express()
app.use(cors())

const port = process.env.PORT || 3000

app.post('/hi', async (req: Request, res: Response) => {
    await insertTIL({ name: 'Ari Kardasis', thing: 'MongoDB' })

    res.contentType('application/json')
    const s = { 'Status': 'Running' }
    res.send(s)
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

export default app