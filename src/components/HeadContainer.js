import styled from 'styled-components'

export const HeadContainer = styled.div`
    width: 100%;
    height: 60%;
    background: url(${({img})=>img});
    background-position: center;
    background-repeat: none;
    background-size: cover;
`