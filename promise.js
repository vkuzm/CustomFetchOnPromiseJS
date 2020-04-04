const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("ok");
	} else {
		reject("bad");
	}
});


promise
.then(result => result + "!")
.then(result => result.replace("ok", "ahahah"))
.then(result => console.log(result))
.catch(error => console.log(error));