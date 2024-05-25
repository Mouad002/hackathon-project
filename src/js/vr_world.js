// a 3d of headseat has the camera location set to 0, 1.6, 0 by default

import { VRButton } from 'three/addons/webxr/VRButton.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { BoxLineGeometry } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

// let raduis = 0.08;
// let room = new THREE.LineSegments(
    
// );
// room.geometry.translate(0,3,0);
// scene.add(room);
// const geometry = new THREE.IcosahedronGeometry(raduis, 2);
// for(let i=0 ; i<200 ; i++) {
//     const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xFFFFFF}));
//     object.position.x = Math.random() * (2 + 2) -2
//     object.position.y = Math.random() * (2 + 2) -2
//     object.position.z = Math.random() * (2 + 2) -2
//     room.add(object);
// }



renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.outputEncoding = THREE.outputEncoding;

camera.position.set(0, 1, 4);
// orbit.update();
document.body.appendChild(renderer.domElement);

renderer.xr.enabled = true;
document.body.appendChild(VRButton.createButton( renderer ));

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
scene.add(directionalLight);
directionalLight.position.set(-10,20,0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

const ambientLight = new THREE.AmbientLight(0XFFFFFF);
scene.add(ambientLight);

// planes
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.receiveShadow = true;
floor.rotation.x = 0.5 * Math.PI;
scene.add(floor);

// Create the walls
// const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide });

// // walls
// const wall1 = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wallMaterial);
// wall1.position.set(0, 2, -5);
// scene.add(wall1);

// const wall2 = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wallMaterial);
// wall2.position.set(0, 2, 5);
// wall2.rotation.y = Math.PI;
// scene.add(wall2);

// const wall3 = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wallMaterial);
// wall3.position.set(-5, 2, 0);
// wall3.rotation.y = Math.PI / 2;
// scene.add(wall3);

// const wall4 = new THREE.Mesh(new THREE.PlaneGeometry(10, 4), wallMaterial);
// wall4.position.set(5, 2, 0);
// wall4.rotation.y = -Math.PI / 2;
// scene.add(wall4);

// Create the ceiling
const ceilingGeometry = new THREE.PlaneGeometry(20, 20);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.position.set(0, 3, 0);
ceiling.rotation.x = Math.PI / 2;
scene.add(ceiling);

const loader = new GLTFLoader();
loader.load('src/objects/low_poly_chemistry_lab/scene.gltf', function ( gltf ) {
    scene.scale.set(0.1, 0.1, 0.1);
    scene.position.z = 0.25;
    // scene.position.x = 1;
    scene.position.y = 1.5;
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );

renderer.setAnimationLoop( function () {
	renderer.render( scene, camera );
});
