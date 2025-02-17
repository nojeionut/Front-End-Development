window.x = 0;
let y = 0;
window.z = 0;


// if I want to change the value of a window variable inside a function I have to use the global keyword
function g()
{
    window.x = window.x + 1;
    console.log(window.x);
};

g();
g();
g();


function add_y()
{
    y = y + 1;
    console.log(y);
};

add_y();
add_y();
add_y();

