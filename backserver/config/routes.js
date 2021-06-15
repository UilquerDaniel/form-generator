const level = require('./level')
module.exports = app => {



    app.route('/table/:table')
        .get(app.api.table.get)

    //==================================================


    const { upload } = require('../uploads/images');

    app.route('/uploads')
        .post(
            upload.single('file'),
            ( req, res ) => res.send({ op: 'success', msg: 'files recebidos e acomodados...' })
        )

}
