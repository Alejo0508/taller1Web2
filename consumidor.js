
let url = "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI/top-tracks?market=US";

let token = "Bearer BQAokG03r2abIzKMcnBcRC6GEOGVV7krD0GLM4LKjuaUFQsvXYP_KeIpgCrTC73EKfvIiq0oSbNvDjYIfoOstZMe7EOiwEoCWP3D1NKxNHU3uIMCP8T9MO6L3j7BP0YBr2fQodgACYsjp9xFbK8i0izSSBAMjhQ";

let parametros = {

    method : "GET",
    headers : { "Authorization": token }

}

fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => depurarDatos(datos));

function depurarDatos (datos){

console.log(datos);
console.log(datos.tracks[9].preview_url); //cancion
console.log(datos.tracks[9].name); // nombre
console.log(datos.tracks[9].album.images[0].url); // imagen

let titulo = document.getElementById("titulo");
let imagen = document.getElementById("imagenes");
let audio = document.getElementById("audio");

titulo.textContent = datos.tracks[9].name;
imagen.src = datos.tracks[9].album.images[0].url;
audio.src = datos.tracks[9].preview_url;

}



let url2 = "https://api.spotify.com/v1/artists/5SbkVQYYzlw1kte75QIabH/top-tracks?market=US";

let token2 = "Bearer BQBIRrBOCHEBN1dSlWtzGV7Rvxed-fk3DyLY3Hrg0NW_JuurwBPJlJEYxotmpaU3mGOG-CeQCtEq_PfRG_YQw3gXWnvxdoHJOVAKz0f8PODCr4JBAO7MxjFSlUr_CPDA0FyN_5I7C8lxL35TR-Ng50lzouRR6kY";

let parametros2 = {

    method : "GET",
    headers : { "Authorization": token2 }

}

fetch(url2, parametros2)
    .then(respuesta2 => respuesta2.json())
    .then(datos2 => depurarDatos2(datos2));

function depurarDatos2 (datos2){

console.log(datos2);
console.log(datos2.tracks[0].preview_url); //cancion
console.log(datos2.tracks[0].name); // nombre
console.log(datos2.tracks[0].album.images[0].url); // imagen

let titulo2 = document.getElementById("titulo2");
let imagen2 = document.getElementById("imagenes2");
let audio2 = document.getElementById("audio2");

titulo2.textContent = datos2.tracks[0].name;
imagen2.src = datos2.tracks[0].album.images[0].url;
audio2.src = datos2.tracks[0].preview_url;

}


let url3 = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb/top-tracks?market=US";

let token3 = "Bearer BQC3qFxODspK4vqlvJIb9ICnw0MSkJFyURirTGpfvD_nlgGYZH0XuijjkL5lnm0ocOw5l3vu83Mo_PyX-XTwNwo7NkAcaSiCbJbujMMoUA7LpNftJt5zEd6vrhZB4KHk-aQvN_X5Uj0qIv7RvOo1i4VusDrwa0o";

let parametros3 = {

    method : "GET",
    headers : { "Authorization": token3 }

}

fetch(url3, parametros3)
    .then(respuesta3 => respuesta3.json())
    .then(datos3 => depurarDatos3(datos3));

function depurarDatos3 (datos3){

console.log(datos3);
console.log(datos3.tracks[0].preview_url); //cancion
console.log(datos3.tracks[0].name); // nombre
console.log(datos3.tracks[0].album.images[0].url); // imagen

let titulo3 = document.getElementById("titulo3");
let imagen3 = document.getElementById("imagenes3");
let audio3 = document.getElementById("audio3");

titulo3.textContent = datos3.tracks[0].name;
imagen3.src = datos3.tracks[0].album.images[0].url;
audio3.src = datos3.tracks[0].preview_url;

}


let url4 = "https://api.spotify.com/v1/artists/3UbyYnvNIT5DFXU4WgiGpP/top-tracks?market=US";

let token4 = "Bearer BQAPTMLkgaJ3jNM19vftHQWBUtSBj5pBf7axojLKwMGL4zAERSu4HYLII6cPeKwad9ghVGWlSESe163EVfFHr2d1GLGD_x0vkeLkTrQmQ7aZyk4VMlwC-Lbe9ejczFwIL2bCj1TCxOs2RdSPZnfCfpYKP7TLwYk";

let parametros4 = {

    method : "GET",
    headers : { "Authorization": token4 }

}

fetch(url4, parametros4)
    .then(respuesta4 => respuesta4.json())
    .then(datos4 => depurarDatos4(datos4));

function depurarDatos4 (datos4){

console.log(datos4);
console.log(datos4.tracks[0].preview_url); //cancion
console.log(datos4.tracks[0].name); // nombre
console.log(datos4.tracks[0].album.images[0].url); // imagen

let titulo4 = document.getElementById("titulo4");
let imagen4 = document.getElementById("imagenes4");
let audio4 = document.getElementById("audio4");

titulo4.textContent = datos4.tracks[0].name;
imagen4.src = datos4.tracks[0].album.images[0].url;
audio4.src = datos4.tracks[0].preview_url;

}


