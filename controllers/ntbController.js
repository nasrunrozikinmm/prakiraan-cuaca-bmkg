const axios = require('axios');
const xmlToJSON = require('../helpers/xmlToJSON');

module.exports = async (req, res) => {
  try {
    const result = await axios({
      url : 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraBarat.xml',
      method : 'GET'
    })
    const xml = result.data
    const area = await xmlToJSON(xml)
    res.status(200).json({status : true, area})
  } catch (error) {
    res.status(500).json(error)
  }
}