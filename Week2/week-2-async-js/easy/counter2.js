let i=0;
function ad ()
{
    console.log("Time: %d s", ++i);
    setTimeout(ad, 1000); 
}

ad();