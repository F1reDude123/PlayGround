import Polygon from "https://f1redude123.github.io/PlayGround/Polygon.js";

class RenderBuffer {
  vertices=[];
  indices=[];
  load(v, i) {
    this.vertices=v;
    this.indices=i;
  }
  getBufferData() {
    var data=[];
    var last3=[];
    for (var i=0;i<vertices.length;i++) {
      if (i%3==0) {
        data.push(new Polygon(vertices[last3[0]], vertices[last3[1]], vertices[last3[2]]));
      }
      last3.push(indices[i]);
    }
    return data;
  }
}
