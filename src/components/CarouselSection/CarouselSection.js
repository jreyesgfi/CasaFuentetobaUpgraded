import React, { useState } from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { ImagesCarouselData, roomDict } from '../../data/GalleryData';
import { Section } from '../../GlobalStyles';
import NextButton from '../NextButton/NextButton';
import RoomSelector from '../RoomSelector/RoomSelector';

const CarouselSection = ()=>{
    const [selectedRoom, setSelectedRoom] = useState('HABITACIONES');
    return(
        <Section inverse padding="80px 0">
            <ImageCarousel selectedRoom={selectedRoom}
            images={ImagesCarouselData[selectedRoom]}/>
            <RoomSelector roomDict={roomDict} selectRoom={(room)=> setSelectedRoom(room)} selectedRoom={selectedRoom}/>
            <NextButton step={1}></NextButton>
        </Section>
    )
}
export default CarouselSection;