import bk from './images/skybox/space_bk.png';
import dn from './images/skybox/space_dn.png';
import ft from './images/skybox/space_ft.png';
import lf from './images/skybox/space_lf.png';
import rt from './images/skybox/space_rt.png';
import up from './images/skybox/space_up.png';
const sides = [ft, bk, up, dn, rt, lf];

import * as THREE from 'three';

export function createSkybox() {
    const materials = sides
        .map(side => new THREE.TextureLoader().load(side))
        .map(texture => new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }));

    const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    const skybox = new THREE.Mesh(skyboxGeo, materials);

    return skybox;
}