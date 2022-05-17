import styled from "styled-components";
import {CELL} from "../../../../constants";

const handleBackgroundColor = cellType => {
    switch (cellType) {
        case CELL.NORMAL:
        case CELL.MINE:
            return 'grey';
        case CELL.FLAG:
        case CELL.BOOM:
            return 'blue';
        case CELL.OPENED:
        default:
            return 'lightgrey';
    }
}

export const MineSweeperCellWrapper = styled.td`
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: ${props => handleBackgroundColor(props["cellType"])};
`