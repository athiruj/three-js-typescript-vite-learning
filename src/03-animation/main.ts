import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    AxesHelper,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    Clock,
} from 'three';

// import GSAP
// import gsap from 'gsap'

// default value
import { sizes } from '../default';

// //? Library Test
// console.log(THREE)

// Canvas
const canvas = document.querySelector('.webgl3');

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

// Animation

//! First Way
// const tick = ()=>{

//   mesh.rotation.y += 0.00001 

//// Render
//   renderer.render(scene, camera);
//// Call tick again on the next frame
//   window.requestAnimationFrame(tick)
// }

//! Second Way
// let time = Date.now()

// const tick = () =>
// {

//   const currentTime = Date.now()
//   const deltaTime = currentTime - time
//   time = currentTime

//   // Update objects
//   mesh.rotation.y += 0.001 * deltaTime

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

//! THREE Normal Way
const clock = new Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.position.y = Math.cos(elapsedTime)
    mesh.position.x = Math.sin(elapsedTime)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

//! GSAP Way
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// gsap.to(mesh.position, { duration: 1, delay: 2, x: -2 })
// const tick = () =>
// {
//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

tick()