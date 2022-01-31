const { response } = require('express');
const express = require('express');
const Car = require('../../models/Car');

const router = express.Router();


// PAGINATED GET
router.get('/', async(req, res)=> {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex  = (page - 1) * limit
        const endIndex = page * limit

        const cars = await Car.find();

        const results = {}

        if(endIndex < cars.length){
            results.next = {
            page: page + 1,
            limit: limit
            }
        }
    
        if(startIndex > 0){
            results.previous = {
            page: page - 1,
            limit: limit
            }
        }
    
        results.results = cars.slice(startIndex, endIndex)
        res.json(results)  
    
})

// ALL GET
router.get('/all', async(req, res) =>{
    try{
        const cars = await Car.find();
        res.json(cars);
    }
    catch(err){
        if(res.status(404)){
            res.json({message: "Verilen ID'ye ait kurs bulunamadı!"}) 
        }
        else if(res.status(500)){
            res.json({message: "Sunucuda bir hata oluştu ve istek karşılanamadı!"}) 
        }
        else if(res.status(501)){
            res.json({message: "Sunucu istenilen isteği yerine getirecek şekilde yapılandırılmamıştır!"}) 
        }
        else{
            res.json({message: err}) 
        }
    }
});

// ONE GET
router.get('/:partID', async(req, res) =>{
    try{
        const selectedCar = await Car.findById(req.params.partID);
        res.json(selectedCar);
    }
    catch(err){
        if(res.status(404)){
            res.json({message: "Verilen ID'ye ait kurs bulunamadı!"}) 
        }
        else if(res.status(500)){
            res.json({message: "Sunucuda bir hata oluştu ve istek karşılanamadı!"}) 
        }
        else if(res.status(501)){
            res.json({message: "Sunucu istenilen isteği yerine getirecek şekilde yapılandırılmamıştır!"}) 
        }
        else{
            res.json({message: err}) 
        }
    }
});

// POST
router.post('/', (req, res, next) =>{
    const car = new Car({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        modelyear: req.body.modelyear,
        image: req.body.image,
        price: req.body.price,
    });

    car.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            if(!req.body.name || req.body.name.length < 3){
                res.json({message : "Ad zorunludur ve en az 3 karakter olmalıdır!"})
            }

            if(res.status(404)){
                res.json({message: "İstek yapılan kaynaK (veya sayfanın) bulunamadı!"}) 
            }
            else if(res.status(500)){
                res.json({message: "Sunucuda bir hata oluştu ve istek karşılanamadı!"}) 
            }
            else if(res.status(501)){
                res.json({message: "Sunucu istenilen isteği yerine getirecek şekilde yapılandırılmamıştır!"}) 
            }
            else{
                res.json({message: err}) 
            }

        });
});

//DELETE 
router.delete('/:partID', async(req, res) => {
    try{
        const removedPost = await Car.remove({_id: req.params.partID}) 
        res.json(removedPost);
    }
    catch(err){
        if(res.status(404)){
            res.json({message: "Verilen ID'ye ait kurs bulunamadı!"}) 
        }
        else if(res.status(500)){
            res.json({message: "Sunucuda bir hata oluştu ve istek karşılanamadı!"}) 
        }
        else if(res.status(501)){
            res.json({message: "Sunucu istenilen isteği yerine getirecek şekilde yapılandırılmamıştır!"}) 
        }
        else{
            res.json({message: err}) 
        }
    }
    
})

//PUT
router.patch('/:partID', async(req, res) => {
    try{
        const updatedPost = await Car.updateOne({_id: req.params.partID}, {$set: {
            name: req.body.name,
            brand: req.body.brand,
            model: req.body.model,
            modelyear: req.body.modelyear,
            image: req.body.image,
            price: req.body.price
        }}) 

        res.json(updatedPost);
    }
    catch(err){
        if(res.status(404)){
            res.json({message: "Verilen ID'ye ait kurs bulunamadı!"}) 
        }
        else if(res.status(500)){
            res.json({message: "Sunucuda bir hata oluştu ve istek karşılanamadı!"}) 
        }
        else if(res.status(501)){
            res.json({message: "Sunucu istenilen isteği yerine getirecek şekilde yapılandırılmamıştır!"}) 
        }
        else{
            res.json({message: err}) 
        }
    }
    
})


module.exports = router;