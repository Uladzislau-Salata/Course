
// import md5 from 'md5';
import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

	const { loading, request, error, clearError } = useHttp();

	// _apiBase = 'https://gateway.marvel.com/v1/public/';// Marvel
	// _apiPublicKey = '2a74b8ec54e23524fad42d9ef7083ae1';// Marvel
	// _apiPrivateKey = '946d7fc8d27a238be0a5c79e2ad75a73e9531a3d';// Marvel
	// _baseOffset = 210;// Marvel
	// apiTs = Date.now().toString();// Marvel

	const _apiBase = 'https://marvel-server-zeta.vercel.app/';// Резервный
	const _apiPublicKey = 'd4eecb0c66dedbfae4eab45d312fc1df';// Резервный
	const _baseOffset = 1;// Резервный

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

	const getAllCharacters = async (offset = _baseOffset) => {
		// this._generateHash();
		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&apikey=${_apiPublicKey}`);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacter = async (id) => {
		// this._generateHash();
		const res = await request(`${_apiBase}characters/${id}?&apikey=${_apiPublicKey}`);

		return _transformCharacter(res.data.results[0]);
	}

	const getAllComics = async (offset = 0) => {
		const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&apikey=${_apiPublicKey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComics = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?apikey=${_apiPublicKey}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformCharacter = (char) => {
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

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	return { loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComics }

}

export default useMarvelService;




