import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://ultimate-tennis1.p.rapidapi.com/player_info/mm58',
  headers: {
    'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
    'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}