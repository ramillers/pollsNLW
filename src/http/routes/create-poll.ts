import { z } from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"


export async function createPoll(app: FastifyInstance) {
    app.post('/polls', async (request, reply) => {
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
    
        return reply.status(201).send ({ pollId: poll.id })
    })
} 
