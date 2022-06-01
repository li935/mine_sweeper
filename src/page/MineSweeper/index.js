import {MineSweeperWrapper, MineSweeperBoardWrapper} from "./style";
import MineSweeperBoard from "../../components/MineSweeper/MineSweeperBoard";
import MineSweeperInfo from "../../components/MineSweeper/MineSweeperInfo";

const MineSweeper = () => {
    return (
        <MineSweeperWrapper>
            <MineSweeperBoardWrapper>
                <div>
                    <MineSweeperBoard/>
                    <MineSweeperInfo/>
                </div>
            </MineSweeperBoardWrapper>
        </MineSweeperWrapper>
    );
};

export default MineSweeper;