import styled from "styled-components";
import { globalColors, minimunSize, Section} from "../../globalStyles";

// export const BookingNextButton = styled(NextButtonStyle)`
//     background-color: ${globalColors.color.primary};
// `;
export const SelectionDateWrapper = styled(Section)`
    overflow: visible;
    margin-top: 3rem;
    max-width: 100vw;
`

export const TotalPriceWrapper = styled.div`
    z-index:100;
    position: sticky;
    top: 40vh;
    bottom:3rem;
    width:100vw;
    min-width: ${minimunSize};
    height:fit-content;
    border: 1px solid ${globalColors.color.primary};
    backdrop-filter: blur(5px);
    background-color: ${globalColors.transparent.primaryColor};
`; 

export const TotalPrice = styled.p`

    width: fit-content;
    margin:auto;
    padding: 2rem;
    font-family:primary-semibold;
    font-size: clamp(1.3rem, 2vw, 2.5rem);
`; 