import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {CELL} from "../../../../constants";
import {MineSweeperCellWrapper} from "./style";

const setText = (cellType) => {
    switch (cellType) {
        case CELL.OPENED:
        case CELL.NORMAL:
        case CELL.MINE:
            return '';
        case CELL.FLAG:
            return '🚩';
        case CELL.BOOM:
            return '💣';
        default:
            return cellType;
    }
};

const MineSweeperBoardCell = (props) => {
    const {mineSweeper} = useContext(MobXProviderContext);
    const {rowIndex, colIndex} = props;

    return (
        <MineSweeperCellWrapper
            cellType={mineSweeper.game[rowIndex][colIndex]}
            onClick={() => !mineSweeper.halt && mineSweeper.leftClick(rowIndex, colIndex)}
            onContextMenu={(e) => {
                e.preventDefault();
                !mineSweeper.halt && mineSweeper.rightClick(rowIndex, colIndex);
            }}
        >
            {setText(mineSweeper.game[rowIndex][colIndex])}
        </MineSweeperCellWrapper>
    );
};

export default observer(MineSweeperBoardCell);