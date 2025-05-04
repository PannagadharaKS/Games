var n = 6;
var c = [];
var pC;
var q = document.querySelector("span");
var sq = document.querySelectorAll(".sq");
var span = document.querySelector(".span");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var mode = document.querySelectorAll(".mode");
q.textContent = pC;
init();
function init()
{
    for(var i=0;i<mode.length;i++)
    {
        mode[i].addEventListener("click", function() {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent == "EASY" ? n = 3 : n = 6;
            res();
        });
    }
    res();
}
function res()
{
    var c = gC(n);
    pC = rC(c);
    q.textContent = pC;
    reset.textContent = "NEW COLORS";
    span.textContent = "";
    for(var i=0;i<sq.length;i++)
    {
        if(c[i]){
			sq[i].style.display = "block";
			sq[i].style.background = c[i];
		} else
			sq[i].style.display = "none";
    }
    h1.style.background = "steelblue";
}
reset.addEventListener("click", function() {
    res();
});
for(var i=0;i<sq.length;i++)
{
    //sq[i].style.background = c[i];
    sq[i].addEventListener("click", function() {
        var cC = this.style.background;
        if(cC == pC)
        {
            h1.style.background = pC;
            reset.textContent = "NEW COLORS";
            span.textContent = "CORRECT";
            for(var j=0;j<sq.length;j++)
            {
                sq[j].style.background = cC;
            }
        }
        else
        {
            this.style.background = "black";
            span.textContent = "TRY AGAIN";
        }
    })
}
function rC(c1)
{
    var x = Math.floor(Math.random()*c1.length);
    return c1[x];
}
function gC(num)
{
    var arr = [];
    for(var k=0;k<num;k++)
    {
        arr[k] = rd();
    }
    return arr;
}
function rd()
{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}