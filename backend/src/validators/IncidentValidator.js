const { celebrate, Segments, Joi } = require('celebrate');

const IncidentValidateShow = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
});

const IncidentValidateDelete = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
});

const IncidentValidateIndex = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
});

const IncidentValidateStore = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
});

module.exports = { IncidentValidateShow, IncidentValidateDelete, IncidentValidateIndex, IncidentValidateStore };