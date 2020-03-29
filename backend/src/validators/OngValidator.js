const { celebrate, Segments, Joi } = require('celebrate');

const OngValidateStore = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(11).max(14),
    city: Joi.string().required(),
    UF: Joi.string().required().length(2),
  })
});

module.exports = OngValidateStore ;