export enum Disk { Black, White, Empty }

export default class Board {
  static get SQUARES_PER_LINE(): number { return 8 }
  static get INITIAL_STATE(): Disk[][] {
    return [
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.White, Disk.Black, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Black, Disk.White, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
      [Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty, Disk.Empty],
    ]
  }

  private board: Disk[][]
  constructor(board: Disk[][] = Board.INITIAL_STATE) {
    if (board.length === Board.SQUARES_PER_LINE && board[0].length === Board.SQUARES_PER_LINE) {
      this.board = board
    } else {
      throw new Error('Invalid shaped array was passed')
    }
  }
  get rows(): number { return this.board.length }
  get columns(): number { return this.board[0].length }
  get squares(): number { return this.rows * this.columns }
  get toArray(): Disk[][] { return this.board.map(row => [...row]) }
  at(row: number, col: number): Disk | undefined { return this.board[row][col] }
}
