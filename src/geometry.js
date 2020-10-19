import * as THREE from 'three';
import Jimmy from './images/Jimmy_0238_1400px.jpg';

export function createArrow() {
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    const points = [
        new THREE.Vector3( -10, 0, 0 ),
        new THREE.Vector3( 0, 10, 0 ),
        new THREE.Vector3( 10, 0, 0 ),
        new THREE.Vector3( -10, 0, 0 )
    ];

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    return line;
}

export function createJimmyCube(name) {
    const texture = new THREE.TextureLoader().load(Jimmy);
    const material = new THREE.MeshBasicMaterial( { map: texture } );	
    const geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );	
    const cube = new THREE.Mesh( geometry, material );

    cube.name = name;

    return cube;
}