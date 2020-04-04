const fetch = require("node-fetch");

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

const requests = urls.map(url => {
	return fetch(url)
	.then(response => response.json());
});

Promise.all(requests)
.then(results => {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
})
.catch(() => console.log("error"));