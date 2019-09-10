import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });
  it("should report if apple inside", () => {
    const grid = new Grid(configuration)
    
    const apple = grid.getApples()[0]
    expect(grid.isAppleInside(apple)).toBe(true)
    expect(grid.isAppleInside(new Cell(99,99))).toBe(false)
})
it("should remove apple eaten", () => {
  const grid = new Grid(configuration)
  
  const apple = grid.getApples()[0]
  grid.removeApple(apple)

  expect(grid.isAppleInside(apple)).toBe(false)
  expect(grid.getApples().length).toBe(4)
})

});
