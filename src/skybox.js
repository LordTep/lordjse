import bk from './images/skybox/space_bk.png';
import dn from './images/skybox/space_dn.png';
import ft from './images/skybox/space_ft.png';
import lf from './images/skybox/space_lf.png';
import rt from './images/skybox/space_rt.png';
import up from './images/skybox/space_up.png';
import * as THREE from 'three';

export function createSkybox() {
    let matArray = [];

    let texture_ft = new THREE.TextureLoader().load(ft);
    let texture_bk = new THREE.TextureLoader().load(bk);
    let texture_up = new THREE.TextureLoader().load(up);
    let texture_dn = new THREE.TextureLoader().load(dn);
    let texture_rt = new THREE.TextureLoader().load(rt);
    let texture_lf = new THREE.TextureLoader().load(lf);

    matArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    matArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    matArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    matArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    matArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    matArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

    matArray.forEach(mat => {
        mat.side = THREE.BackSide;
    });

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let skybox = new THREE.Mesh(skyboxGeo, matArray);

    return skybox;
}