const reloj = document.querySelector(".reloj");

const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        min: fecha.getMinutes(),
        seg: fecha.getSeconds(),
    };

    reloj.innerHTML = `${tiempo.hora}: ${tiempo.min}: ${tiempo.seg}`;
};

setInterval(getHora,1000);

/* se ejecuta una vez después de que paso un tiempo
en este ejemplo, cada 3 segundos
setTimeout((a=2, b=7)=>console.log(a+b),3000);
*/