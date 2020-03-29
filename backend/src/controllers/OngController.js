const connection = require('../database/connection');

const generateUniqueId = require('../utils/GenerateUniqueId');


module.exports = {

  async index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async store(request, response) {
    const {name, email, whatsapp, city, state} = request.body;

    const ongExists = await connection('ongs')
      .where('name', name)
      .select('*')
      .first();
      
    if (ongExists) {
      return response.send(403, {error: 'This name has already been taken by someone else.'});
    }

    const id = generateUniqueId();

    await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    state
  });

  return response.json({ id });
  }
};