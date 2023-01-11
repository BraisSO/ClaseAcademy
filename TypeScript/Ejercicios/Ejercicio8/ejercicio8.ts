type device = 'device' | 'laptop' | 'desktop';

let persona: {
    username: string,
    email: string,
    device: device
}[];

persona = [{ username: "brais", email: "brais@aaa.es", device: "device" },
{ username: "martin", email: "martin@aaa.es", device: "laptop" }];

 
function imprimirPersonas(persone: Object[]): void { 
    for (const key in persona) {
        if (Object.prototype.hasOwnProperty.call(persona, key)) {
            const element = persona[key];

            document.write("<p>");
            document.write(element.username+"<br>");
            document.write(element.email+"<br>");
            document.write(element.device+"<br>");
            document.write("</p>");
      

        }
    }
}

imprimirPersonas(persona);