import fastify from "fastify"; 

const app = fastify()

//qnd usuário acessar endereço "hello" vai executar a função
app.get('/hello', () => {
    return 'Hello, Ramille! '
})

app.listen({ port: 3333}).then(() => (
    console.log('HTTP server running!')
))