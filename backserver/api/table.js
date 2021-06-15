module.exports = app => { 

    const get = async (req, res) => {
        // const [data] = await app.api.query.all('users')
        const data = await app.db(req.params.table).columnInfo()
          res.send(data)
     }

     return { get }
}