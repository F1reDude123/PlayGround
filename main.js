import Vector3 from "https://f1redude123.github.io/PlayGround/Vector3.js";
import Vector2 from "https://f1redude123.github.io/PlayGround/Vector2.js";
import Transform from "https://f1redude123.github.io/PlayGround/Transform.js";
import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";
import RenderBuffer from "https://f1redude123.github.io/PlayGround/RenderBuffer.js";

export default class Scene {
  buffers = [];
  constructor(width = null, height = null) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width || window.innerWidth;
    this.canvas.height = height || window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.fov = 500;
    document.body.appendChild(this.canvas);
  }
  #project(x) {
    return new Vector2(this.canvas.width/2+x.x*this.fov/(x.z+this.fov), this.canvas.height/2-x.y*this.fov/(x.z+this.fov));
  }
  polygon(x, y, z, tex = null) {
    this.objects.push(new Polygon(this.#project(x), this.#project(y), this.#project(z)));
  }
  createBuffer(v) {
    this.buffers.push(v);
  }
  loadBuffer(slot, p, i) {
    this.buffers[slot].load(p, i);
  }
  renderBuffer(slot) {
    this.#draw(this.buffers[slot].getBufferData());
  }
  #draw(data) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    data.forEach(e => {
      this.ctx.beginPath();
      this.ctx.moveTo(e.p1.x, e.p1.y);
      this.ctx.lineTo(e.p2.x, e.p2.y);
      this.ctx.lineTo(e.p3.x, e.p3.y);
      this.ctx.lineTo(e.p1.x, e.p1.y);
      this.ctx.closePath();
      this.ctx.fill();
    });
  }
}
