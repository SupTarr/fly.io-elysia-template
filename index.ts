import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Node!')
    .listen(3000)
