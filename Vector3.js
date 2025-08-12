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
  rotateX(angle) {
    const y = this.y;
    const z = this.z;
    this.y = y * Math.cos(angle) - z * Math.sin(angle);
    this.z = y * Math.sin(angle) + z * Math.cos(angle);
    return this;
  }
  
  rotateY(angle) {
    const x = this.x;
    const z = this.z;
    this.x = x * Math.cos(angle) + z * Math.sin(angle);
    this.z = -x * Math.sin(angle) + z * Math.cos(angle);
    return this;
  }
  
  rotateZ(angle) {
    const x = this.x;
    const y = this.y;
    this.x = x * Math.cos(angle) - y * Math.sin(angle);
    this.y = x * Math.sin(angle) + y * Math.cos(angle);
    return this;
  }
}
