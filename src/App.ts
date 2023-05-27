import express from 'express';
import { PrismaApiRepository } from "./repositories/prisma/PrismaApiRepository";
import { CreateApi } from "./services/CreateApi";

export const app = express() 
app.use(express.json()) 

app.post('/api', async (request, response) => {
    const { title, description } = request.body;
    
    const headers = new Headers({ 'Content-Type': 'application/json'})
    

    const prismaApiRepository = new PrismaApiRepository(); // Ta se comunicando com o banco
    const createApi = new CreateApi(prismaApiRepository);
    
    try {
        headers.set('Content-Type', 'application/json');
        
        await createApi.execute({ title, description });
        return response.send(request.body);
    } catch (err: any) {
        return response.status(404).json({
                error: err.message,
            }
        )
    }
});


