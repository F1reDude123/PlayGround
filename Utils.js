export default var Utils={
  degToRad: (x) => {
    return x*(Math.PI/180);
  },
  getFile: (x) => {
    fetch(x).then(e=>e.blob()).then(blob=>{return new File([blob], "mesh.obj")});
  }
}
