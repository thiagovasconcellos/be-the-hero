const { celebrate, Segments, Joi } = require('celebrate');

const OngValidateStore = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    city: Joi.string().required(),
    state: Joi.string().required().length(2),
  })
});

module.exports = OngValidateStore ;