import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    AxesHelper,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    // Clock,
} from 'three';

// import GSAP
// import gsap from 'gsap'

// default value
import { sizes } from '../default';

// //? Library Test
// console.log(THREE)

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

// AxesHelper
const axesHelper = new AxesHelper(3);

scene.add(axesHelper)

// Renderer
const renderer = new WebGLRenderer({
    canvas: canvas!,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);