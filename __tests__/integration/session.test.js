const request = require('supertest');
const app = require('../../src/app');
const {User} = require('../../src/app/models')

const truncate = require('../utils/truncate');

describe('Integration/Session: Autenticação', () => {

    beforeEach(async () => await truncate());

    it('Se user consegue autenticar com credencial valida', async () => {
        
        const user = await User.create({
            name: 'Israel',
            email: 'israel@gmail.com',
            password: '123456'
        });
    
        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        })

        expect(response.status).toBe(200);
    });

});