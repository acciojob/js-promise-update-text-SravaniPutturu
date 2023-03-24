//your JS code here. If required.
var output = document.getElementById('output');
new Promise((resolve,reject)=>{
	setTimeout(()=>{
		output.innertText = "Hello, world!";
	},1000);
})