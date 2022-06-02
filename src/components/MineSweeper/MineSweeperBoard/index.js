import React, {useContext, useLayoutEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {MineSweeperTable, MineSweeperTitle} from "./style";
import MineSweeperBoardRow from "./MineSweeperBoardRow";
import shortId from "shortid";

const MineSweeperBoard = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    useLayoutEffect(() => {
        mineSweeper.init();
    }, [mineSweeper]);

    return (
        <div>
            <MineSweeperTitle>Mine Sweeper</MineSweeperTitle>
            <MineSweeperTable>
                <tbody>
                {mineSweeper.game.map((v, rowIndex) =>
                    <MineSweeperBoardRow
                        key={shortId.generate()}
                        rowIndex={rowIndex}
                    />
                )}
                </tbody>
            </MineSweeperTable>
        </div>
    );
};

export default observer(MineSweeperBoard);