// JavaScript Document

var photo = document.getElementsByClassName('photo');
var ph_img = photo.getELementsByTagName('img')[0];
addEventListener('load',function (){
	opacity(ph_img, 10, 100 ,50,endFn)
	},false)