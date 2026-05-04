/*
async function consumirApi(url, metodo='GET', datos=null) {
    try{
        const opciones = {
            method: metodo,
            headers:{
                'Content-Type':'aplication/json'
            }
        };

        if (datos){
            opciones.body = JSON.stringify(datos);
        }

        const response = await fetch(url, opciones);

        if (!response.ok){
            throw new Error('Error Http','${response.status}');
        }

        const data = await response.json();
        console.log('Respuesta:', data);
        return data;
        
    } catch(error){
        console.error('Error al consumir el API: ', error);       
    }
}
*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();
            alert(data.msg);

        } catch (error) {
            console.error(error);
            alert("Error de conexión");
        }
    });
});