import * as THREE from 'three';

// //? Library Test
// console.log(THREE)

//! Scene
// Scene
const scene = new THREE.Scene();

//! Red Cube
// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Material
const material = new THREE.MeshBasicMaterial({ color: 0xffff0000 });
// Mesh
const mesh = new THREE.Mesh(geometry, material);
// Add Mesh
scene.add(mesh);

// Set Size
enum sizes {
  width = 800,
  height = 600,
};

//! Camera
// Set Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// Set Camera Position
// X Axiz
camera.position.x = 0;
// Y Axiz
camera.position.y = 0;
// Z Axiz
camera.position.z = 3;
// Add Camera
scene.add(camera);

//! Canvas
// Set Canvas Class Name
const canvas = document.querySelector(".webgl");

//! Renderer
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas!,
});
// Set Renderer
renderer.setSize(sizes.width, sizes.height);
// Start Render
renderer.render(scene, camera);
