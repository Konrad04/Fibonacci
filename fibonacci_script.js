function fibo() {
    var a = 0;
    var b = 1;
    var c = 0;
    var n = document.forms['ciag']['pozycja'].value;


    if ((parseFloat(n)) > 1) {
        for (var i = 0; i < n - 1; i++) {
            c = a + b;
            a = b;
            b = c;

        }
        alert("Wybrany element wynosi: " + c);
    }
    else if (n == 1) {
        alert("Wybrany element wynosi: " + b);

    }
    else if (n < 1) {
        alert("Wybrany element wynosi: " + a);
    }
}