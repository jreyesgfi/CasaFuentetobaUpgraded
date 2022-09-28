import { RoomButtonContainer, RoomButtonsContainer, RoomSelectorImage, RoomSelectorText } from './RoomSelectorStyles';
import React from 'react';

const RoomSelector = (props)=>{
    const roomDict = props?.roomDict||{};

    const handleClick = (room) => {
        console.log(room)
        props?.selectRoom(room)
    }

    if (Object.keys(roomDict).length===0){
        return null
    }
    return (
        <RoomButtonsContainer>
            {Object.keys(roomDict).map((name,index)=>{
                return(
                <RoomButtonContainer 
                    key={index}
                    onClick={()=>handleClick(name)}>
                    <RoomSelectorImage src={roomDict[name]} selected={props?.selectedRoom===name}/>
                    <RoomSelectorText>
                        {name}
                    </RoomSelectorText>
                </RoomButtonContainer>
            )
        })}
        </RoomButtonsContainer>
    )
}

export default RoomSelector;