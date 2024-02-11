import fastify from "fastify"; 
import { z } from 'zod'; 
import { request } from "http";

const app = fastify()

//qnd usuário acessar endereço "polls" vai executar a função
app.post('/polls', (request) => {
    //variavel de validação do request body
    const createPollBody = z.object({
        title: z.string()
    })

    const { title } = createPollBody.parse(request.body) //verifica se o request body tá no formato de objeto
    //zod retorna as infos tipadas 

    return 'Hello, Ramille!'
})

app.listen({ port: 3333}).then(() => (
    console.log('HTTP server running!')
))