import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";

export default class RenderBuffer {
  vertices=[];
  indices=[];
  constructor() {}
  load(v, i) {
    this.vertices=v;
    this.indices=i;
  }
  #project(x) {
    return new Vector2(this.canvas.width/2+x.x*this.fov/(x.z+this.fov), this.canvas.height/2-x.y*this.fov/(x.z+this.fov));
  }
  getBufferData() {
    var data=[];
    var last3=[];
    for (var i=0;i<this.vertices.length;i++) {
      if (i%3==0) {
        data.push(new Polygon(this.#project(this.vertices[last3[0]]), this.#project(this.vertices[last3[1]]), this.#project(this.vertices[last3[2]])));
      }
      last3.push(this.indices[i]);
    }
    return data;
  }
}
