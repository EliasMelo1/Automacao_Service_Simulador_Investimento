import Joi from '@hapi/joi';

const simuladorSchema = Joi.object({
  "id": Joi.number(),
  "meses": Joi.array().items(
    Joi.string(),
  ),
  "valor": Joi.array().items(
    Joi.string()
  )
})

export default simuladorSchema;