(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Terrain stuff.
var anim = document.getElementById("anim"),
  animCtx = anim.getContext("2d"),
  width = window.innerWidth,
  height = document.body.offsetHeight;
  (height < 400)?height = 400:height;

anim.width = width;
anim.height = height;

var points = [],
  displacement = 140,
  power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

points[0] = (height - (Math.random() * height / 2)) - displacement;
points[power] = (height - (Math.random() * height/2)) - displacement;

for(var i = 1; i<power; i*=2){
  for(var j = (power/i)/2; j <power; j+=power/i){
    points[j] = ((points[j - (power/i)/2] + points[j + (power/i)/2]) / 2) + Math.floor(Math.random()*-displacement+displacement );
  }
  displacement *= 0.6;
}

function FlyAway() {
  this.reset()
}

FlyAway.prototype.reset = function() {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = (Math.random()*80)+10;
  this.speed = (Math.random()*10)+6;
  this.size = (Math.random()*1)+0.1;
  this.waitTime =  new Date().getTime() + (Math.random()*3000)+500;
  this.active = false;
}

FlyAway.prototype.update = function(){
  if(this.active){
    this.x-=this.speed;
    this.y+=this.speed;
    if(this.x < 0 || this.y >= height){
      this.reset();
    }else{
    animCtx.lineWidth = this.size;
      animCtx.beginPath();
      animCtx.moveTo(this.x,this.y);
      animCtx.lineTo(this.x+this.len, this.y-this.len);
      animCtx.stroke();
    }
  }else{
    if(this.waitTime < new Date().getTime()){
      this.active = true;
    }			
  }
}

var entities = [],
    rand = (Math.floor(Math.random() * 30) + 2);

for(var i=0;i<rand;i++) {
  entities.push(new FlyAway());
}

function animate(){
  animCtx.fillStyle = '#EEEEEEE';
  animCtx.fillRect(0,0,width,height);
  animCtx.fillStyle = '#EEEEEE';
  animCtx.strokeStyle = '#666666';

  var entLen = entities.length;
  
  while(entLen--){
    entities[entLen].update();
  }
  
  requestAnimationFrame(animate);
}
animate();
