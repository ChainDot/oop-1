class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    return(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  
  distance(point) {
   return (Math.sqrt((Math.pow(((point.x)-(this.x)),2)) + (Math.pow(((point.y)-(this.y)),2))))
  }
}

exports.Point= Point

/* // p1 est une instance de Point
const p1 = new Point(1, 2)
// p2 est une autre instance de Point
const p2 = new Point(10, 11)
// p2 est une autre instance de Point
const p3 = new Point(1, 2)
 */
