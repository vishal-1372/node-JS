const Joi = require('joi');

exports.createStudent = (req, res, next) => {
    const studentScheme = Joi.object({
        "username": Joi.string().required(),
        "password": Joi.number().required(),
        "email": Joi.string().required(),
    });

    const { error } = studentScheme.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
}



#commit
