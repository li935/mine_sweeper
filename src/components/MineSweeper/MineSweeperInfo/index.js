import React, {useContext, useState} from 'react';
import {MobXProviderContext, observer} from "mobx-react";
import {MineButtonAreaWrapper, RecordButtonWrapper, ResetButtonWrapper} from "./style";

const MineSweeperInfo = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    const [records, setRecords] = useState(false);

    const showRecords = () => {
        return mineSweeper.records.map((record, index) => {
            return (
                <div key={index}>
                    {index + 1}. {record} Sec
                </div>
            )
        })
    };

    return (
        <div>
            <h3>Mine : {mineSweeper.mine}</h3>
            <h3>Elapsed Time : {mineSweeper.timer} Sec</h3>
            <h3>Best Record : {mineSweeper.bestRecord} Sec</h3>
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