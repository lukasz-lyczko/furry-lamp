const createError = require('http-errors');
const models = require('../models/index');
/** @namespace models.brand */
const Brand = models.brand;

exports.findOne = (req, res) => {
    Brand.findOne({where: {id: req.params.id}})
        .then(brand => {
            res.json(brand);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })
};

exports.findAll = (req, res) => {
    Brand.findAll().then(brands => {
        res.json(brands.sort(function (c1, c2) {
            return c1.id - c2.id
        }))
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err})
    })
};

exports.create = (req, res, next) => {
    req.getValidationResult()
        .then(errors => {
            if (!errors.isEmpty()) {
                return next(createError(422,
                    'Validation error: ' + errors.array()
                        .map(i => `'${i.param}': ${i.msg}`)
                        .join(', '))
                );
            }

            Brand.create({'name': req.body.name}, {fields: ['name']})
                .then(brand => res.status(201).json(brand))
                .catch(err => {
                    return next(createError(400, err))
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err})
        })
};