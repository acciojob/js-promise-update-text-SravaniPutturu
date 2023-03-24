//your JS code here. If required.

const myPromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!")
	},1000);
})
var res = "Hello, world!";

myPromise.then((result)=>{
	document.getElementById('output').innerText = result;
})