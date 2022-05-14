export const CELL = {
    OPENED: 0,      // 일반 칸 (OPENED)
    NORMAL: -1,     // 일반 칸 (CLOSED)
    FLAG: -2,       // 깃발 칸
    BOOM: -3,       // 지뢰 칸 (OPENED)
    MINE: -4,       // 지뢰 칸 (CLOSED)
};

export const AROUND = [
    [-1, 1], [0, 1], [1, 1],
    [-1, 0], [1, 0],
    [-1, -1], [0, -1], [1, -1],
];