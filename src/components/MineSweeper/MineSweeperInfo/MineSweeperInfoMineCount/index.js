import React, {useContext} from 'react';
import {MobXProviderContext, observer} from "mobx-react";

const MineSweeperInfoMineCount = () => {
    const {mineSweeper} = useContext(MobXProviderContext);

    return <h3>Mine : {mineSweeper.mine}</h3>;
};

export default observer(MineSweeperInfoMineCount);