import {
    Scene,
    Mesh,
    PerspectiveCamera,
    BoxGeometry,
    MeshBasicMaterial,
    Vector3,
    Group,
    AxesHelper,
    WebGLRenderer
} from 'three';

// default value
import { sizes } from '../default';

//? Library Test
// console.log(THREE)

//! Scene
// Scene
const scene = new Scene();

//! Canvas
// Set Canvas Class Name
const canvas = document.querySelector(".webgl2");

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

// Add Camera
scene.add(camera);

//! Red Cube
// Create Geometry
const geometry = new BoxGeometry(1, 1, 1);
// Create Material
const material1 = new MeshBasicMaterial({ color: 0xffff0000 });
const material2 = new MeshBasicMaterial({ color: 0xff00ff00 });
// Create Mesh
const mesh1 = new Mesh(geometry, material1);
const mesh2 = new Mesh(geometry, material2);

//? Mesh Custom
// Set Position
const position = new Vector3(0, 1, 0)
// Set Mesh Position
mesh1.position.add(position)

//! Group
// Create Group
const group = new Group();
// Add Mesh in to Group
group.add(mesh1);
group.add(mesh2);

//? Group Custom
// Set Group Position
group.position.add(new Vector3(1, 1, 1))
// Add group in to Scene
scene.add(group)

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
