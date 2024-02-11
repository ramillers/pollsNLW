import fastify from "fastify"; 
import { createPoll } from "./routes/create-poll";


const app = fastify()

app.register(createPoll) //server importa o create poll 

app.listen({ port: 3333}).then(() => (
    console.log('HTTP server running!')
))