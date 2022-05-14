import {MineSweeperWrapper, MineSweeperBoardWrapper} from "./style";
import MineSweeperBoard from "../../components/MineSweeper/MineSweeperBoard";
import MineSweeperInfo from "../../components/MineSweeper/MineSweeperInfo";

const MineSweeper = () => {
    return (
        <MineSweeperWrapper>
            <MineSweeperBoardWrapper>
                <MineSweeperBoard/>
            </MineSweeperBoardWrapper>
            <MineSweeperBoardWrapper>
                <MineSweeperInfo/>
            </MineSweeperBoardWrapper>
        </MineSweeperWrapper>
    );
};

export default MineSweeper;