export default class Vector3 {
  constructor(x, y, z) {
    this.x=x;
    this.y=y;
    this.z=z;
  }
  add(x) {
    this.x+=x.x;
    this.y+=x.y;
    this.z+=x.z;
    return this;
  }
  sub(x) {
    this.x-=x.x;
    this.y-=x.y;
    this.z-=x.z;
    return this;
  }
  mult(x) {
    this.x*=x.x;
    this.y*=x.y;
    this.z*=x.z;
    return this;
  }
  div(x) {
    this.x/=x.x;
    this.y/=x.y;
    this.z/=x.z;
    return this;
  }
  pow(x) {
    this.x=Math.pow(this.x, x.x);
    this.y=Math.pow(this.y, x.y);
    this.z=Math.pow(this.z, x.z);
    return this;
  }
  rotate(rot) {
    var y = this.y * Math.cos(rot.x) - this.z * Math.sin(rot.x);
    var z = this.y * Math.sin(rot.x) + this.z * Math.cos(rot.x);
    this.y = y;
    this.z = z;
    var x = this.x * Math.cos(rot.y) + this.z * Math.sin(rot.y);
    z = -this.x * Math.sin(rot.y) + this.z * Math.cos(rot.y);
    this.x = x;
    this.z = z;
    x = this.x * Math.cos(rot.z) - this.y * Math.sin(rot.z);
    y = this.x * Math.sin(rot.z) + this.y * Math.cos(rot.z);
    this.x = x;
    this.y = y;
    return this;
  }
}
