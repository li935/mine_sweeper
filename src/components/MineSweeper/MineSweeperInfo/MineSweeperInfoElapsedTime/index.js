import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

const MineSweeperInfoElapsedTime = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    return <h3>Elapsed Time : {mineSweeper.timer} Sec</h3>;
};

export default observer(MineSweeperInfoElapsedTime);