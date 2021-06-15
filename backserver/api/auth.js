const { authSecret } = require('../.env')

const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')


module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.pass) {
            return res.send({ op: 'error', msg: 'Email e senha são necessários!' })
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()
           // console.log(user)
        if (!user) return res.send({ op: 'error', msg: "Usuário não encontrado!" })

        const isMatch = bcrypt.compareSync(req.body.pass, user.pass)
        if (!isMatch) return res.status(401).send({ op: 'error', msg: 'Usuário ou senha inváldos!' })

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            level: 1,
            iat: now,
            exp: now + (60 * 60 * 24 * 3) 
        }
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret),
        })

    }

    const validateToken = async (req, res) => {

        const now = Math.floor(Date.now() / 1000)
        const reqToken = req.body.token || null
        try {
            if (reqToken) {

                const token = jwt.decode(reqToken, authSecret)

                if (token.exp > now) {
                    return res.send(true)
                }
            }
        } catch (e) {

        }
        res.send('não autenticado')
    }
    return {
        signin, validateToken
    }
}