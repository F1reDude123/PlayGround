import Vector3 from "https://f1redude123.github.io/PlayGround/Vector3.js";

export default class Transform {
  constructor(pos, rot, scale) {
    this.pos=pos;
    this.rot=rot;
    this.scale=scale;
    this.pivot=pos;
  }
  setPivotPoint(x) {
    this.pivot=x;
    return this;
  }
}
