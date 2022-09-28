import {importGalleryImages} from "../util/ImageImporter";

//first the different types of arrays
var terrazaFolder = [];
var salonFolder = [];
var bañosFolder = [];
var habitacionesFolder = [];
var cocinaFolder = [];
var generalFolder = [];

export const generalPhoto = importGalleryImages()[1]

export const GalleryImagesData={
    'JARDÍN': terrazaFolder,
    'SALÓN': salonFolder,
    'BAÑOS':bañosFolder,
    'HABITACIONES':habitacionesFolder,
    'COCINA':cocinaFolder,
    'GENERAL': generalFolder
}
const changingDict = {
    'baño': 'BAÑOS',
    'cocina': 'COCINA',
    'general': 'GENERAL',
    'habitacion': 'HABITACIONES',
    'salon': 'SALÓN',
    'terraza': 'JARDÍN'
}

var images = [];


for (const room of Object.keys(generalPhoto)){
    for (const photo of Object.keys(generalPhoto[room])){
        const roomWellWrote = changingDict[room];
        const imgUrl = generalPhoto[room][photo];
        const imgObject = {
            'imgUrl': imgUrl,
            'room': roomWellWrote,
            'place': 0
        }
        if(roomWellWrote === 'GENERAL'){
            GalleryImagesData['GENERAL'].splice(0, 0, imgObject)
            continue
        }
        GalleryImagesData[roomWellWrote]?.push(imgObject)
        GalleryImagesData['GENERAL']?.push(imgObject)
    }
    
}

// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/1.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })

// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/2.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/3.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/4.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/5.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/6.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/7.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/8.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/9.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/habitacion/10.jpg',
//     'room':'HABITACIONES',
//     'place':6,
// })



// images.push({
//     'imgUrl':'./assets/images/gallery/cocina/1.jpg',
//     'room':'COCINA',
//     'place':2,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/cocina/2.jpg',
//     'room':'COCINA',
//     'place':2,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/cocina/2.jpg',
//     'room':'COCINA',
//     'place':2,
// })


// images.push({
//     'imgUrl':'./assets/images/gallery/salon/1.jpg',
//     'room':'SALÓN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/salon/2.jpg',
//     'room':'SALÓN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/salon/3.jpg',
//     'room':'SALÓN',
//     'place':3,
// })


// images.push({
//     'imgUrl':'./assets/images/gallery/baño/1.jpg',
//     'room':'BAÑOS',
//     'place':1,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/baño/2.jpg',
//     'room':'BAÑOS',
//     'place':1,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/baño/3.jpg',
//     'room':'BAÑOS',
//     'place':1,
// })

// images.push({
//     'imgUrl':'./assets/images/gallery/salon/1.jpg',
//     'room':'SALÓN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/salon/2.jpg',
//     'room':'SALÓN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/salon/3.jpg',
//     'room':'SALÓN',
//     'place':3,
// })


// images.push({
//     'imgUrl':'./assets/images/gallery/terraza/1.jpeg',
//     'room':'JARDÍN',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/terraza/2.jpeg',
//     'room':'JARDÍN',
//     'place':6,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/terraza/3.jpeg',
//     'room':'JARDÍN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/terraza/4.jpeg',
//     'room':'JARDÍN',
//     'place':3,
// })
// images.push({
//     'imgUrl':'./assets/images/gallery/terraza/5.jpeg',
//     'room':'JARDÍN',
//     'place':5,
// })



for (let image of images){
    var room = image['room'];
    GalleryImagesData[room]?.push(image)
}





//////////////////////

export const roomDict = {
    'JARDÍN':"./assets/images/gallery/terraza/2.jpeg",
    'SALÓN':"./assets/images/gallery/salon/1.jpg",
    'BAÑOS':"./assets/images/gallery/baño/1.jpg",
    'HABITACIONES':"./assets/images/gallery/habitacion/1.jpg",
    'COCINA':"./assets/images/gallery/cocina/1.jpg",
    'GENERAL':"./assets/images/gallery/general/1.jpg",
}