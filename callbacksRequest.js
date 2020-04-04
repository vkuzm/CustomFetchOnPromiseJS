var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const httpRequest = (url, callback) => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			callback(JSON.parse(this.responseText))
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

httpRequest("https://jsonplaceholder.typicode.com/users", function callback(result) {
	const getUsers = result;

	httpRequest("https://jsonplaceholder.typicode.com/posts", function callback(result) {
		const getPosts = result;

		httpRequest("https://jsonplaceholder.typicode.com/albums", function callback(result) {
			const getAlbums = result;

			//console.log(getUsers);
			//console.log(getPosts);
			//console.log(getAlbums);
		});

	});
});

function addEventListener(action, callback) {
			var event = {test: "testr"};
			callback(event);
}


addEventListener("submit", function(e) {
	console.log(e);
})

