class Shape {
  constructor(x,y, radius, ax,ay, m, vx =0, vy = 0) {
    this.x = x;
    this.y = y;
    this.r = radius;
    this.ax = ax;
    this.ay = ay;
    this.m = m;
    this.vx = vx;
    this.vy = vy;
    this.fx = 0;
    this.fy = 0;
  }

  move(dt) {
    this.vx+=this.ax*dt;
    this.vy+=this.ay*dt;
    this.x+= this.vx * dt;
    this.y+= this.vy * dt;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
  resolveEdgeCollision() {
    if(this.x+ this.r > c.width) {
      this.x = c.width - this.r;
      this.vx = -this.vx;
      this.ax = -this.ax;
    }
    if(this.y + this.r > c.height) {
      this.y = c.height - this.r;
      this.vy = -this.vy;
      this.ay = -this.ay;
    }
    if(this.x - this.r < 0) {
      this.x = this.r;
      this.vx = -this.vx;
      this.ax = -this.ax;
    }
    if(this.y - this.r < 0) {
      this.y = this.r;
      this.vy = -this.vy;
      this.ay = -this.ay;
    }
  }
}
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const shape = new Shape(0,100, 10, 0, 0, 20, 35,-45)

function animate(){
  ctx.clearRect(0, 0, c.width, c.height);
  shape.move(0.1);
  shape.resolveEdgeCollision();
  shape.draw();
  console.log(shape)
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);