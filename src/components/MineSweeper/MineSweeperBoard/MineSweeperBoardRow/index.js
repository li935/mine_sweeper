import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import MineSweeperBoardCell from "../MineSweeperBoardCell";
import shortId from "shortid";

const MineSweeperBoardRow = (props) => {
    const {mineSweeper} = useContext(MobXProviderContext);
    const {rowIndex} = props;

    return (
        <tr>
            {mineSweeper.game[rowIndex].map((v, colIndex) =>
                <MineSweeperBoardCell
                    key={shortId.generate()}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                />
            )}
        </tr>
    );
};

export default observer(MineSweeperBoardRow);