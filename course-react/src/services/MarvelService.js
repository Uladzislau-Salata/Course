
class MarvelService {

	_apiBase = 'https://gateway.marvel.com/v1/public/';
	_apiKey = 'apikey=2a74b8ec54e23524fad42d9ef7083ae1';

	getResourse = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	}

	getAllCharacters = () => {
		return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
	}

	getCharacter = (id) => {
		return this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
	}



}

export default MarvelService




