import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window. innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set ( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

// The Tutorial Line
const material = new THREE.LineBasicMaterial( { color: 0xffd700 });

const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ));
points.push( new THREE.Vector3( 10, 0, 0 ));

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

// My Supposedly Dashed Line
const materialTwo = new THREE.LineDashedMaterial( { color: 0xffffff });
const otherPoints = [];
otherPoints.push( new THREE.Vector3( 10, 0, 0 ));
otherPoints.push( new THREE.Vector3( 0, 0, 0 ));

const geometryTwo = new THREE.BufferGeometry().setFromPoints( otherPoints );
const lineTwo = new THREE.Line(geometryTwo, materialTwo);

scene.add( line, lineTwo );
renderer.render( scene, camera );