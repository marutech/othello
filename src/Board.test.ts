import Board, { Disk } from './Board'

it('create a board which is made up of 64 squares arranged in 8 rows and 8 columns', () => {
  const board = new Board()

  expect(board.rows).toBe(8)
  expect(board.columns).toBe(8)
  expect(board.squares).toBe(64)
})

it('create a initial state board', () => {
  const board = new Board()

  /* 中央の4マスは黒と白が置かれている */
  expect(board.at(3, 4)).toBe(Disk.Black)
  expect(board.at(4, 3)).toBe(Disk.Black)
  expect(board.at(3, 3)).toBe(Disk.White)
  expect(board.at(4, 4)).toBe(Disk.White)

  /* それ以外の場所は何も置かれていない */
  for (let i = 0; i < Board.SQUARES_PER_LINE; i++) {
    for (let j = 0; j < Board.SQUARES_PER_LINE; j++) {
      if ((i !== 3 && i !== 4) || (j !== 3 && j !== 4)) {
        expect(board.at(i, j)).toBe(Disk.Empty)
      }
    }
  }
})

xit('put a black disk on (0, 0)', () => {
  const board = new Board()
  const nextBoard = Board.INITIAL_STATE
  nextBoard[0][0] = Disk.Black

  expect(board.put(Disk.Black, 0, 0).equals(new Board(nextBoard))).toBe(true)
})

it('create a board from 2D array', () => {
  const boardArray = new Array(8).fill(new Array(8).fill(Disk.Black))

  expect(new Board(boardArray).toArray).toEqual(boardArray)
})

it('calls constructor with invalid arguments so an error is thrown', () => {
  expect(() => new Board([[Disk.Black, Disk.White], [Disk.Empty]])).toThrow()
})

it('should return array representation of the board', () => {
  const board = new Board()
  expect(board.toArray).toEqual(Board.INITIAL_STATE)

  const first = board.toArray
  const second = board.toArray
  // toArrayはディープコピーを返す
  expect(first !== second).toBe(true)
  for (let i = 0; i < Board.SQUARES_PER_LINE; i++) {
    expect(first[i] !== second[i]).toBe(true)
  }
})
