const fetch = require("node-fetch");

console.log("fetch initiated");

fetch('http://localhost:8000/vendors')
.then((data) => {
	data.json().then((parsed) => {
		console.log(parsed);
		process.exit();
	});
});