enum enumerado { "BLANCO" = "blanco", "ROJO" = "rojo", "NEGRO" = "negro" };

let usuario: {
    nombre: string,
    preferencias: enumerado}[];


usuario=[
{nombre:"Brais", preferencias:enumerado.BLANCO},
{nombre:"Martin", preferencias:enumerado.ROJO}
];


    for (const key in usuario) {
        if (Object.hasOwnProperty.call(usuario, key)) {
            const element = usuario[key];
            document.write("<ul>"+"<li>"+element.nombre+"</li>");  
            document.write("<li>"+element.preferencias+"</li>"+"</ul>");
        }
    }