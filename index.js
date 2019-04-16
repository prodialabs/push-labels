const axios = require('axios');
const labels = require('./labels');

(async () => {
	const [,,token, repo] = process.argv;

	console.log(token, repo);

	for(const label of labels) {
		label.color = label.color.slice(1);

		try {
			await axios.post(`https://api.github.com/repos/${repo}/labels`, label, {
				headers: {
					Authorization: `token ${token}`
				}
			});
		} catch(error) {
			console.log(error);
			console.log(error.body);
		}
	}
})();
