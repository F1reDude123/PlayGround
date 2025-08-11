class Vector3 {
  constructor(x, y, z) {
    this.x=x;
    this.y=y;
    this.z=z;
  }
  add(x, y, z) {
    this.x+=x;
    this.y+=y;
    this.z+=z;
    return this;
  }
  add(x) {
    this.x+=x;
    this.y+=x;
    this.z+=x;
    return this;
  }
  sub(x, y, z) {
    this.x-=x;
    this.y-=y;
    this.z-=z;
    return this;
  }
  sub(x) {
    this.x-=x;
    this.y-=x;
    this.z-=x;
    return this;
  }
  mult(x, y, z) {
    this.x*=x;
    this.y*=y;
    this.z*=z;
    return this;
  }
  mult(x) {
    this.x*=x;
    this.y*=x;
    this.z*=x;
    return this;
  }
  div(x, y, z) {
    this.x/=x;
    this.y/=y;
    this.z/=z;
    return this;
  }
  div(x) {
    this.x/=x;
    this.y/=x;
    this.z/=x;
    return this;
  }
  pow(x, y, z) {
    this.x=Math.pow(this.x, x);
    this.y=Math.pow(this.y, y);
    this.z=Math.pow(this.z, z);
  }
  pow(x) {
    this.x=Math.pow(this.x, x);
    this.y=Math.pow(this.y, x);
    this.z=Math.pow(this.z, x);
  }
}
