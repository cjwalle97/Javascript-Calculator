window.onload = function ()
{
    var x = document.getElementById("N1").value;
    var y = document.getElementById("N2").value;
    
    document.getElementById("Add").onclick = function (_evt)
    {
        var nx = parseInt(x);
        var ny = parseInt(y);
        Addition(nx, ny);
    }

    document.getElementById("Subtract").onclick = function (_evt)
    {
        var nx = parseInt(x);
        var ny = parseInt(y);
        Subtraction(nx, ny);
    }

    document.getElementById("Multiply").onclick = function (_evt)
    {
        var nx = parseInt(x);
        var ny = parseInt(y);
        Multiplication(nx, ny);
    }

    document.getElementById("Divide").onclick = function (_evt)
    {
        var nx = parseInt(x);
        var ny = parseInt(y);
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