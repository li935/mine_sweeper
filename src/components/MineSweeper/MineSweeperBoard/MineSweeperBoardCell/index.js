import React, {useContext} from 'react';
import {CELL} from "../../../../constants";
import {MobXProviderContext, observer} from "mobx-react";

const setStyle = (cellType) => {
    switch (cellType) {
        case CELL.NORMAL:
        case CELL.MINE:
            return {
                background: 'grey',
                cursor: 'pointer',
            }
        case CELL.FLAG:
        case CELL.BOOM:
            return {
                background: 'blue',
                cursor: 'pointer',
            };
        case CELL.OPENED:
        default:
            return {
                background: 'white',
                cursor: 'pointer',
            };
    }
};

const setText = (cellType) => {
    switch (cellType) {
        case CELL.NORMAL:
        case CELL.MINE:
            return '　';
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
    const {colIndex, rowIndex} = props;

    return (
        <td
            style={setStyle(mineSweeper.game[rowIndex][colIndex])}
            onClick={() => !mineSweeper.halt && mineSweeper.leftClick(rowIndex, colIndex)}
            onContextMenu={(e) => {
                e.preventDefault();
                !mineSweeper.halt && mineSweeper.rightClick(rowIndex, colIndex);
            }}
        >
            {setText(mineSweeper.game[rowIndex][colIndex])}
        </td>
    );
};

export default observer(MineSweeperBoardCell);