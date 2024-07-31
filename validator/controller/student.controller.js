exports.index = (req, res) => {
    res.send({
        "status": "success",
        "data": [
            { "id": 1, "name": "Legion 7", "price": 429000 },
            { "id": 2, "name": "Inspiron 5210", "price": 65000 },
            { "id": 3, "name": "Asus Viviobook", "price": 190000 },
            { "id": 4, "name": "Amd Ryson", "price": 45000 },
            { "id": 5, "name": "Legion 7", "price": 429000 },
        ],
        "message": "Retrive Successfully"
    })
}


exports.show = (req, res) => {
    const id = req.params.id;
    res.send({
        "status": "Success",
        "data": { "id": id, "name": "Legion 7", "price": 429000 },
        "message": "retrive Successfully"
    })
}


exports.store = (req, res) => {
    res.send({
        "status": "Success",
        "data": { "name": req.body.name, "price": req.body.price },
        "message": "Inserted Successfully"
    })
}


exports.update = (req, res) => {
    res.send({
        "status": "Success",
        "data": { "id": req.body.id, "name": req.body.name, "price": req.body.price },
        "message": "Updated Successfully"
    })
}



exports.destroy = (req, res) => {
    res.send({
        "status": "Success",
        "data": { "id": req.body.id },
        "message": "Deleted Successfully"
    })
}