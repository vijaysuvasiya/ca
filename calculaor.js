var result = document.getElementById("result");

function display(number)
{
    result.value += number;
}
function calculate()
{
    var lastNumber = result.value;
    var finalans = eval(lastNumber);
    result.value= finalans;
}
function del()
{
    result.value = result.value.slice(0,-1);
}

function clr()
{
    result.value= "";
}