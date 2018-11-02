window.onload = function ()
{
    document.getElementById("Add").onclick = function (_evt)
    {
        var x = window.prompt("Number1:", "0");
        var y = window.prompt("Number2:", "0");
        /*additionwindow.onload = function () {
            var Number1 = document.createAttribute("TEXT");
            var Number2 = document.createAttribute("TEXT");
            
        }*/
    }

    document.getElementById("Subtract").onclick = function (_evt)
    {
        var subtractionwindow = new window()
        subtractionwindow.onload = function () {

        }
    }

    document.getElementById("Multiply").onclick = function (_evt)
    {
        var multiplicationwindow = new window()
        multiplicationwindow.onload = function () {

        }
    }

    document.getElementById("Divide").onclick = function (_evt)
    {
        var divisionwindow = new window()
        divisionwindow.onload = function () {

        }
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