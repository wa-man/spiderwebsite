import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './style.css';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.set(0, 0, 0);
// camera.position.setZ(30);

renderer.setClearColor( 0xededed );

// const ambientLight = new THREE.AmbientLight( 0xffffff, 1);

const gridHelper = new THREE.GridHelper(200, 50);

const controls = new OrbitControls( camera, renderer.domElement );

// scene.add(ambientLight);
// scene.add(gridHelper);

// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
// const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
// const torus = new THREE.Mesh( geometry, material );

// const pointLight = new THREE.PointLight( 0xffffff );
// pointLight.position.set( 5, 5, 5 );

const TXTRLouise = new THREE.TextureLoader().load('louise.jpg');
const louise = new THREE.Mesh(
  new THREE.PlaneGeometry(7.5, 7.5),
  new THREE.MeshBasicMaterial({ map: TXTRLouise })
);
const frame = new THREE.Mesh(
  new THREE.BoxGeometry(8.5, 8.5, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
louise.position.x = -40;
louise.position.y = 4.7;
louise.position.z = -30;
frame.position.x = louise.position.x;
frame.position.y = louise.position.y;
frame.position.z = louise.position.z - 0.5;
scene.add(louise, frame);

const TXTRLouise2 = new THREE.TextureLoader().load('louise2.jpg');
const louise2 = new THREE.Mesh(
  new THREE.PlaneGeometry(3.1, 3.1),
  new THREE.MeshBasicMaterial({ map: TXTRLouise2 })
);
const frame2 = new THREE.Mesh(
  new THREE.BoxGeometry(4.1, 4.1, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
louise2.position.x = -46.5;
louise2.position.y = 6.9;
louise2.position.z = -30;
frame2.position.x = louise2.position.x;
frame2.position.y = louise2.position.y;
frame2.position.z = louise2.position.z - 0.5;
scene.add(louise2, frame2);

const TXTRLouise3 = new THREE.TextureLoader().load('louise3.jpg');
const louise3 = new THREE.Mesh(
  new THREE.PlaneGeometry(3.1, 3.1),
  new THREE.MeshBasicMaterial({ map: TXTRLouise3 })
);
const frame3 = new THREE.Mesh(
  new THREE.BoxGeometry(4.1, 4.1, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
louise3.position.x = -46.5;
louise3.position.y = 2.6;
louise3.position.z = -30;
frame3.position.x = louise3.position.x;
frame3.position.y = louise3.position.y;
frame3.position.z = louise3.position.z - 0.5;
scene.add(louise3, frame3);

let maman, human;
let loader = new GLTFLoader();

const mamanLight = new THREE.PointLight( 0xeb4034, 1000, 0);
const mLightHelper = new THREE.PointLightHelper( mamanLight, 5, 0x000000);
loader.load('./maman.glb', function( gltf ) {
  maman = gltf.scene;
  maman.position.x = -15;
  maman.position.z = -30;
  maman.rotation.y = 90;
  scene.add( gltf.scene );
  mamanLight.position.x = maman.position.x;
  mamanLight.position.y = maman.rotation.y - 80;
  mamanLight.position.z = maman.position.z;
  // mamanLight.position.set(0, 0, 0);
  scene.add( mamanLight, mLightHelper );
}, undefined, function( err ) {
  console.log( err );
});
loader.load('./human.glb', function( gltf ) {
  human = gltf.scene;
  human.position.x = -21.7;
  human.position.z = maman.position.z + 3;
  scene.add( gltf.scene );
}, undefined, function( err ) {
  console.log( err );
});

const TXTReyeBench = new THREE.TextureLoader().load('eyebenches.jpg');
const eyeBench = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 12),
  new THREE.MeshBasicMaterial({ map: TXTReyeBench })
);
const frame4 = new THREE.Mesh(
  new THREE.BoxGeometry(21, 13, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
eyeBench.position.x = 12;
eyeBench.position.y = 6.5;
eyeBench.position.z = -30;
frame4.position.x = eyeBench.position.x;
frame4.position.y = eyeBench.position.y;
frame4.position.z = eyeBench.position.z - 0.5;
scene.add(eyeBench, frame4);

const TXTRhands = new THREE.TextureLoader().load('hands.jpg');
const hands = new THREE.Mesh(
  new THREE.PlaneGeometry(4, 3),
  new THREE.MeshBasicMaterial({ map: TXTRhands })
);
const frame5 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 4, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
hands.position.x = 23.5;
hands.position.y = 0.23;
hands.position.z = -30;
frame5.position.x = hands.position.x;
frame5.position.y = hands.position.y;
frame5.position.z = hands.position.z - 0.1;
hands.scale.set(0.1, 0.1)
frame5.scale.set(0.1, 0.1, 0.1);
scene.add(hands, frame5);

const TXTRspider = new THREE.TextureLoader().load('spider.jpg');
const spider = new THREE.Mesh(
  new THREE.PlaneGeometry(7, 5),
  new THREE.MeshBasicMaterial({ map: TXTRspider })
);
const frame6 = new THREE.Mesh(
  new THREE.BoxGeometry(8, 6, 0.5),
  new THREE.MeshStandardMaterial({ color: 0x000000})
);
spider.position.x = 40;
spider.position.y = 3;
spider.position.z = -30;
frame6.position.x = spider.position.x;
frame6.position.y = spider.position.y;
frame6.position.z = spider.position.z - 0.3;
scene.add(spider, frame6);

let thinker;
const thinkerLight = new THREE.PointLight( 0xffffff, 100, 0);
const tLightHelper = new THREE.PointLightHelper( thinkerLight, 5, 0x000000);
loader.load('./thinker.glb', function( gltf ) {
  thinker = gltf.scene;
  thinker.position.x = 60;
  thinker.position.z = -30;
  scene.add( gltf.scene );
  thinkerLight.position.x = thinker.position.x; 
  thinkerLight.position.y = thinker.position.y + 10; 
  thinkerLight.position.z = thinker.position.z + 10; 
  scene.add(thinkerLight, tLightHelper);
}, undefined, function( err ) {
  console.log( err );
});

let goh;
const gohLight = new THREE.PointLight( 0xffffff, 500, 0);
const gLightHelper = new THREE.PointLightHelper( gohLight, 5, 0x000000);
loader.load('./goh.glb', function( gltf ) {
  goh = gltf.scene;
  goh.position.x = 85;
  goh.position.z = -30;
  goh.rotation.y = 110;
  scene.add( gltf.scene );
  gohLight.position.x = goh.position.x; 
  gohLight.position.y = goh.position.y + 10; 
  gohLight.position.z = goh.position.z + 10; 
  scene.add(gohLight, gLightHelper);
}, undefined, function( err ) {
  console.log( err );
});

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  if(t > -797) {
    camera.position.set(-20, 3, -20);
  } else if(t <= -797 && t >= -1342) {
    camera.position.set(-47, 5.5, -20);
  } else if(t <= -1843 && t >= -3064) {
    camera.position.set(-19.5, 3, -20);
  } else if(t <= -3020 && t >= -3890) {
    camera.position.set(12, 6, -20);
  } else if(t <= -3900 && t >= -4760) {
    camera.position.set(23.5, 0.23, -29);
  } else if(t <= -4780 && t >= -5600) {
    camera.position.set(40, 3, -20);
  } else if(t <= -5605 && t >= -6460) {
    camera.position.set(55, 3, -20);
  } else if(t <= -6465) {
    camera.position.set(80, 7, -20);
  }
  console.log(t);
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame( animate );

  // controls.update();

  renderer.render( scene, camera );
}

animate();