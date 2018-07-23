import { Default } from '../../../../Assets/Styles';
// import styled from 'styled-components';
// const { colors } = styleVariables

const Header = Default.Header.extend`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BodyWindow = Default.Window.extend`
`


export {
    BodyWindow, 
    Header
}