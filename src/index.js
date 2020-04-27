import * as THREE from 'three';
import './style.css';
import { createSkybox } from './skybox';



let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 55, window.innerWidth/window.innerHeight, 45, 30000 );
camera.position.set(-900, -200, -900);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let skybox = createSkybox();
//scene.add(skybox);


var light = new THREE.PointLight( 0xff0000, 100, 0 );
light.position.set( -30,80,250 );
//scene.add( light );
var sphereSize = 1;
var pointLightHelper = new THREE.PointLightHelper( light, sphereSize );



// var textureLoader = new THREE.TextureLoader();

// var textureFlare0 = textureLoader.load( "textures/lensflare/lensflare0.png" );
// var textureFlare1 = textureLoader.load( "textures/lensflare/lensflare2.png" );
// var textureFlare2 = textureLoader.load( "textures/lensflare/lensflare3.png" );

// var lensflare = new Lensflare();

// lensflare.addElement( new LensflareElement( textureFlare0, 512, 0 ) );
// lensflare.addElement( new LensflareElement( textureFlare1, 512, 0 ) );
// lensflare.addElement( new LensflareElement( textureFlare2, 60, 0.6 ) );

// light.add( lensflare );


//scene.add(pointLightHelper);

let skyboxGroup = new THREE.Group();
skyboxGroup.add(skybox);
skyboxGroup.add(light);
skyboxGroup.add(pointLightHelper);

scene.add(skyboxGroup);


function animate() {
    requestAnimationFrame(animate);

    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY - camera.position.y) * .05;
    camera.lookAt( scene.position );


    skyboxGroup.rotation.x += 0.0005;
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
