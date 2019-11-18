import Board from './Board'

it('create a board which is made up of 64 squares arranged in 8 rows and 8 columns', () => {
  const board = new Board()

  expect(board.rows).toBe(8)
  expect(board.columns).toBe(8)
  expect(board.squares).toBe(64)
})
