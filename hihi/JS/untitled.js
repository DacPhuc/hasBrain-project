	function hehe(){
	var a=window.innerHeight;
	var c=document.querySelector(".part1Back");
	var d=document.querySelector(".part1Content");
	c.style.height = a + "px";
	d.style.height = a + "px";
}
	window.onresize = hehe;
