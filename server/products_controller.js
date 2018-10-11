

module.exports = {

    create: (req, res, next) => {
        const db = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        db.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.error("error in create method", err)
        });
    },
    getOne: (req,res,next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.read_product([params.id])
        .then( product => res.status(200).send( product ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
            console.log('error in getOne method', err);
        });
    },
    getAll: (req,res,next) => {
        const db = req.app.get('db')

        db.read_products()
        .then( products => res.send(products) )
        .catch( err => {
            console.log('----------------', err)
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        });
    },
    update: (req,res,next) => {
        const db = req.app.get('db')
        const {params, query} = req;

        db.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log('---------------------Error in update method--------------------', err)    
        })
    },
    delete: (req,res,next) => {
        const db = req.app.get('db')
        const {id} = req.params;

        db.delete_product([id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log('---------------------Error in delete method--------------------', err)       
        })
    }
    
};