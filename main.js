import Vector3 from "https://f1redude123.github.io/PlayGround/Vector3.js";
import Vector2 from "https://f1redude123.github.io/PlayGround/Vector2.js";
import Transform from "https://f1redude123.github.io/PlayGround/Transform.js";
import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";
export default class Scene {
  objects = [];
  constructor(width = null, height = null) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width || window.innerWidth;
    this.canvas.height = height || window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.fov = 500;
    this.cam = new Transform(new Vector3(0, 0, 0), new Vector3(0, 0, 0), new Vector3(0, 0, 0));
    document.documentElement.appendChild(this.canvas);
    this.draw();
  }
  project(x) {
    return new Vector2(this.canvas.width/2+x.x*this.fov/(x.z+this.fov), this.canvas.height/2-x.y*this.fov/(x.z+this.fov));
  }
  polygon(x, y, z) {
    this.objects.push(new Polygon(this.project(x), this.project(y), this.project(z)));
  }
  plane(t){
    this.polygon(new Vector3(-t.scale.x/2, -t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos), new Vector3(t.scale.x/2, -t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos), new Vector3(-t.scale.x/2, t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos));    
    this.polygon(new Vector3(t.scale.x/2, -t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos), new Vector3(-t.scale.x/2, t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos), new Vector3(t.scale.x/2, t.scale.y/2, -t.scale.z/2).rotateX(t.rot.x).rotateY(t.rot.y).rotateZ(t.rot.z).add(t.pos));
  }
  degToRad(x) {
    return x*(Math.PI/180);
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.objects.forEach(e => {
      this.ctx.beginPath();
      this.ctx.moveTo(e.p1.x, e.p1.y);
      this.ctx.lineTo(e.p2.x, e.p2.y);
      this.ctx.lineTo(e.p3.x, e.p3.y);
      this.ctx.lineTo(e.p1.x, e.p1.y);
      this.ctx.closePath();
      this.ctx.fillStyle = "#000";
      this.ctx.fill();
    });
    requestAnimationFrame(()=>this.draw());
  }
}
