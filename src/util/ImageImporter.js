import IDGenerator from "./IdGenerator";

export function importHomeImages() {
    const directory = require.context("../../public/assets/images/home/", false, /\.(jpg|png|jpeg)$/);
    let imagePaths = getImagePaths(directory);

    let images = [];
    let dictImages ={}
    imagePaths.map((path) => {
        dictImages[path]= require("../../public/assets/images/home/" + path);
        return images.push(require("../../public/assets/images/home/" + path))});
    return [images,dictImages]
}

export function importGalleryImages() {
    const directory = require.context("../../public/assets/images/gallery/", true, /\.(jpg|png|jpeg)$/);
    let imagePaths = getImagePaths(directory);

    let images = [];
    let dictImages ={
    }
    imagePaths.map((path) => {
        const room = path.split("/")[0]
        const number = IDGenerator()
        if (typeof dictImages[room] !== 'object') {
            dictImages[room] = {}
        }
        dictImages[room][number] = require("../../public/assets/images/gallery/" + path);
        
        return images.push(require("../../public/assets/images/gallery/" + path))});
        return [images,dictImages]
    
}

export function getImagePaths(directory) {
    let images = [];
    directory.keys().map((item, index) => images.push(item.replace("./", "")));
    return images;
}