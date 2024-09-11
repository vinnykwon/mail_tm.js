class MailTm {
	constructor() {
		this.api = "https://api.mail.tm"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
			"Accept": "application/json"
		}
	}

	async getDomains() {
		const response = await fetch(
			`${this.api}/domains`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async createAccount(address, password) {
		const response = await fetch(
			`${this.api}/accounts`, {
				method: "POST",
				body: JSON.stringify({
					address: address,
					password: password
				}),
				headers: this.headers
			})
		return response.json()
	}

	async getAccountToken(address, password) {
		const response = await fetch(
			`${this.api}/token`, {
				method: "POST",
				body: JSON.stringify({
					address: address,
					password: password
				}),
				headers: this.headers
			})
		data = await response.json()
		this.token = data.token 
		this.headers["Authorization"] = `Bearer ${this.token}`
		return data
	}

	async getMessages(page = 1) {
		const response = await fetch(
			`${this.api}/messages?page=${page}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAccountInfo() {
		const response = await fetch(
			`${this.api}/me`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAccountInfo(accountId) {
		const response = await fetch(
			`${this.api}/accounts/${accountId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}


	async deleteAccount(accountId) {
		const response = await fetch(
			`${this.api}/accounts/${accountId}`, {
				method: "DELETE",
				headers: this.headers
			})
		return response.status
	}
}

module.exports = {MailTm}
