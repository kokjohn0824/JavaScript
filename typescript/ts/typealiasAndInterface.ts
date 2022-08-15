// interface appends
interface point { x: number };
interface point { y: number };
interface point { z: number };

// cannot append type or overwrite
type pointtype = { x: number };
// type pointtype = { y: number }; //error


class point1 implements point {
    x = 1;
    y = 2;
    z = 3;
}

console.log(new point1().x);