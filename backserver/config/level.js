module.exports = middleware => {
    return (req, res, next) => {

        if(req.user.level) {
            middleware(req, res, next)
        } else {
            res.status(402).send({op:'error', msg:'Seu nível não tem permissão para entrar aqui!'})
        }
    }
}