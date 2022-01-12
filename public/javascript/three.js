import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 2.5;

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector('#hero-left')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const heroLeft = new THREE.Mesh(
    new THREE.SphereGeometry(),
    new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('public/images/network.jpg')
    })
);
scene.add(heroLeft);

const group = new THREE.Group();
group.add(heroLeft);
scene.add(group);

const mouse = {
    x: 0,
    y: 0
};
if (innerWidth >= 700) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    document
        .querySelector('#hero-left')
        .addEventListener('mousemove', (e) => {
            (mouse.x = (e.clientX / innerWidth) * 2 - 1),
                (mouse.y = (e.clientY / innerHeight) * 2 + 1);
        });
}
function animate() {
    requestAnimationFrame(animate);
    heroLeft.rotation.y += 0.001;
    // controls.update();
    gsap.to(group.rotation, {
        x: mouse.x * 0.5,
        y: -mouse.y * 0.5,
        duration: 2
    });
    renderer.render(scene, camera);
}

animate();