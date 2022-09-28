import styled from "styled-components";

export const GalleryVideoWrapper = styled.div`
    position:relative;
    height:fit-content;
    width:100%;
`;
export const GalleryVideo = styled.video`
    object-fit: cover;
	width: auto;
    width:100%;
	height: auto;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
    position:relative;
    inset:0 0;
    margin:10px auto;
	z-index: 30;
`;