window.onload = function ()
{
    var x = document.getElementById("N1");

    var y = document.getElementById("N2");

    document.getElementById("Add").onclick = function (_evt)
    {
        var nx = 3;
        var ny = 2;
        Addition(nx, ny);
    }
    document.getElementById("Subtract").onclick = function (_evt)
    {
        var nx = 8;
        var ny = 3;
        Subtraction(nx, ny);
    }
    document.getElementById("Multiply").onclick = function (_evt)
    {
        var nx = 1;
        var ny = 5;
        Multiplication(nx, ny);
    }
    document.getElementById("Divide").onclick = function (_evt)
    {
        var nx = 10;
        var ny = 2;
        Division(nx, ny);
    }
}

function Addition(a, b)
{
    var c = a + b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}

function Subtraction(a, b)
{
    var c = a - b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}

function Multiplication(a, b)
{
    var c = a * b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}

function Division(a, b)
{
    var c = a / b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}