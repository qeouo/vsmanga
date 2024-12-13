var imgdata;
var img;
var tb_level;
var start_stop=0;
var src;
var dst;
var filter;
var canvas;
var ctx;
var level;
var palette=[
	[0,0,0,255]
	,[0,0,0,255]
	,[128,128,128,255]
	,[192,192,192,255]
	,[255,255,255,255]
]

var CELL_SIZE;
var CELL_ROW;
var CELL_COL;
var brighten_step;
var square_gen;
var bold;

class Square{
	constructor(){
		this.x=0;
		this.y=0;
		this.t=0;
		this.status = 0;
	}
	move(){
		var x = this.x;
		var y =  this.y;
		this.t++;
		if(this.t ==0){
			this.fill(1,x+bold,y+bold,bold*2,bold*2);
		}else if(this.t ==3){
			this.fill(-1,x+bold,y+bold,bold*2,bold*2);
			this.fill(1,x,y,CELL_SIZE,CELL_SIZE);
		}else if(this.t ==6){
			this.fill(-2,x+bold,y+bold,bold*2,bold*2);
		}else if(this.t>=9){
			this.fill(+2,x+bold,y+bold,bold*2,bold*2);
			this.fill(-2,x,y,CELL_SIZE,CELL_SIZE);
			this.status = 0;
		}
	}
	draw(){
		var x = this.x;
		var y =  this.y;
		if(this.t <3){
			this.alpha_fill(x+bold,y+bold,bold*2,bold*2);
		}else if(this.t <6){
			this.alpha_fill(x,y,CELL_SIZE,CELL_SIZE);
		}else if(this.t <9){
			this.alpha_fill(x,y,CELL_SIZE,bold);
			this.alpha_fill(x,y+bold*3,CELL_SIZE,bold);
			this.alpha_fill(x,y+bold,bold,bold*2);
			this.alpha_fill(x+bold*3,y+bold,bold,bold*2);
		}
	}
	fill(num,x,y,w,h){
		var width = canvas.width;
		var w2 = Math.min(width,x+w);
		var h2 = Math.min(canvas.height,y+h);
		for(var i=y;i<h2;i++){
		for(var j=x;j<w2;j++){
			var idx = j + i*width;
			filter[idx]+=num;
		}
		}
	}
	alpha_fill(x,y,w,h){
		var width = canvas.width;
		var w2 = Math.min(width,x+w);
		var h2 = Math.min(canvas.height,y+h);
		for(var i=y;i<h2;i++){
		for(var j=x;j<w2;j++){
			var idx = j + i*width;
			dst[idx]=(dst[idx]*1 + 2*3)>>2;
		}
		}
	}


}
var squares = new Array(64);
for(var i=0;i<squares.length;i++){
	squares[i] = new Square();
}

function createSquare(){
	for(var i=0;i<squares.length;i++){
		square=squares[i];
		if(square.status===0){
			square.status=1;
		square.t = -1;
		square.x = (Math.random()*CELL_COL >>0) * CELL_SIZE;
		square.y = (Math.random()*CELL_ROW >>0) * CELL_SIZE;
		break;
		}
	}
}

function brighter(){
	level++;
	rendering();
}

function darker(){
	level--;
	rendering();
}

var step_count=0;
function main(){
	start_stop=!start_stop;
}
var brighten_step_count=0;
function step(){
	level = Number(tb_level.value);
	if(brighten_step <=brighten_step_count){
		level++;
		brighten_step_count=0;
	}
	brighten_step_count++;

	for(var i=0;i<square_gen;i++){
		createSquare();
	}

	for(var i=0;i<squares.length;i++){
		var square=squares[i];
		if(square.status===0)continue;
		square.move();
	}

	rendering();
}
function loop(){
	window.requestAnimationFrame(loop);
	if(!start_stop){
		return;
	}
	step_count++;
	if(step_count<4){
		return;
	}
	step_count=0;

	step();

}
function reset(){
	brighten_step = Number(document.getElementById("brighten_step").value);
	brighten_step_count=brighten_step;
	level=0;

	canvas.width = img.naturalWidth
	canvas.height = img.naturalHeight
	ctx.reset();
	var cell_num = Number(document.getElementById("cell_num").value);
	square_gen = Number(document.getElementById("square_gen").value);

	CELL_SIZE = (canvas.width /cell_num)|0;
	CELL_SIZE -=CELL_SIZE%4;

	CELL_ROW = (canvas.height / CELL_SIZE|0)+1;
	CELL_COL = (canvas.width / CELL_SIZE|0)+1;
	bold = CELL_SIZE>>2;

	src = new Int32Array(canvas.width*canvas.height);
	dst = new Int32Array(canvas.width*canvas.height);
	filter = new Int8Array(canvas.width*canvas.height);

		ctx.drawImage(img,0,0);
		imgdata = ctx.getImageData(0,0,canvas.width,canvas.height);
		var sidd = imgdata.data;

		for(var i=0;i<src.length;i++){
			var pidx = i<<2;

			var R= Math.pow(sidd[pidx+0]/255,2.2)
			var G =Math.pow(sidd[pidx+1]/255,2.2)
			var B = Math.pow(sidd[pidx+2]/255,2.2);
			var mono = 0.2126*R + 0.7152*G + 0.0722*B
			mono = Math.pow(mono,1/2.2)*255;
			src[i]= 0
			for(var j=1;j<5;j++){
				if(mono<64*j-2){
					break;
				}
				src[i]= j
			}
			if(src[i]===1)src[i]=0;
			src[i]=mono|0;
		}


		for(var i=0;i<squares.length;i++){
			squares[i].status=0;
		}
	rendering();
}

function rendering(){
	var width = canvas.width;
	var data = imgdata.data;
	for(var y = 0;y<canvas.height;y++){
		for(var x = 0;x<canvas.width;x++){
			var idx2 = (y*width+x);
			dst[idx2] =  src[idx2] + ((filter[idx2]  + level)<<6);
		}
	}

	for(var i=0;i<squares.length;i++){
		var square=squares[i];
		if(square.status===0)continue;
		square.draw();
	}
	for(var y = 0;y<canvas.height;y++){
		for(var x = 0;x<canvas.width;x++){

			var idx2 = (y*width+x);
			var idx = (y*width+x)<<2;

			palette_index = dst[idx2]>>6;
			var p = palette[Math.max(Math.min(4,palette_index),0)];

		data[idx] = p[0];
		data[idx+1] =p[1];
		data[idx+2] = p[2];
		data[idx+3] = p[3];
	}
}

	ctx.putImageData(imgdata,0,0);


	tb_level.value=level;

}

window.onload=()=>{
	tb_level = document.getElementById("level");
	img =document.getElementById("img");	
	canvas = document.getElementById("c");
	ctx = canvas.getContext("2d");

	loop();
}

function fileload(){
	img.src = URL.createObjectURL(event.target.files[0]);
	img.onload=()=>{reset();}
}
