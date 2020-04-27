import * as THREE from 'three';
import './style.css';
import Jimmy from './images/Jimmy_0238_1400px.jpg';
import { createArrow } from './geometry';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 45, 30000 );

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild( renderer.domElement );

let texture = new THREE.TextureLoader().load(Jimmy);
let material = new THREE.MeshBasicMaterial( { map: texture } );

let geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
let cube = new THREE.Mesh( geometry, material );


let arrow = createArrow(scene);
arrow.position.set(-30,80,250);
arrow.rotation.z = 1.5666;
scene.add( cube );
scene.add( arrow );

camera.position.z = 400;

let animate = function () {
    requestAnimationFrame( animate );

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );

    arrow.rotation.x += 0.01;
    cube.rotation.x += 0.003;
    cube.rotation.y += 0.001;

    renderer.render( scene, camera );
};

animate();

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function init() {

}


function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY )    ;

}

