import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


/** Axes helper
 * 
 */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper);

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


function animate() {
    requestAnimationFrame(animate)

    // Update camera position
    camera.position.z = Math.abs(Math.sin(Date.now() * 0.001) * 5); // Adjust the multiplier for speed
    camera.position.x = Math.abs(Math.sin(Date.now() * 0.001) * 1); // Adjust the multiplier for speed
    // camera.position.y = Math.sin(Date.now() * 0.001) * 3; // Adjust the multiplier for speed

    // mesh.position.y = Math.sin(Date.now() * 0.001) * 3;
    // mesh.position.z = Math.sin(Date.now() * 0.001) * 2;
    // mesh.position
    // Look at the center of the scene
    // camera.lookAt(0, 0, 0);

    // Render scene with camera
    renderer.render(scene, camera)
}

animate();