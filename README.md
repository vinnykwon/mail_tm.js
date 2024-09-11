# mail_tm.js
Web-API for [mail.tm](https://mail.tm/en/) an temporary mail service that lets you communicate without exposing your personal email to potential threats

## Example
```JavaScript
async function main() {
	const { MailTm } = require("./mail_tm.js")
	const mailTm = new MailTm()
	const domains = await mailTm.getDomains()
	console.log(domains)
}

main()
```
