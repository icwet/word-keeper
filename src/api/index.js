export default class Api {
	constructor(url = "", method = "get", headers = {}) {
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
			dispatch(success(words));
		} catch (e) {
			dispatch(error(e));
		}
	}
}
