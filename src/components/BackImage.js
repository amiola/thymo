import styled from 'styled-components'

export const BackImage = styled.div`
    width: ${({width})=>width};
    height: ${({height})=>height};
    background: url(${({img})=>img});
    background-position: center;
    background-repeat: none;
    background-size: cover;
`