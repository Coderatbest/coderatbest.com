const dtaLogin = require('../Store/DtaUsers')
const validateUser = (User) => {
    return new Promise((resolve, reject) => {
        try {
            const resp = dtaLogin.validateUser(User);
            resp
                .then(response => {

                    if (response)
                        resolve({ code: 204 });
                    else
                        reject({ code: 401 })
                })
                .catch(err => {
                    throw '';
                })
        } catch (error) {
            console.log(error);
            reject({ code: 500 })
        }
    });
}
const createUser = (User) => {
    return new Promise((resolve, reject) => {
        try {
            if (!User.UserName || !User.Password)
                reject({ code: 400 })
            const resp = dtaLogin.createUser(User);
            if (resp)
                resolve({ code: 201 })
            else
                throw 'Error en la base de datos';
        } catch (error) {
            console.log(error);
            reject({ code: 500 })
        }
    });
}

module.exports = {
    validateUser,
    createUser
}