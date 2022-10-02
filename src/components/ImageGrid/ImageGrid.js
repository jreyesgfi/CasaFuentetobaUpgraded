import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LazyImage from '../LazyImage/LazyImage';
import { ImageGridWrapper, MainImageInGrid, MainImageInGridWrapper, OtherImageHolder, OtherImageInGrid, OtherImagesInGridWrapper } from './ImageGridStyle';

const ImageGrid = (props) => {

    const images = props?.images || [];
    const numTotalPhotos = images.length;
    const numImagesDisplayed = images.length;
    // var numImagesDisplayed = 10;
    // numImagesDisplayed = Math.min(numImagesDisplayed,images.length-1);

    const [mainPhotoNum, setMainPhotoNum] = useState(0);
    const [selectedRoomState, setSelectedRoomState] = useState('');
    useEffect(() => {
        setMainPhotoNum(0);
        setSelectedRoomState(props.selectedRoom);
     }, [props.selectedRoom])
    //const [imageExpanded, setImageExpanded] = useState(false)

    //  prevent no photos
    if (numTotalPhotos === 0) { return }

    var currentPhotoPos = mainPhotoNum % numTotalPhotos;

    // prevent negative value to mainPhotoNum
    if (mainPhotoNum < 0) {
        currentPhotoPos = (numTotalPhotos - 1);
        setMainPhotoNum(numTotalPhotos - 1);
    }

    // // fix the range of images displayed
    // const imagesDisplayed = (mainPhotoNum,numTotalPhotos,numImagesDisplayed) => {
    //     if (mainPhotoNum % numTotalPhotos + numImagesDisplayed + 1 < numTotalPhotos) {
    //         return images.slice(mainPhotoNum + 1, mainPhotoNum + numImagesDisplayed);
    //     }
    //     // else
    //     const firstSet = images.slice(mainPhotoNum + 1);
    //     const secondStet = images.slice(0, numImagesDisplayed - firstSet.length-1);
    //     return [...firstSet, ...secondStet];
    // }

    return (
        <ImageGridWrapper>
           {selectedRoomState===props.selectedRoom && (
            <>
            <MainImageInGridWrapper >
                <MainImageInGrid as={"div"}>
                    <LazyImage
                        onClick={console.log(mainPhotoNum,props.selectedRoom)}
                        src={images[mainPhotoNum]['imgUrl']}
                        alt={'imagen casa fuentetoba grande'}
                        imageStyle={MainImageInGrid}
                        delayTime={0} />
                </MainImageInGrid>
            </MainImageInGridWrapper>

            <OtherImagesInGridWrapper>
                {images.map((image, index) => (
                    <OtherImageInGrid 
                        as={"div"}
                        key={index}
                    >
                        <LazyImage
                        src={image['imgUrl']}
                        alt={'imagen casa fuentetoba previsualización'}
                        imageStyle={OtherImageInGrid}
                        delayTime={300+300 * index}
                        handleClick={() => { setMainPhotoNum((index) % numImagesDisplayed) }} />
                    </OtherImageInGrid>
                ))}
            </OtherImagesInGridWrapper>
            </>
            )}
        </ImageGridWrapper>
    )
}
export default ImageGrid;