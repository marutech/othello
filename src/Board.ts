enum Disk { Black, White, None }

export default class Board {
  static get SQUARES_PER_LINE(): number { return 8 }

  private board: Disk[][]
  constructor() {
    this.board = Array(Board.SQUARES_PER_LINE).fill(
      Array(Board.SQUARES_PER_LINE).fill(Disk.None)
    )
  }
  get rows(): number { return this.board.length }
  get columns(): number { return this.board[0].length }
  get squares(): number { return this.rows * this.columns }
}
