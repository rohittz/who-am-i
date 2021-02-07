let newName = document.createElement("p");
function getNewName() {
	document.getElementsByTagName("main")[0].append(newName);
	fetch('https://randomuser.me/api/')
		.then(response => response.json())
		.then(data => {
			let userName= (data.results[0].name);
			newName.innerText = `${userName.title} ${userName.first} ${userName.last}`
		})
}
setInterval(() =>{
	getNewName();
}, 1000)
