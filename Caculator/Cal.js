var Text = "Calculator programmed in Java Script";
var Speed = 150;
var Width = 64;
var TextLength = Text.length;
var Pos = 1 - Width + TextLength;
function TextMarquee()
{
    Pos++;
    var TextOut = "";
    if (Pos == TextLength)
        Pos = 1 - Width;
    if (Pos < 0)
    { for (var i=1; i<=Math.abs(Pos); i++)
        TextOut = TextOut + " ";
        TextOut = TextOut + Text.substring(0,Width-i+1);
    }
    else
        TextOut = TextOut + Text.substring(Pos,Width+Pos);
    window.status = TextOut;
    window.setTimeout("TextMarquee()",Speed);
}

var inv = 0; <!-- 1 if inverse function has to be taken -->
var flag = 0; <!-- 0 if "=" is pressed -->
var flag2 = 0; <!-- 1 if "+","-","*" or "/" pressed -->
var point = 0; <!-- 1 if "." is pressed -->

function Clr(Fi,Ei)
{
    flag2 = 0;
    point = 0;
    document.forms[Fi].elements[Ei].value = "";
}
function Res(Fi,Ei)
{
    if (flag2 == 0)
    {
        var x = eval(document.forms[Fi].elements[Ei].value);
        document.forms[Fi].elements[Ei].value = x;
        flag = 0;
        point = 0;
    }
}
function Add(Fi,Ei,n)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;

    if (st.charAt(len-1) == ")")
        return;

    if (flag==0)
        document.forms[Fi].elements[Ei].value = "";

    document.forms[Fi].elements[Ei].value =
        document.forms[Fi].elements[Ei].value + n;
    flag = 1;
    flag2 = 0;
}

function Fnc(Fi,Ei,n)
{
    var st = document.forms[Fi].elements[Ei].value;
    var len = st.length;
    if (flag2 == 0)
    {
        flag2 = 1;
        flag = 1;
        point = 0;
        document.forms[Fi].elements[Ei].value =
            document.forms[Fi].elements[Ei].value + n;
    }
}

var mem =0;

function mplus() {
    mem += eval(document.forms[0].elements[0].value);
    document.forms[0].elements[0].value = mem;
}

function mm() {
    mem -= eval(document.forms[0].elements[0].value);
    document.forms[0].elements[0].value = mem;
}

function mclr() {
    mem =0;
    document.forms[0].elements[0].value = " ";
}

