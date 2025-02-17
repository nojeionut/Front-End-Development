function first()
{
    console.log("First function called");
    const firstVar = 1;
    

    function second()
    {
        console.log("Second function called");
        const secondVar = 2;
        console.log(firstVar);
        console.log(secondVar);
    }

    second();

    console.log("After the second function");
    console.log(firstVar);
    console.log(secondVar);

}

first();