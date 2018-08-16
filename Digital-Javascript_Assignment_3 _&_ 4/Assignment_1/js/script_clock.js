(function(){
	d = new Date();
	d = d.getSeconds();
	var t = d*1000;
	ts = 60000;
	tm_remaining = (60 - new Date().getMinutes())*60*1000; 

	updateHours();
	updateMinutes();
	updateSeonds();

	console.log(t);
	console.log(eval(ts-t));
	console.log(tm_remaining);

	/* for seconds */
	setInterval(()=>{
		updateSeonds();
	},1000);

	/*Update Minutes*/ 
	setTimeout(()=>{
		
		updateMinutes();

		setInterval(()=>{
		 	updateMinutes();
		 	
		 },ts);

		console.log('timeout complete');
	}, eval(ts-t) );

	/* Update Hours */

	 setTimeout(()=>{
		
		updateHours();

		setInterval(()=>{
		 	updateHours();
		 	console.log('Hours Updated');
		}, eval(3600*1000));

	}, tm_remaining  ); 

	/* Basic Functions definitons */

	function updateSeonds() {
		d = new Date();
		d=d.getSeconds();
		document.getElementById('seconds').innerHTML = d;
	}

	function updateMinutes() {
		d = new Date();
		d=d.getMinutes();
		document.getElementById('minutes').innerHTML = d;	
		
		return d;
	}

	function updateHours() {
		d = new Date();
		d=d.getHours();
		document.getElementById('hours').innerHTML = d;
	}
	
	/* Where the Magic Happens :D */

	var elems = document.getElementsByClassName('separators');

	var flag = 1;

	setInterval(()=>{

	
		if(flag == 1) {
			for(var i = 0; i<elems.length; i++){
				elems[i].innerHTML = '&nbsp;';
			}
			flag = 0;
		} else {
			flag = 1;

			for(var i = 0; i<elems.length; i++){
				elems[i].innerHTML = ':';
			}

		}
	

	},1000);

	

})();

