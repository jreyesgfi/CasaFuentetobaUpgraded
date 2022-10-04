import React, { forwardRef, useState } from 'react';
import { GalleryImagesData, roomDict } from '../../data/GalleryData';
import { Section } from '../../globalstyles';
import NextButton from '../NextButton/NextButton';
import RoomSelector from '../roomselector/RoomSelector';
import ImageGrid from '../ImageGrid/ImageGrid';

const PhotoSection = forwardRef((props,ref)=>{
    const [selectedRoom, setSelectedRoom] = useState('HABITACIONES');
    return(
        <Section inverse padding="80px 0" ref={ref}>
            <ImageGrid selectedRoom={selectedRoom}
            images={[...GalleryImagesData[selectedRoom]]}/>
            <RoomSelector roomDict={roomDict} selectRoom={(room)=> setSelectedRoom(room)} selectedRoom={selectedRoom}/>
        </Section>
    )
})
export default PhotoSection;