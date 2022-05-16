import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

const MineSweeperInfoBestRecord = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    return <h3>Best Record : {mineSweeper.bestRecord} Sec</h3>;
};

export default observer(MineSweeperInfoBestRecord);