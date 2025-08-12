class Vector2 {
  constructor(x, y) {
    this.x=x;
    this.y=y;
  }
  add(x) {
    this.x+=x.x;
    this.y+=x.y;
    return this;
  }
  sub(x) {
    this.x-=x.x;
    this.y-=x.y;
    return this;
  }
  mult(x) {
    this.x*=x.x;
    this.y*=x.y;
    return this;
  }
  div(x) {
    this.x/=x.x;
    this.y/=x.y;
    return this;
  }
  pow(x) {
    this.x=Math.pow(this.x, x.x);
    this.y=Math.pow(this.y, x.y);
    return this;
  }
}
