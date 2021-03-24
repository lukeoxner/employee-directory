import axios from 'axios';

export default function () {
	return axios.get('https://randomuser.me/api/?results=100');
}
