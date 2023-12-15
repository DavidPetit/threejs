import * as THREE from 'three'
import './style.css'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/*// Groups
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'white'})
)
cube1.position.x = -2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
cube2.position.x = 2
group.add(cube1)
group.add(cube2)*/

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1, 5,5,5)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position
mesh.position.x = 0
mesh.position.y = 0
mesh.position.z = 0
scene.add(mesh)

// Scale
//mesh.scale.x = 1

// Rotation
//mesh.rotation.y = 1

// Axes Helpers
//const axes = new THREE.AxesHelper()
//scene.add(axes)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(2,2,2)
camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


/**
 * Animate
 */
/*gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
const tick = () =>
{
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()*/