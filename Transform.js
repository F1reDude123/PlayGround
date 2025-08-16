export default class Transform {
  constructor(pos, rot, scale) {
    this.pos=pos;
    this.rot=rot;
    this.scale=scale;
  }
  setPivotPoint(x) {
    this.pivot=x;
    return this;
  }
}
