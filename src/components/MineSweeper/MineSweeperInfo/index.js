import React, {useContext, useState} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

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
            <div style={{display: "flex", marginBottom: 30}}>
                <div>
                    <button onClick={mineSweeper.restart}>
                        Reset
                    </button>
                </div>
                <div style={{marginLeft: 10}}>
                    <button onClick={() => setRecords(!records)}>
                        {records ? 'Hide Record' :  'Show Record'}
                    </button>
                </div>
            </div>
            {records && showRecords()}
        </div>
    );
};

export default observer(MineSweeperInfo);