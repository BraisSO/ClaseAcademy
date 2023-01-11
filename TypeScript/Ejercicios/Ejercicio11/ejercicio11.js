"use strict";
const funcioncillaAlertas = function (func1, func2) {
    func1();
    func2();
};
funcioncillaAlertas(function () {
    alert("Primer callback");
}, function () {
    alert("Segundo callback");
});
