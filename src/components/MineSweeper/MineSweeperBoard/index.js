import React, {useContext, useEffect} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {MineSweeperTable} from "./style";
import MineSweeperBoardRow from "./MineSweeperBoardRow";

const MineSweeperBoard = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    useEffect(() => {
        mineSweeper.init();
    }, [mineSweeper]);

    return (
        <div>
            <h1>Mine Sweeper</h1>
            <MineSweeperTable>
                <tbody>
                {mineSweeper.game.map((v, i) =>
                    <MineSweeperBoardRow
                        key={i}
                        rowIndex={i}
                    />
                )}
                </tbody>
            </MineSweeperTable>
        </div>
    );
};

export default observer(MineSweeperBoard);