let i=0;
function counter()
{
    const now = new Date();
    const hours = now.getHours(); // Current hour (0-23)
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 

    if (hours<12)
    {
        console.log(`Time: ${hours}:${minutes}:${seconds} AM`);
    }
    else 
    {
        console.log(`Time: ${hours}:${minutes}:${seconds} PM`);
    }
}
setInterval(counter,1000);
