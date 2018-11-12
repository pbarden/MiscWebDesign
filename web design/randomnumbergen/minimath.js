/**
 * This is a simple mathematics library in JavaScript
 * in conjunction with studies at University of Phoenix.
 * 
 * COPYRIGHT D. PAUL BARDEN 2018
 * 
 * List of mathematical constants:
 * > Pi
 * > Epsilon
 * > Euler's Number
 * 
 * List of functions:
 * > Addition
 * > Subtraction
 * > Division
 * > Multiplication
 * > Euclidean Division
 * > Factorials
 * > Exponents
 * > Absolute Value
 * > Square Root
 * > Summation
 * > Permutations
 * > Combinations
 * > Probability
 * > Logarithms
 * > Negation
 * > Random Number Generation
 * > Area of Quadrilaterals, Circles, Triangles
 * > Perimeter
 * > Circumference
 * > Volume of Boxes, Cylinders, Spheres, Cones, Pyramids
 * > Quadratic Equation
 * > Distance
 * > Midpoint
 * > Slope
 * > Pythagorean Theorem
 * > Sin
 * > Cosine
 * > Tangent
 * > Secant
 * > Cosecant
 * > Cotangent
 * > Compound Interest
 * > Compound Interest using Euler's Number
 * > Paycheck (w/ Overtime)
 * 
 * @file minimath.js
 * @author D. Paul Barden
 */

var PI = 3.14159265359;
var EPS = 1e-15;
var E = 2.71828182845;

/**
 * Addition, adds two numbers together
 * 
 * @param {number} a 
 * @param {number} b 
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtraction, subtracts b from a
 * 
 * @param {number} a 
 * @param {number} b 
 */
function sub(a, b) {
    return a - b;
}

/**
 * Division, divides a by b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function div(a, b) {
    // Prevents division by zero
    if(b == 0) {
        return "Undefined";
    } else {
        return a / b;
    }
}

/**
 * Multiplication, multiplies a by b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function mult(a, b) {
    return a * b;
}

/**
 * Euclidean Division, returns the remainder after a is 
 * divided evenly by b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function mod(a, b) {
    return a % b;
}

/**
 * Factorial, multiplies a by all smaller whole numbers
 * 
 * @param {number} a 
 */
function fact(a) {
    // Prevents negative factorialization
    if (a < 0) {
        return "Undefined";
    } else if(a==0 || a==1) {
        // Return 1 when factorializing 0 or 1
        return 1;
    } else {
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
    }
    return a;
}

/**
 * Exponent, raises a to the power of b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function pow(a, b) {
    var ans = 1;
    for (i = 1; i <= b; i++) {
        ans *= a;
    }
    return ans;
}

/**
 * Absolute Value, returns integer magnitude without sign
 * 
 * @param {number} a 
 */
function abs(a) {
    if (a < 0) {
        return -a;
    } else return a;
}

/**
 * Square Root, returns the square root of a
 * 
 * @param {number} a 
 */
function sqrt(a) {
    var b = a;
    while (abs(b - a / b) > EPS * b) {
        b = (a / b + b) / 2;
    }
    return b;
}

/**
 * Summation, returns the sum of an equation with limits a and b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function sum(a, b) {
    var total = 0;
    for (n = a; n <= b; n++) {
        total += equation(n);
    }
    return total;
}

// Example equation for use in sum(), n^2 + 2n
function equation(num) {
    return pow(num, 2) + 2 * num;
}

/**
 * Combination, subsets of b taken from set a
 * 
 * @param {number} a Total objects
 * @param {number} b Objects in subset
 */
function comb(a, b) {
    return fact(a)/(fact(b)*fact(a-b));
}

/**
 * Permutation, subsets of b taken from set a with unique order
 * 
 * @param {number} a Total objects
 * @param {number} b Objects in subset
 */
function perm(a, b) {
    return fact(a)/fact(a-b);
}

/**
 * Probability, probability of a out of b outcomes
 * 
 * @param {number} a Favorable outcomes
 * @param {number} b Total possible outcomes
 */
function prob(a, b) {
    return a / b;
}

/**
 * Logarithm, returns exponent of a where result b
 * 
 * @param {number} a Base
 * @param {number} b Argument
 */
function log(a, b) {
    var comp = 0;
    var ans = 0;
    var i = 1;
    while(comp != b) {
        comp = pow(a, i);
        ans = i;
        i++;
        if(i >= b/a) {
            return "Undefined";
        }
    }
    if(comp == b) {
        return ans;
    }
}

/**
 * Negate, returns the negative of number
 * 
 * @param {number} a 
 */
function negate(a) {
    if(a == 0) {
        return "Undefined";
    } else if(a < 0) {
        return a;
    } else {
        return -a;
    }
}

/**
 * Random, generates a random whole number based on time
 * note: not recommended for small range or numbers over 100k
 * 
 * @param {number} a Lower limit
 * @param {number} b Upper limit
 */
function random(a, b) {
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var day = current.getDay();
    var hours = current.getUTCHours();

    if(current.getMinutes() == 0) var mins = .01;
    else var mins = current.getMinutes();

    if(current.getSeconds() == 0) var secs = .01;
    else var secs = current.getSeconds();

    if(current.getMilliseconds() == 0) var mils = .01;
    else var mils = current.getMilliseconds();

    var seed = (mils * secs) * .00000001;

    while(seed < a || seed > b) {
        seed = 0|(seed + ((1e-15 * (fact(mils % day) * pow(secs, month) + day / mins - secs % mils) + (sqrt(year) + mils * 76.020481) + hours) % b));
        if(seed == 0) seed = a;
        if(seed >= b && seed <= b + 2) seed = b;
        console.log(seed);
    }
    
    if(seed >= a && seed <= b) {
        return seed;
    } else return "Undefined";
}

/**
 * Area, quadrilateral
 * 
 * @param {number} a Length
 * @param {number} b Width
 */
function area(a, b) {
    return a * b;
}

/**
 * Area, circle
 * 
 * @param {number} a Radius
 */
function areaCircle(a) {
    return PI * pow(a, 2);
}

/**
 * Area, triangle
 * 
 * @param {*} a Base
 * @param {*} b Height
 */
function areaTri(a, b) {
    return a * b / 2;
}

/**
 * Perimeter, quadrilateral
 * 
 * @param {number} a Length
 * @param {number} b Width
 */
function perim(a, b) {
    return 2 * (a + b);
}

/**
 * Circumference, circle
 * 
 * @param {number} a Radius
 */
function circum(a) {
    return 2 * PI * a;
}

/**
 * Volume, rectangular
 * @param {number} a Height
 * @param {number} b Length
 * @param {number} c Width
 */
function vol(a, b, c) {
    return a * b * c;
}

/**
 * Volume, cylinder
 * 
 * @param {number} a Radius
 * @param {number} b Height
 */
function volCyl(a, b) {
    return areaCircle(a) * b;
}

/**
 * Volume, sphere
 * 
 * @param {number} a Radius
 */
function volSph(a) {
    return 4 / 3 * PI * pow(a, 3);
}

/**
 * Volume, cone
 * 
 * @param {number} a Radius
 * @param {number} b Height
 */
function volCone(a, b) {
    return 1 / 3 * volCyl(a, b);
}

/**
 * Volume, pyramid
 * 
 * @param {number} a Base
 * @param {number} b Height
 */
function volPyr(a, b) {
    return (a * b) / 3;
}

/**
 * Quadratic Equation, determines unknown value(s) of x in ax^2+bx+c
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
function quad(a, b, c) {
    var disc = (b * b) - 4 * (a * c);
    var root =  sqrt(disc);
    var x1 = (-b + root) / 2;
    var x2 = (-b - root) / 2;
    return "x = " + x1 + ", " + x2;
}

/**
 * Distance, returns distance between two points (x1, y1) and (x2, y2)
 * 
 * @param {number} a x1
 * @param {number} b y1
 * @param {number} c x2
 * @param {number} d y2
 */
function dist(a, b, c, d) {
    return sqrt(pow((a - c), 2))+(pow((b - d), 2));
}

/**
 * Midpoint, returns the point between two points (x1, y1) and (x2, y2)
 * 
 * @param {number} a x1
 * @param {number} b y1
 * @param {number} c x2
 * @param {number} d y2
 */
function midPpoint(a, b, c, d) {
    return (a + c)/2 + ", " + (b + d)/2;
}

/**
 * Slope, returns slope of straight line with two points (x1, y1) and (x2, y2)
 * 
 * @param {number} a x1
 * @param {number} b y1
 * @param {number} c x2
 * @param {number} d y2
 */
function slope(a, b, c, d) {
    return (d - b) + "/" + (c - a);
}

/**
 * Pythagorean Theorem, returns length of unknown side c of right triangle
 * with side a and b
 * 
 * @param {number} a 
 * @param {number} b 
 */
function pythag(a, b) {
    return sqrt(pow(a, 2) + pow(b, 2));
}

/**
 * Sine, ratio of side opposite given angle
 * 
 * @param {number} a Opposite
 * @param {number} b Hypotenuse
 */
function sin(a, b) {
    return a / b;
}

/**
 * Cosine, ratio of side adjacent to hypotenuse
 * 
 * @param {number} c Adjacent
 * @param {number} b Hypotenuse
 */
function cos(c, b) {
    return c / b;
}

/**
 * Tangent, ratio of the side length opposite and adjacent
 * 
 * @param {number} a Opposite
 * @param {number} c Adjacent
 */
function tan(a, c) {
    return a / c;
}


/**
 * Secant, reciprocal function of Cosine
 * 
 * @param {number} c Adjacent
 * @param {number} b Hypotenuse
 */
function sec(c, b) {
    return 1 / cos(c, b);
}

/**
 * Cosecant, reciprocal function of Sine
 * 
 * @param {number} a Opposite
 * @param {number} b Hypotenuse
 */
function csc(a, b) {
    return 1 / sin(a, b);
}

/**
 * Cotangent, reciprocal function of Tangent
 * 
 * @param {number} a Opposite
 * @param {number} c Adjacent
 */
function cot(a, c) {
    return 1 / tan(a, c);
}

/**
 * Compound Interest, principal + interest
 * 
 * @param {number} a Principal
 * @param {number} b Interest rate
 * @param {number} c Times compounded yearly
 * @param {number} d Time in years
 */
function compInt(a, b, c, d) {
    return a * pow(1 + (b / c), c * d);
}

/**
 * Compound Interest, using Euler's number
 * 
 * @param {number} a Principal
 * @param {number} b Interest rate
 * @param {number} d Time in years
 */
function compIntE(a, b, d) {
    return a * pow(E, b * d)
}

/**
 * Paycheck, standard overtime over 40 hours
 * 
 * @param {number} a Pay rate
 * @param {number} b Hours worked
 */
function pay(a, b) {
    if(b > 40) return a * 40 + (a * 1.5 * (b - 40));
    else return a * b;
}