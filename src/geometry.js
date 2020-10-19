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

import bk from './images/skybox/space_bk.png';
import dn from './images/skybox/space_dn.png';
import ft from './images/skybox/space_ft.png';
import lf from './images/skybox/space_lf.png';
import rt from './images/skybox/space_rt.png';
import up from './images/skybox/space_up.png';
const sides = [ft, bk, up, dn, rt, lf];

export function createSkybox() {
    const materials = sides
        .map(side => new THREE.TextureLoader().load(side))
        .map(texture => new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }));

    const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    const skybox = new THREE.Mesh(skyboxGeo, materials);

    return skybox;
}