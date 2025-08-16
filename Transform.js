export default class Transform {
  constructor(pos, rot, scale) {
    this.pos=pos;
    this.rot=rot;
    this.scale=scale;
    this.pivot=new Vector3(this.scale.x/2, this.scale.y/2, this.scale.z/2);
  }
  setPivotPoint(x) {
    this.pivot=x;
    return this;
  }
}
