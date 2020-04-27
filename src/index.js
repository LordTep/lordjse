import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
import Jimmy from './images/Jimmy_0238_1400px.jpg';
import { createArrow } from './geometry';
import { createSkybox } from './skybox';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 45, 30000 );
camera.position.set(-900, -200, -900);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
//controls.addEventListener('change', renderer);
controls.minDistance = 500;
controls.maxDistance = 1500;

let skybox = createSkybox();
scene.add(skybox);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
