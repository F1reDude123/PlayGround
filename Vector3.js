export default class Vector3 {
  constructor(x, y, z) {
    this.x=x;
    this.y=y;
    this.z=z;
  }
  add(x) {
    return new Vector3(this.x+x.x, this.y+x.y, this.z+x.z);
  }
  sub(x) {
    return new Vector3(this.x-x.x, this.y-x.y, this.z-x.z);
  }
  mult(x) {
    return new Vector3(this.x*x.x, this.y*x.y, this.z*x.z);
  }
  div(x) {
    return new Vector3(this.x/x.x, this.y/x.y, this.z/x.z);
  }
  pow(x) {
    this.x=Math.pow(this.x, x.x);
    this.y=Math.pow(this.y, x.y);
    this.z=Math.pow(this.z, x.z);
    return this;
  }
  rotateX(x) {
    return new Vector3(this.x, this.y*Math.cos(x)-this.z*Math.sin(x), this.y*Math.sin(x)+this.z*Math.cos(x));
  }
  rotateY(x) {
    return new Vector3(this.x*Math.cos(x)+this.z*Math.sin(x), this.y, -this.x*Math.sin(x)+this.z*Math.cos(x));
  }
  rotateZ(x) {
    return new Vector3(this.x*Math.cos(x)-this.y*Math.sin(x), this.x*Math.sin(x)+this.y*Math.cos(x), this.z);
  }
}
