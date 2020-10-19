import * as THREE from 'three';
import Jimmy from './images/Jimmy_0238_1400px.jpg';

export function createJimmyCube(name) {
    const texture = new THREE.TextureLoader().load(Jimmy);
    const material = new THREE.MeshBasicMaterial( { map: texture } );	
    const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );	
    const cube = new THREE.Mesh( geometry, material );

    cube.name = name;

    return cube;
}