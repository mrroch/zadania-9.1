var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 12);
var triangle3Area = getTriangleArea(3, 20);

function getTriangleArea(a, h) {

    if (a <= 0) {
        console.log('invalid data');
    }
    else if (h <= 0) {
        console.log('invalid data');
    }
    return a*h/2;
}

console.log(getTriangleArea(10, 15), getTriangleArea(7, 12), getTriangleArea(3, 20))