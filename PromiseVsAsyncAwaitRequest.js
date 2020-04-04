
const fetch = require("node-fetch");

// Promise
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(result => result.json())
.then(result => console.log('Promise', result));

// Async / Await
async function getUsers() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
	const data = await response.json();

	console.log("Async / Await", data);
}
getUsers();
