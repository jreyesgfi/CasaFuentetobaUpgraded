import React, { useState } from 'react';
import { GalleryImagesData, roomDict } from '../../data/GalleryData';
import { Section } from '../../globalStyles';
import NextButton from '../NextButton/NextButton';
import RoomSelector from '../RoomSelector/RoomSelector';
import ImageGrid from '../ImageGrid/ImageGrid';

const PhotoSection = ()=>{
    const [selectedRoom, setSelectedRoom] = useState('HABITACIONES');
    return(
        <Section inverse padding="80px 0">
            <ImageGrid selectedRoom={selectedRoom}
            images={GalleryImagesData[selectedRoom]}/>
            <RoomSelector roomDict={roomDict} selectRoom={(room)=> setSelectedRoom(room)} selectedRoom={selectedRoom}/>
            <NextButton step={1}></NextButton>
        </Section>
    )
}
export default PhotoSection;