a// Global variables
let truck, logo, globe, cube;

// Home Scene: Delivery Truck
function initHomeScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-home').appendChild(renderer.domElement);

    // Simple truck model (box + wheels)
    const truckGeometry = new THREE.BoxGeometry(2, 1, 4);
    const truckMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    truck = new THREE.Mesh(truckGeometry, truckMaterial);
    scene.add(truck);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        truck.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Rotate truck on button click
function rotateTruck() {
    if (truck) truck.rotation.x += 0.5;
}

// About Scene: Rotating Logo
function initAboutScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-about').appendChild(renderer.domElement);

    const logoGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
    const logoMaterial = new THREE.MeshBasicMaterial({ color: 0x007bff });
    logo = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logo);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        logo.rotation.y += 0.02;
        renderer.render(scene, camera);
    }
    animate();
}

// Services Scene: 3D Globe
function initServicesScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-services').appendChild(renderer.domElement);

    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Contact Scene: Confirmation Cube
function initContactScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 400);
    document.getElementById('3d-scene-contact').appendChild(renderer.domElement);

    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    if (cube) cube.material.color.setHex(0x00ff00); // Change cube color on submit
});

// Initialize scenes on load
window.onload = function() {
    initHomeScene();
    initAboutScene();
    initServicesScene();
    initContactScene();
};
