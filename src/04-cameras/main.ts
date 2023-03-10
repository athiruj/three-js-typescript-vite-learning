import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    AxesHelper,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    // Clock,
    // Clock,
} from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import GSAP
// import gsap from 'gsap'

// default value
import { sizes } from '../default';

// //? Library Test
// console.log(THREE)

// Cursor
// const cursor = {
//     x: 0,
//     y: 0
// }

// let mouseDown:Boolean = false;

// window.addEventListener('mousedown',() => {
//     mouseDown = true;
// })

// window.addEventListener('mousemove',(e) => {
//     if (mouseDown){
//     cursor.x = e.clientX / sizes.width - (3.97),
//     cursor.y = e.clientY / sizes.height - (0.56) 
//     // console.log(cursor.x,cursor.y)
// }
// })

// window.addEventListener('mouseup',() => {
//     mouseDown = false;
// })

// Canvas
const canvas = document.querySelector('.webgl4');

// Scene
const scene = new Scene();

// Red Mesh
const geometry = new BoxGeometry(1, 1, 1);

const material = new MeshBasicMaterial({ color: 0xffff0000 });

const mesh = new Mesh(geometry, material);

scene.add(mesh)


// Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.set(0, 0, 3)

// Controls
const controls = new OrbitControls(camera, canvas as HTMLElement);
// controls.target;
// controls.enableDamping = true;

// AxesHelper
const axesHelper = new AxesHelper(3);

scene.add(axesHelper)

// Renderer
const renderer = new WebGLRenderer({
    canvas: canvas!,
});

renderer.setSize(sizes.width, sizes.height);

//! THREE Normal Way
// const clock = new Clock()

const tick = () => {
    // const elapsedTime = clock.getElapsedTime()

    // Update objects
    // camera.position.y = cursor.y
    // camera.position.x = -cursor.x

    controls.update

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()