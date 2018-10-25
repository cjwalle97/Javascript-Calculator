window.onload = function ()
{
    var x = document.getElementById("N1");
    var y = document.getElementById("N2");
    
    document.getElementById("Add").onclick = function (_evt)
    {
        Addition(x, y);
    }

    document.getElementById("Subtract").onclick = function (_evt)
    {
        Subtraction(x, y);
    }

    document.getElementById("Multiply").onclick = function (_evt)
    {
        Multiplication(x, y);
    }

    document.getElementById("Divide").onclick = function (_evt)
    {
        Division(x, y);
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