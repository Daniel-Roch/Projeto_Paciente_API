const Paciente = require('./Paciente')

//create table if not exists...
const init = async () => {
    await Paciente.sync();
};

init();