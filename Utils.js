export function degToRad(x) {
  return x*(Math.PI/180);
}

export function getFile(x) {
  fetch(x).then(e=>e.blob()).then(blob=>{return new File([blob], "mesh.obj")});
}
