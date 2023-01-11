const funcioncillaAlertas = function (func1: Function, func2: Function): void {
    func1();
    func2();
}


funcioncillaAlertas(function () {
    alert("Primer callback");
}, function () {
    alert("Segundo callback")
});