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
    this.cam = new Transform(new Vector3(0, 0, 0), new Vector3(0, 0, 0), new Vector3(0, 0, 0));
    document.documentElement.appendChild(this.canvas);
    this.draw();
  }
  project(x) {
    return new Vector2(this.canvas.width/2+x.x/x.z, this.canvas.height/2-x.y/x.z);
  }
  polygon(x, y, z) {
    this.objects.push(new Polygon(this.project(x), this.project(y), this.project(z)));
  }
  plane(pos, rot, scale) {
    this.polygon(new Vector3(pos.x-scale.x/2, pos.y, pos.z-scale.z/2).rotate(rot), new Vector3(pos.x+scale.x/2, pos.y, pos.z-scale.z/2).rotate(rot), new Vector3(pos.x-scale.x/2, pos.y, pos.z+scale.z/2).rotate(rot));
    this.polygon(new Vector3(pos.x-scale.x/2, pos.y, pos.z+scale.z/2).rotate(rot), new Vector3(pos.x+scale.x/2, pos.y, pos.z-scale.z/2).rotate(rot), new Vector3(pos.x+scale.x/2, pos.y, pos.z+scale.z/2).rotate(rot));
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
