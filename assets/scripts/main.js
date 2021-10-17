//reloj!
const hour = document.getElementById("clock-hour"),
    minutes = document.getElementById("clock-minutes"),
    seconds = document.getElementById("clock-seconds");

//obtendremos la informacion del DATE
const clock = () => {
    //obetenemos la fecha
    let date = new Date();

    //creamos una instancia de la hora, minutos y segundos
    let hora = date.getHours() * 30,
        minutos = date.getMinutes() * 6,
        segundos = date.getSeconds() * 6;

    //agregamos rotacion a los objetos
    hour.style.transform = `rotateZ(${hora + minutos / 12}deg)`;
    minutes.style.transform = `rotateZ(${minutos}deg)`;
    seconds.style.transform = `rotateZ(${segundos}deg)`;
};
setInterval(clock, 1000);

//Clock y Date textos

const textHour = document.getElementById("text-hour"),
    textMinutes = document.getElementById("text-minutes"),
    textAmPm = document.getElementById("text-ampm"),
    dateDay = document.getElementById("date-day");
dateMonth = document.getElementById("date-month");
dateYear = document.getElementById("date-year");

const clockText = () => {
    let date = new Date();

    let hora = date.getHours(),
        ampm,
        minutos = date.getMinutes(),
        fecha = date.getDate(),
        mes = date.getMonth(),
        año = date.getFullYear();

    //mostramos la horario
    textHour.innerHTML = `${hora}`;

    //detectamos que si la hora es mayor de las 12, automaticamente cambie a PM
    if (hora >= 12) {
        hora = hora - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    //si es medianoche se establezca en 0
    if (hora == 0) {
        hora = 12;
    }
    //si es menos de las 10 am, agrega un 0 por delante
    if (hora < 10) {
        hora = `0${hora}`;
    }

    //si los minutos son menos que 10, se agrega un 0 p
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }

    //mostramos los minutos
    textMinutes.innerHTML = `:${minutos}`;
    //mostramos si es pm o am
    textAmPm.innerHTML = ampm;

    //obtendremos los meses y años para mostrarlos
    let meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    //y enseñamos el dia, el mes y el año
    dateDay.innerHTML = fecha;
    dateMonth.innerHTML = `${meses[mes]}`;
    dateYear.innerHTML = año;
};

//mostramos las fechas
setInterval(clockText, 1000);

//Dark-light theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});