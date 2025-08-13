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
    // rot.x, rot.y, rot.z are in radians
    const cx = Math.cos(rot.x), sx = Math.sin(rot.x);
    const cy = Math.cos(rot.y), sy = Math.sin(rot.y);
    const cz = Math.cos(rot.z), sz = Math.sin(rot.z);
  
    // Combined rotation matrix for order X -> Y -> Z  (R = Rz * Ry * Rx)
    const m00 =  cz*cy;
    const m01 =  cz*sy*sx - sz*cx;
    const m02 =  cz*sy*cx + sz*sx;
  
    const m10 =  sz*cy;
    const m11 =  sz*sy*sx + cz*cx;
    const m12 =  sz*sy*cx - cz*sx;
  
    const m20 = -sy;
    const m21 =  cy*sx;
    const m22 =  cy*cx;
  
    const x = this.x, y = this.y, z = this.z;
    this.x = m00*x + m01*y + m02*z;
    this.y = m10*x + m11*y + m12*z;
    this.z = m20*x + m21*y + m22*z;
    return this;
  }
}
