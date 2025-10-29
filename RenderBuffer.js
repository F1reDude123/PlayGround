import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";

export default class RenderBuffer {
  vertices=[];
  indices=[];
  load(v, i) {
    this.vertices=v;
    this.indices=i;
  }
  getBufferData() {
    var data=[];
    var last3=[];
    for (var i=0;i<this.vertices.length;i++) {
      if (i%3==0) {
        data.push(new Polygon(this.vertices[last3[0]], this.vertices[last3[1]], this.vertices[last3[2]]));
      }
      last3.push(this.indices[i]);
    }
    return data;
  }
}
