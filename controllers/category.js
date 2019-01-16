const createError = require('http-errors');
const models = require('../models/index');
/** @namespace models.category */
const Category = models.category;

exports.findOne = (req, res, next) => {
    req.getValidationResult()
        .then(errors => {
            if (!errors.isEmpty()) {
                return next(createError(422,
                    'Validation error: ' + errors.array()
                        .map(i => `'${i.param}': ${i.msg}`)
                        .join(', '))
                );
            }

            Category.findOne({where: {id: req.params.id}})
                .then(category => {
                    if (!category) {
                        return next(createError(404, `Category with id ${req.params.id} does not exist`))
                    }
                    res.json(category);
                }).catch(err => {
                return next(createError(400, err))
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        })
};

exports.findAll = (req, res) => {
    Category.findAll().then(categories => {
        res.json(categories.sort(function (c1, c2) {
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

            Category.create({'name': req.body.name}, {fields: ['name']})
                .then(category => res.status(201).json(category))
                .catch(err => {
                    return next(createError(400, err))
                })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err})
        })
};