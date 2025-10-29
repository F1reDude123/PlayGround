import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";
import Vector2 from "https://f1redude123.github.io/PlayGround/Vector2.js";

export default class RenderBuffer {
  vertices=[];
  indices=[];
  constructor(s) {
    this.scene=s;
  }
  load(v, i) {
    this.vertices=v;
    this.indices=i;
  }
  #project(x) {
    return new Vector2(this.scene.canvas.width/2+x.x*this.scene.fov/(x.z+this.scene.fov), this.scene.canvas.height/2-x.y*this.scene.fov/(x.z+this.scene.fov));
  }
  getBufferData() {
    var data=[];
    for (var i=0;i<this.indices.length;i+=3) {
      data.push(new Polygon(this.#project(this.vertices[this.indices[i]]), this.#project(this.vertices[this.indices[i+1]]), this.#project(this.vertices[this.indices[i+2]])));
    }
    return data;
  }
}
