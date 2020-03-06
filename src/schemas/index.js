const Joi = require('@hapi/joi');

const patchCartParams = Joi.object({
  id: Joi.number().required(),
});

const patchCartPayload = Joi.object({
  value: Joi.number().required(),
});

const patchQuantity = Joi.array().items(Joi.object());


module.exports = { patchCartParams, patchCartPayload, patchQuantity };
