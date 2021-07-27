const sequelize = require('../config/postG')

describe('teste conexcao',()=>{
    test('teste api',async ()=>{
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })
})