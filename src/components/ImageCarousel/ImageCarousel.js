import React, { useState } from 'react';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';
// import { IconContext } from 'react-icons';
import { Row, Heading, Section, TextWrapper, globalColors } from '../../GlobalStyles';
import { CarouselMainImage, CarouselImagesWrapper, CarouselSecondaryImage, MaskCarouselImage, CarouselControlWrapper, ImageExpandedWrapper, ExpandedImage } from './ImageCarouselStyles';

const ImageCarousel = (props) => {

    const images = props?.images || [];
    const numTotalPhotos = images.length;

    const [mainPhotoNum, setMainPhotoNum] = useState(0);
    const [imageExpanded, setImageExpanded] = useState(false)

    //  prevent no photos
    if (numTotalPhotos === 0) { return }

    var currentPhotoPos = mainPhotoNum % numTotalPhotos;

    // prevent negative value to mainPhotoNum
    if (mainPhotoNum < 0) {
        currentPhotoPos = (numTotalPhotos - 1);
        setMainPhotoNum(numTotalPhotos - 1);
    }
    return (
        <>
            <CarouselControlWrapper >
                <IconContext.Provider value={{ size: '3rem', color: `${globalColors.dark.primary}` }}>
                    <IoArrowBackCircle onClick={() => { setMainPhotoNum(mainPhotoNum - 1) }} />
                    <IoArrowForwardCircle onClick={() => { setMainPhotoNum(mainPhotoNum + 1) }} />
                </IconContext.Provider>
            </CarouselControlWrapper>
            {imageExpanded &&
                <ImageExpandedWrapper>
                    <ExpandedImage
                        src={images[currentPhotoPos]['imgUrl']}
                        onClick={() => { setImageExpanded(false) }}
                    ></ExpandedImage>
                </ImageExpandedWrapper>
            }


            <CarouselImagesWrapper>
                {!imageExpanded &&
                    <>
                        <MaskCarouselImage
                            prev={true}
                            onClick={() => { setMainPhotoNum(mainPhotoNum - 1) }}>
                        </MaskCarouselImage>
                        <CarouselSecondaryImage prev={true}
                            src={images[(currentPhotoPos + numTotalPhotos - 1) % numTotalPhotos]['imgUrl']} />
                        <CarouselMainImage
                            src={images[(currentPhotoPos + numTotalPhotos) % numTotalPhotos]['imgUrl']}
                            onClick={() => { setImageExpanded(true) }}>
                        </CarouselMainImage>
                        <MaskCarouselImage prev={false} onClick={() => { setMainPhotoNum(mainPhotoNum + 1) }}>
                        </MaskCarouselImage>
                        <CarouselSecondaryImage prev={false}
                            src={images[(currentPhotoPos + numTotalPhotos + 1) % numTotalPhotos]['imgUrl']} />
                        {/* <CarouselControlWrapper >
                            <IconContext.Provider value={{ size: '3rem', color: `${globalColors.dark.primary}` }}>
                                <IoArrowBackCircle onClick={() => { setMainPhotoNum(mainPhotoNum - 1) }} />
                                <IoArrowForwardCircle onClick={() => { setMainPhotoNum(mainPhotoNum + 1) }} />
                            </IconContext.Provider>
                        </CarouselControlWrapper> */}

                    </>
                }
            </CarouselImagesWrapper>
        </>
    )
}
export default ImageCarousel;