import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/', (c) => {
  return c.json({
    time: new Date().getTime()
})

export default app
