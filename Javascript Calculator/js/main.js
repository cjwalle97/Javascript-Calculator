// Your code here!
window.onload = function ()
{
    
    document.getElementById("Add").onclick = function (_evt)
    {
        Addition(nx, ny)
    }
}

function Addition(a, b)
{
    var c = a + b;
    var messageDialog = new Windows.UI.Popups.MessageDialog("Here is your result ", c);
    messageDialog.showAsync();
}