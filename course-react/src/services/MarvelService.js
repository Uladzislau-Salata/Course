
// import md5 from 'md5';

class MarvelService {

	// _apiBase = 'https://gateway.marvel.com/v1/public/';// Marvel
	// _apiPublicKey = '2a74b8ec54e23524fad42d9ef7083ae1';// Marvel
	// _apiPrivateKey = '946d7fc8d27a238be0a5c79e2ad75a73e9531a3d';// Marvel
	// _baseOffset = 210;// Marvel
	// apiTs = Date.now().toString();// Marvel

	_apiBase = 'https://marvel-server-zeta.vercel.app/';// Резервный
	_apiPublicKey = 'd4eecb0c66dedbfae4eab45d312fc1df';// Резервный
	_baseOffset = 1;// Резервный

	// constructor() {
	// 	this._apiHash = md5(this.apiTs + this._apiPrivateKey + this._apiPublicKey);
	// }

	// _generateHash = () => {
	// 	this.apiTs = Date.now().toString();
	// 	this._apiHash = md5(
	// 		this.apiTs +
	// 		this._apiPrivateKey +
	// 		this._apiPublicKey
	// 	);
	// }


	getResourse = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	}

	getAllCharacters = async (offset = this._baseOffset) => {
		// this._generateHash();
		const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&apikey=${this._apiPublicKey}`);
		return res.data.results.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		// this._generateHash();
		const res = await this.getResourse(`${this._apiBase}characters/${id}?&apikey=${this._apiPublicKey}`);

		return this._transformCharacter(res.data.results[0]);
	}

	_transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description: char.description ? `${char.description.slice(0, 19)}...` : 'There is no description for this character',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics.items
		}
	}

}

export default MarvelService




