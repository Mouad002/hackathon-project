import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as dat from 'dat.gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// renderer.shadowMap.enabled = true;


// const orbit = new OrbitControls(camera, renderer.domElement);

// orbit.rotateSpeed = 1.0;
// orbit.zoomspeed = 1.2;
// orbit.enableDamping = true;
// orbit.enablePan = false;
// orbit.dampingFactor = 0.2;
// orbit.minDistance = 10;
// orbit.maxDistance = 500;
// orbit.enabled = true;

// renderer.outputEncoding = THREE.outputEncoding;

camera.position.set(0, 5, 1);
// orbit.update();


const axesHelper = new THREE.AxesHelper(10);

scene.add(axesHelper);

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00, wireframe: true});
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

const geometry = new THREE.BoxGeometry( 10, 1, 0 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
// scene.add(directionalLight);
// directionalLight.position.set(1, 1, 1).normalize();

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
