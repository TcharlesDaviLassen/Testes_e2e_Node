import request from "supertest"
import { app } from "./App"
import { prismaConectionService } from "./prisma";

test('[e2e] CreateLesson', async () => {

    const response = await request(app)
    .post('/api')
    .send({ title: 'Nova Aula'});

    const apiInDatabaseVerificaDadoExistenteNoBB = await prismaConectionService.api.findFirst({
        where:{
            title: 'Nova Aula',
        }
    })

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy(); // verifica que no corpo da minha resposta não tenho o error.

    expect(apiInDatabaseVerificaDadoExistenteNoBB).toBeTruthy();
});