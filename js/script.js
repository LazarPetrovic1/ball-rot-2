// INPUT TYPE RANGE
const rotX1 = document.getElementById('rotX1'),
      rotY1 = document.getElementById('rotY1'),
      rotZ1 = document.getElementById('rotZ1'),
      transX1 = document.getElementById('transX1'),
      transY1 = document.getElementById('transY1'),
      transZ1 = document.getElementById('transZ1'),
      scale1 = document.getElementById('scale1'),
      skewX1 = document.getElementById('skewX1'),
      skewY1 = document.getElementById('skewY1');
// INPUT TYPE NUMBER
const rotX2 = document.getElementById('rotX2'),
      rotY2 = document.getElementById('rotY2'),
      rotZ2 = document.getElementById('rotZ2'),
      transX2 = document.getElementById('transX2'),
      transY2 = document.getElementById('transY2'),
      transZ2 = document.getElementById('transZ2'),
      scale2 = document.getElementById('scale2'),
      skewX2 = document.getElementById('skewX2'),
      skewY2 = document.getElementById('skewY2');

const voider1 = document.getElementById('voider1');
let foreground = document.getElementById('foreground');
let background = document.getElementById('background');
let paths = document.getElementsByTagName('path');
let svg = document.getElementById('svg');

foreground.addEventListener('input', (e) => {
  for(let i = 0; i < paths.length; i++) {
    paths[i].style.stroke = e.target.value;
    paths[i].style.fill = e.target.value;
  }
});

voider1.addEventListener('click', () => {
  for(let i = 0; i < paths.length; i++) {
    paths[i].style.stroke = 'none';
    paths[i].style.fill = 'black';
  }
  foreground.value = `#000000`;
});

rotX1.addEventListener('input', (e) => {
  rotX2.value = e.target.value;
});

rotX2.addEventListener('input', (e) => {
  rotX1.value = e.target.value;
});

rotY1.addEventListener('input', (e) => {
  rotY2.value = e.target.value;
});

rotY2.addEventListener('input', (e) => {
  rotY1.value = e.target.value;
});

rotZ1.addEventListener('input', (e) => {
  rotZ2.value = e.target.value;
});

rotZ2.addEventListener('input', (e) => {
  rotZ1.value = e.target.value;
});

transX1.addEventListener('input', (e) => {
  transX2.value = e.target.value;
});

transX2.addEventListener('input', (e) => {
  transX1.value = e.target.value;
});

transY1.addEventListener('input', (e) => {
  transY2.value = e.target.value;
});

transY2.addEventListener('input', (e) => {
  transY1.value = e.target.value;
});

transZ1.addEventListener('input', (e) => {
  transZ2.value = e.target.value;
});

transZ2.addEventListener('input', (e) => {
  transZ1.value = e.target.value;
});

scale1.addEventListener('input', (e) => {
  scale2.value = e.target.value;
});

scale2.addEventListener('input', (e) => {
  scale1.value = e.target.value;
});

skewX1.addEventListener('input', (e) => {
  skewX2.value = e.target.value;
});

skewX2.addEventListener('input', (e) => {
  skewX1.value = e.target.value;
});

skewY1.addEventListener('input', (e) => {
  skewY2.value = e.target.value;
});

skewY2.addEventListener('input', (e) => {
  skewY1.value = e.target.value;
});

rotX1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

rotY1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

rotZ1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

transX1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

transY1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

transZ1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

scale1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

skewX1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

skewY1.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX1.value}deg)
  rotateY(${rotY1.value}deg)
  rotateZ(${rotZ1.value}deg)
  translateX(${transX1.value}px)
  translateY(${transY1.value}px)
  translateZ(${transZ1.value}px)
  scale(${scale1.value})
  skewX(${skewX1.value}deg)
  skewY(${skewY1.value}deg)
  `;
});

rotX2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

rotY2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

rotZ2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

transX2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

transY2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

transZ2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

scale2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

skewX2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});

skewY2.addEventListener('input', () => {
  svg.style.transform = `
  rotateX(${rotX2.value}deg)
  rotateY(${rotY2.value}deg)
  rotateZ(${rotZ2.value}deg)
  translateX(${transX2.value}px)
  translateY(${transY2.value}px)
  translateZ(${transZ2.value}px)
  scale(${scale2.value})
  skewX(${skewX2.value}deg)
  skewY(${skewY2.value}deg)
  `;
});
