import React, {useContext, useState} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {MineButtonAreaWrapper, RecordButtonWrapper, ResetButtonWrapper} from "./style";
import shortId from "shortid";
import MineSweeperInfoElapsedTime from "./MineSweeperInfoElapsedTime";
import MineSweeperInfoMineCount from "./MineSweeperInfoMineCount";
import MineSweeperInfoBestRecord from "./MineSweeperInfoBestRecord";

const MineSweeperInfo = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    const [records, setRecords] = useState(false);

    const showRecords = () => {
        return mineSweeper.records.map((record, index) => {
            return (
                <div key={shortId.generate()}>
                    {index + 1}. {record} Sec
                </div>
            )
        })
    };

    return (
        <div>
            <MineSweeperInfoMineCount/>
            <MineSweeperInfoElapsedTime/>
            <MineSweeperInfoBestRecord/>
            <MineButtonAreaWrapper>
                <ResetButtonWrapper margin={5}>
                    <button onClick={mineSweeper.restart}>
                        Reset
                    </button>
                </ResetButtonWrapper>
                <RecordButtonWrapper margin={5}>
                    <button onClick={() => setRecords(!records)}>
                        {records ? 'Hide Record' :  'Show Record'}
                    </button>
                </RecordButtonWrapper>
            </MineButtonAreaWrapper>
            {records && showRecords()}
        </div>
    );
};

export default observer(MineSweeperInfo);