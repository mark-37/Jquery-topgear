(function(){
	var d = new Date().getSeconds();
	var interval = eval(60000 - d*1000);

	console.log(d);

	setTimeNow();

	setTimeout(function() {
		setInterval(setTimeNow, 60000);
	}, eval(1000+interval));

	function setTimeNow(){
		var d = new Date();
		var hour = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();

		console.log(hour+':'+minutes+':'+seconds);
	}
	



	//console.log('finished');

})();