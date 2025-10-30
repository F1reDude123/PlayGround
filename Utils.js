var Utils={
  degToRad: (x) => {
    return x*(Math.PI/180);
  },
  getFile: (x) => {
    return fetch(x).then(e=>e.blob()).then(blob=>{return new File([blob], "mesh.obj")});
  }
};
export default Utils;
