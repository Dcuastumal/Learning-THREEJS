const container = document.querySelector('#game-container'); //Llamando el contenedor

//Scene: 1
const scene = new THREE.Scene(); //Creando la escena
scene.background = new THREE.Color('skyblue'); //cambiamos el color de la escena

//Camera: 2                  
const camera = new THREE.PerspectiveCamera( //creamos la camara
    35,   //campo de vision(grados),   
    container.clientWidth/container.clientHeight, //division del ancho y alto de la pantalla,
    0.1, //que tan cerca se renderizan los objs,
    1000, //que tan lejos se renderizan los objs
);
camera.position.set(0, 0, 15); //Hemos posicionado la camara en el espacio
              //copy(X, Y, Z); Copiar la posicion de otro objeto
// camera.lookAt(0, 0, 0); //Para que la camara mire hacia un punto

//Mesh: 4
const geometry = new THREE.BoxGeometry(2, 2, 2) //Creamos la malla con una geometria que son los vertices en el espacio
const material = new THREE.MeshBasicMaterial({ //Hemos creado el material para la geometria
    color: 'teal'
});
const box_mesh = new THREE.Mesh(geometry, material); //Pusimos la geometria y el material dentro de la malla
scene.add(box_mesh); //Pusimos malla dentro de la escena

// camera.lookAt(box_mesh.position) Se obtiene la posicion del cubo para que la camara lo mire

//Render: 3
const renderer = new THREE.WebGLRenderer(); //Creamos el renderer
renderer.setSize(container.clientWidth, container.clientHeight); //Definimos el tamaño del renderer
renderer.setPixelRatio(window.devicePixelRatio); //Definimos la cantidad de pixeles porque no todos los dispositivos tiene la misma cantidad de pixeles (Pixel Ratio)

container.appendChild(renderer.domElement); //Introducimos el canvas dentro del contenedor


const update = () => { //Crear un loop de juego. El look de juego tambien necesita renderer //Creamos un update
    box_mesh.rotateX(0.01); //rotar el cubo pero se necesita un loop de juego(Para actualizar los frames)
    box_mesh.rotateY(0.01); //rotar el cubo pero se necesita un loop de juego(Para actualizar los frames)

    renderer.render(scene, camera); //pasar la escena y la camara al render para ver algo 
    renderer.setAnimationLoop(() => update()); //
} 
update();
