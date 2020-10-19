import * as THREE from 'three';
import './style.css';
import { createJimmyCube, createSkybox } from './geometry';
import { orbit } from './movement';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 45, 30000 );
camera.position.set(-900, -200, -900);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

let mouseX = 0, mouseY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

const skybox = createSkybox();
scene.add(skybox);

const jimmyCube = createJimmyCube('jimmyCube');
scene.add(jimmyCube);

function animate() {
    requestAnimationFrame(animate);

    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;
    camera.lookAt( scene.position );

    orbit(jimmyCube, new THREE.Vector3(0, 0, 1300));
    
    // rotate for fun
    jimmyCube.rotation.x += 0.001;
    jimmyCube.rotation.y += 0.001;

    // rotate skybox for floating in space effect
    skybox.rotation.x += 0.0005;
    skybox.rotation.y += 0.0005;

    renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize, false);
document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
