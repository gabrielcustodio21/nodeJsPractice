module.exports = (x ,y, callback) =>  {

    if (x <= 0 || y <= 0) {
        setTimeout(()=> 
            callback(new Error("Rectangle dimensions should be greater than 0: l = " + x + " b = " + y), 
            null), 
            2000);
    } 
    else {
        setTimeout(() =>
            callback(null, 
            {
                perimeter: (x,y) => (2*(x+y)),
                area: (x,y) => (x*y)
            }), 
            2000);
    }
}




