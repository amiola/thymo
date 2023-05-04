import styled from 'styled-components'

export const SideImage = styled.div`
    width: 30%;
    height: 100%;
    background: url(${({img})=>img});
    background-position: center;
    background-repeat: none;
    background-size: cover;
`