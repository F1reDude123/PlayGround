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
  rotateX(x) {
    this.y=this.y*Math.cos(x)-this.z*Math.sin(x);
    this.z=this.y*Math.sin(x)+this.z*Math.sin(x);
  }
  rotateY(x) {
    this.x=this.x*Math.cos(x)-this.z*Math.sin(x);
    this.z=this.x*Math.sin(x)+this.z*Math.sin(x);
  }
  rotateZ(x) {
    this.x=this.x*Math.cos(x)-this.y*Math.sin(x);
    this.y=this.x*Math.sin(x)+this.y*Math.sin(x);
  }
}
