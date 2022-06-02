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

    const handleCellLeftClick = () => !mineSweeper.halt && mineSweeper.leftClick(rowIndex, colIndex);
    const handleCellRightClick = (e) => {
        e.preventDefault();
        !mineSweeper.halt && mineSweeper.rightClick(rowIndex, colIndex);
    };

    return (
        <MineSweeperCellWrapper
            cellType={mineSweeper.game[rowIndex][colIndex]}
            onClick={handleCellLeftClick}
            onContextMenu={handleCellRightClick}
        >
            {setText(mineSweeper.game[rowIndex][colIndex])}
        </MineSweeperCellWrapper>
    );
};

export default observer(MineSweeperBoardCell);