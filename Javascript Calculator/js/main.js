// Your code here!
window.onload = function ()
{
    document.getElementById("Add").onclick = function (_evt)
    {
        Addition()
    }
}

function Addition()
{
    var a = 1;
    var b = 2;
    var c = a + b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}