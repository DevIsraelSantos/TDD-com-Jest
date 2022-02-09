
const request = require('supertest');
const app = require('../../src/app');


const { User } = require('../../src/app/models');

const truncate = require('../utils/truncate');
const factory = require('../factories');
describe('Integration/Session: Testes de Autenticação', () => {

    beforeEach(async () => await truncate());

    it('Credenciais corretas', async () => {

        let password = '123456'
        const user = await factory.create('User', {password});

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });

        expect(response.status).toBe(200);
    });

    it('Senha Invalida', async () => {
        
        let password = '123456'
        const user = await factory.create('User', {password});
       
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '12344'
            });

        expect(response.status).toBe(401);
    });

    it('Espera o retorno de token', async () => {

        let password = '123456'
        const user = await factory.create('User', {password});
      
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123456'
            });
            
        expect(response.body).toHaveProperty('token');
    });

    it('Usuario autenticado solicitando conexão', async() => {
        
        const user = await factory.create('User');

        const response = await request(app)
            .get('/dashboard')
            .set('Autorization', `Bearer ${user.genereteToken()}`);

        expect(response.status).toBe(200);
    });
    
    it('Teste de conexão com usuario não autenticado', async() => {
        const user = await factory.create('User');

        const response = await request(app)
            .get('/dashboard')

        expect(response.status).toBe(401);
    })

    it('Usuario solicita conexão com token invalido', async() => {
        
        const user = await factory.create('User');

        const response = await request(app)
            .get('/dashboard')
            .set('Autorization', `Bearer #########}`);

       // expect(response.status).toBe(401);
    });
})