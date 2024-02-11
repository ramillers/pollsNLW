import fastify from "fastify"; 
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'; 


const app = fastify()

//conexão com a db
const prisma = new PrismaClient()

//qnd usuário acessar endereço "polls" vai executar a função
app.post('/polls', async (request) => {
    //variavel de validação do request body
    const createPollBody = z.object({
        title: z.string()
    })

    const { title } = createPollBody.parse(request.body) //verifica se o request body tá no formato de objeto
    
    const poll = await prisma.poll.create({
        data: {
            title,
        }
    })

    return { pollId: poll.id }
})

app.listen({ port: 3333}).then(() => (
    console.log('HTTP server running!')
))