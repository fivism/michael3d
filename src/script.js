import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

function generateBuildings() {
    for (let i = 0; i < 10; i++) {
        const randomHeight = Math.floor(Math.random() * 4) + 1.5;
        const geometry = new THREE.BoxGeometry(1, randomHeight, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x4AF626, wireframe: true })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        mesh.position.set(i, randomHeight / 2, 0)
    }
}
generateBuildings();

/** Axes helper
 * 
 */
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// Set up animation variables
const clock = new THREE.Clock();
let elapsed = 0;

function animate() {
    requestAnimationFrame(animate)

    elapsed += clock.getDelta();
    const panSpeed = 0.1;
    // Update camera position
    camera.position.z = 5
    camera.position.x = elapsed * panSpeed;
    // camera.position.x = Math.abs(Math.sin(Date.now() * 0.001) * 5); // Adjust the multiplier for speed
    camera.position.y = 2
    // camera.lookAt(0, 0, 0);
    renderer.render(scene, camera)
}

animate();