import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables

const AllSuppliersBox = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
`
const Button = Default.Button.extend`
        border: 2px solid ${colors.orange};
        color: ${colors.white};
        background: ${colors.orange};
        width: 100%
        &:hover {
        color: ${colors.white};
        background: rgb(214, 139, 33);
        border: 2px solid rgb(214, 139, 33);
    }
`
const MainPanel = Default.Panel.extend`
        height: 95%;
        width: 45%;
`
const PanelContainer = Default.Panel.extend`
    display: block;
    height: 100%;
    width: 100%;
`
const Panel = Default.Panel.extend`
    padding: 0;
    background: ${colors.white};
    height: 150px;
    width: 100%;
`
const PanelTitle = styled.h3`
    margin: 0;
    height: 5%;
`

export {
    AllSuppliersBox,
    Button,
    MainPanel,
    PanelContainer,
    Panel,
    PanelTitle
}