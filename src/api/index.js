export default class Api {
	constructor(
		url = "",
		method = "get",
		headers = {
			"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
			"x-rapidapi-key": process.env.REACT_APP_API_KEY,
		}
	) {
		this._url = url;
		this._method = method;
		this._headers = new Headers(headers);
	}
	async getWords(dispatch, before, success, error) {
		dispatch(before());
		try {
			const request = await fetch(this._url, {
				method: this._method,
				headers: this._headers,
			});
			const words = await request.json();
			const wordsData = words.results.data.map(async (word) => {
				const getWordData = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
					method: "get",
					headers: this._headers,
				});
				return await getWordData.json();
			});
			Promise.all(wordsData).then((data) => {
				const formatWordsData = data.map((word) => {
					return {
						name: word.word,
						partOfSpeech: (word.results && word.results[0].partOfSpeech) || "",
						description: (word.results && word.results[0].definition) || "",
					};
				});
				dispatch(success(formatWordsData));
			});
		} catch (e) {
			dispatch(error(e));
		}
	}
}
