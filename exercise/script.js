import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(sphereGeometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 1280,
    height: 720
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

