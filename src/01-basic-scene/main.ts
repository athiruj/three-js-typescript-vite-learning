import {
    Scene,
    Mesh,
    PerspectiveCamera,
    BoxGeometry,
    MeshBasicMaterial,
    Vector3,
    AxesHelper,
    WebGLRenderer
} from 'three';

// default value
import { sizes } from '../default';

// //? Library Test
// console.log(THREE)

//! Scene
// Scene
const scene = new Scene();

//! Canvas
// Set Canvas Class Name
const canvas = document.querySelector(".webgl1");

//! Camera
// Create Camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
// Set Camera Position
// X Axiz
camera.position.x = 0;
// Y Axiz
camera.position.y = 0;
// Z Axiz
camera.position.z = 5;

//? LookAT
// // Set Position to LookAt
// const lookAt = new Vector3(0,0,0)
// // Set Camera LookAt
// camera.lookAt(lookAt)

// Add Camera
scene.add(camera);

//! Red Cube
// Create Geometry
const geometry = new BoxGeometry(1, 1, 1);
// Create Material
const material = new MeshBasicMaterial({ color: 0xffff0000 });
// Create Mesh
const mesh = new Mesh(geometry, material);

//? Mesh Custom
//// Set Scale
// const scale = new Vector3(1,0.5,1)
// // Set Mesh Scale
// mesh.scale.add(scale)
// Set Position
const position = new Vector3(0, 1, 0)
// Set Mesh Position
mesh.position.add(position)
// // Set Rotation
// const rotation = Math.PI * 0.25
// // Set normal Mesh Rotation
// mesh.rotateX(rotation)
// mesh.rotateY(rotation)
// mesh.rotateZ(rotation)
// // Set Mesh Order Rotation default is 'XYZ'
// mesh.rotation.reorder('YXZ')

// Add Mesh
scene.add(mesh);


//! AxesHelper
//  AxesHelper
const axesHelper = new AxesHelper(3);
// Add AxesHelper
scene.add(axesHelper)

//! Renderer
// Create Renderer
const renderer = new WebGLRenderer({
    canvas: canvas!,
});
// Set Renderer
renderer.setSize(sizes.width, sizes.height);
// Start Render
renderer.render(scene, camera);
