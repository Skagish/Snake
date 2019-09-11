import { Cell } from "./Cell";
import { Direction } from "./Direction";
import { thisTypeAnnotation } from "@babel/types";

export class Snake {
  head = new Cell(2, 0)
  tail = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = `Right`
  tailSize = 2

  setDirection(direction: Direction) {
    if (this.direction === `Right`){
      switch (direction) {
        case `Right`: this.direction = direction
          break
        case `Down`: this.direction = direction
          break
        case `Up`: this.direction = direction
        break
      }
    }
    if (this.direction === `Left`){
      switch (direction) {
        case `Left`: this.direction = direction
          break
        case `Down`: this.direction = direction
          break
        case `Up`: this.direction = direction
        break
      }
    }
    if (this.direction === `Up`){
      switch (direction) {
        case `Right`: this.direction = direction
          break
        case `Left`: this.direction = direction
          break
        case `Up`: this.direction = direction
        break
      }
    }
    if (this.direction === `Down`){
      switch (direction) {
        case `Right`: this.direction = direction
          break
        case `Down`: this.direction = direction
          break
        case `Left`: this.direction = direction
        break
      }
    }
    
  }

  move() {
    this.tail.push(this.head)
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    
    switch (this.direction) {
      case `Right`: this.head = new Cell(this.head.x + 1, this.head.y)
        break
      case `Down`: this.head = new Cell(this.head.x, this.head.y + 1)
        break
      case `Up`: this.head = new Cell(this.head.x, this.head.y - 1)
      break
      case `Left` : this.head = new Cell(this.head.x -1, this.head.y)
      break
    }
  }

  grow() {
      this.tailSize += 3
   }

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    var die = false;
    this.tail.forEach(element => {
      if (element.x == cell.x && element.y == cell.y) {
        die = true
      }
    })
    return die
  }

  getDirection(): Direction {
    return this.direction
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
