import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import MineSweeperBoardCell from "../MineSweeperBoardCell";

const MineSweeperBoardRow = (props) => {
    const {mineSweeper} = useContext(MobXProviderContext);
    const {rowIndex} = props;

    return (
        <tr>
            {mineSweeper.game[rowIndex].map((v, i) =>
                <MineSweeperBoardCell
                    key={i}
                    rowIndex={rowIndex}
                    colIndex={i}
                />
            )}
        </tr>
    );
};

export default observer(MineSweeperBoardRow);