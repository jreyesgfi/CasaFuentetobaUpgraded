import { Section } from "../../globalStyles";
import { GalleryVideo, GalleryVideoWrapper } from "./VideoSectionStyles";

import React from "react";

const VideoSection = ()=>{
    return(
    <Section padding="80px 0" smPadding="20px 0">
        <GalleryVideoWrapper>
            <GalleryVideo src="./assets/video/house_tour.mp4" muted={false} controls/>
        </GalleryVideoWrapper>
    </Section>
    )
}
export default VideoSection;