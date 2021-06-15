const bcrypt = require('bcrypt');

module.exports = app => {

    const save = async (req, res) => {

        const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
        
        const err_name = existsOrError(req.body.name, 'O nome è obrigatório...')
        if (err_name) {
            res.send(err_name)
            return
        }

        const err_email = existsOrError(req.body.email, 'O email è obrigatório...')
        if (err_email) {
            res.send(err_email)
            return
        }

        const err_pass = existsOrError(req.body.pass, 'Informe uma senha...')
        if (err_pass) {
            res.send(err_pass)
            return
        }


        const salt = bcrypt.genSaltSync(10);
        const email = await app.api.query.getByEmail('users', req.body.email) || null

        if (!email) {
            const hash = bcrypt.hashSync(req.body.pass, salt);
            req.body.pass = hash
            const data = await app.api.query.insert('users', req.body)
            res.send(app.api.msg.msg('success', 'Cadastro realizado com sucesso!'))
        }
        else {
            res.send(app.api.msg.msg('error', 'O email já esta sendo usado!'))
        }

    }

    const update = async (req, res) => {
        !req.body.id ? res.send( app.api.msg.msg('error', 'Nenhum usuário foi informado!')) : ''
        delete req.body.pass
        const data = await app.api.query.update('users', req.body)
        data ? res.send(app.api.msg.msg('success', 'Usuário atualizadp com sucesso!'))
           :  app.api.msg.msg('error', 'Nenhum usuário foi informado!')
    }

    const remove = async (req, res) => {
        !req.body.id ? res.send( app.api.msg.msg('error', 'Nenhum usuário foi informado!')) : ''
        const data = await app.api.query.remove('users', req.params.id)
              data ? res.send(app.api.msg.msg('success', 'Usuário deletado com sucesso!'))
           :  app.api.msg.msg('error', 'Nenhum usuário foi informado!')
    }

    const getById = async (req, res) => {
        const data = await app.api.query.getById('users', req.params.id)
        delete data.pass
        const address = await app.api.query.getByColAndId('address','user_id', req.params.id)|| null
        const city = address ? await app.api.query.getByColAndId('cities','id', address.city_id ): null
        const state = city ? await app.api.query.getByColAndId('states','id', city.state_id ): null
        const contact = await app.api.query.getByColAndId('contacts','user_id', req.params.id)|| null
                

        res.send({...data, address, city, state, contact })

    }

    
    return { save, remove,  getById, update  }

}












