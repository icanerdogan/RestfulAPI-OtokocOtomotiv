const { response } = require('express');
const express = require('express');
const Car = require('../../models/Car')

const router = express.Router();

router.get('/', (req, res, next) =>{
    console.log(req.body);
    res.status(200).json({
        message: 'Products ekranında GET requesti çalıştı.'
    });
});

router.post('/', (req, res, next) =>{
    //console.log(req.body);
    const car = new Car({
        title: req.body.title,
        description: req.body.description
    });

    car.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message : err})
        });
});
 

router.get('/:partId', async (req, res, next) => {

    try{
        const id = await Car.findById(req.params.partId);
        res.json(id);
    }
    catch (err){
        res.json({message: err});
    }
    /*if(id == 1){
        res.status(200).json({
            message: "Ürün1 Getirildi!",
            id: id
        });
    }
    else{
        res.status(200).json({
            message: "ID'ye ait Ürün Bulunamadı!"
        })
    }*/
});

router.delete('/:partId', async (req, res, next) =>{
    try{
        const id = await Car.remove({_id: req.params.partId});
        res.json(id);
    }
    catch (err){
        res.json({message: err});
    }
});

router.patch('/:partId', async (req, res, next) =>{
    try{
        const id = await Car.updateOne(
            {_id: req.params.partId},
            {$set : {title: req.body.title}}
        );
        res.json(id);
    }
    catch (err){
        res.json({message: err});
    }
});

/*
router.patch('/:partId', (req, res, next) =>{
    res.status(200).json({
        message: 'Products ekranında PATCH requesti çalıştı.'
    });
});
*/
module.exports = router;