const {body, param} = require('express-validator/check');

exports.findOne = () => {
    return [
        param('id', 'can\'t be negative').isInt({gt: 0})
    ]
};

exports.create = () => {
    const minLength = 2, maxLength = 255;
    return [
        body('name', 'is required')
            .exists(),
        body('name', 'can\'t be empty')
            .not().isEmpty()
            .trim()
            .escape(),
        body('name', `must be between ${minLength} and ${maxLength} characters long`)
            .isLength({min: minLength, max: maxLength})
    ]
};