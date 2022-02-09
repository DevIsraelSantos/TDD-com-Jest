const {User} = require('../../src/app/models/');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {

    //Trunca tabelas
    beforeEach(async () =>{
        await truncate();
    })

    //Teste 1
    it('should encrypt user password', async() => {
       const user = await User.create({
           name:'Israel',
           email:'israel@gmail.com',
           password:'123456'
       });
       const compareHash = await bcrypt.compare('123456', user.password_hash)

       expect(compareHash).toBe(true);

    });


})