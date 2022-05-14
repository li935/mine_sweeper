import {observable, action, makeObservable} from 'mobx';
import {AROUND, CELL} from "../constants";

export default class MineStore {
    row = 8;
    col = 8;

    mine = 8;
    flag = 0;
    openCellCount = 0;

    timer = 0;
    timerStart = 0;

    game = [];
    prevGame = [];

    records = [];
    bestRecord = 0;

    constructor() {
        makeObservable(this, {
            row: observable,
            col: observable,

            mine: observable,
            flag: observable,
            openCellCount: observable,

            timer: observable,
            timerStart: observable,

            game: observable,
            prevGame: observable,

            records: observable,
            bestRecord: observable,

            init: action,
            win: action,
            lose: action,
            restart: action,

            leftClick: action,
            rightClick: action,

            setTimer: action,
            updateTimer: action,
            showMine: action,
        });
    };

    init = () => {
        const newGame = getNewGame(this);

        function getNewGame (self) {
            const newGame = Array.from(Array(self.row), () => Array(self.col).fill(CELL.NORMAL));
            const mineList = getMineList(self);

            mineList.forEach(mine => {
                const row = Math.floor(mine / self.col);
                const col = mine % self.col;

                newGame[row][col] = CELL.MINE;
            })

            return newGame;
        }

        function getMineList (self) {
            const mineList = [];
            const safeCellSize = self.row * self.col - self.mine;
            const cell = Array.from({length: self.row * self.col}, (v, i) => i);

            while (cell.length > safeCellSize) {
                const mine = cell.splice(Math.floor(Math.random() * cell.length), 1)[0];
                mineList.push(mine);
            }

            return mineList;
        }

        this.game = newGame;
        this.prevGame = newGame;

        console.log(this.game);
    };

    win = () => {
        alert('Win!');
        this.showMine();
        setRecord(this);

        clearTimeout(this.timerStart);

        function setRecord(self) {
            self.records.push(self.timer);
            self.records.sort((a, b) => a - b);

            setBestRecord(self);
        }

        function setBestRecord(self) {
            self.bestRecord = Math.min(...self.records);
        }
    };

    lose = () => {
        alert('Bomb!');
        this.showMine();

        clearTimeout(this.timerStart);
    };

    restart = () => {
        this.mine = 8;
        this.flag = 0;
        this.timer = 0;
        this.openCellCount = 0;
        this.init();

        clearTimeout(this.timerStart);
    };

    leftClick = (row, col) => {
        this.timer === 0 && this.setTimer();

        let clickedCell = this.game[row][col];

        if (clickedCell === CELL.NORMAL) {
            this.game[row][col] = checkCell(this, row , col);
            this.openCellCount += 1;
        } else if (CELL.MINE) {
            this.game[row][col] = CELL.BOOM;
            this.lose();
        }

        function checkCell (self, row, col) {
            let mineCount = CELL.OPENED;

            AROUND.forEach(direction => {
                const dx = direction[0] + row;
                const dy = direction[1] + col;

                // Range Check
                if (dx >= 0 && dx < self.prevGame.length && dy >= 0 && dy < self.prevGame[0].length) {
                    self.prevGame[dx][dy] === CELL.MINE && mineCount++;
                }
            })

            if (mineCount === CELL.OPENED) {
                return "ㅤ";
            }

            return mineCount;
        }

        return this.openCellCount === this.row * this.col - (this.mine + this.flag) && this.win();
    };

    rightClick = (row, col) => {
        this.timer === 0 && this.setTimer();

        let clickedCell = this.game[row][col];

        if (clickedCell === CELL.FLAG) {
            this.game[row][col] = CELL.NORMAL;
            this.mine++;
            this.flag--;
        } else if (clickedCell < CELL.OPENED) {
            if (this.mine > 0) {
                this.game[row][col] = CELL.FLAG;
                this.mine--;
                this.flag++;
            }
        }
    };

    setTimer = () => {
        const self = this;

        this.timerStart = setTimeout(function tick() {
            self.updateTimer();
            self.timerStart = setTimeout(tick, 100);
        }, 100);
    };

    updateTimer = () => {
        this.timer = Math.round((this.timer + 0.1) * 10) / 10;
    };

    showMine = () => {
        for (let x = 0; x < this.row; x++) {
            for (let y = 0; y < this.col; y++) {
                if (this.game[x][y] === CELL.MINE) {
                    this.game[x][y] = CELL.BOOM;
                }
            }
        }
    };
}