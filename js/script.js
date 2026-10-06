const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}


// Horarios

const schedules = {

    alvarez: {

        week: {

            ida: [
                "05:15",
                "06:05",
                "06:45",
                "07:25",
                "08:00",
                "09:00",
                "10:00",
                "10:40",
                "11:40",
                "12:30",
                "13:30",
                "14:00",
                "15:35",
                "16:35",
                "17:45",
                "18:40",
                "19:40",
                "20:45",
                "23:05"
            ],

            vuelta: [
                "06:30",
                "07:30",
                "08:20",
                "09:15",
                "10:00",
                "10:55",
                "12:00",
                "12:30",
                "13:10",
                "14:05",
                "15:05",
                "16:15",
                "17:10",
                "18:10",
                "19:20",
                "20:10",
                "21:10",
                "22:05",
                "00:10"
            ]

        },

        saturday: {

            ida: [
                "06:45",
                "08:00",
                "09:40",
                "10:40",
                "12:45",
                "14:10",
                "15:35",
                "17:00",
                "18:40",
                "20:25"
            ],

            vuelta: [
                "08:20",
                "09:20",
                "11:20",
                "12:40",
                "14:10",
                "15:40",
                "17:20",
                "19:00",
                "20:20",
                "21:50"
            ]

        },

        sunday: {

            ida: [
                "06:45",
                "08:00",
                "09:40",
                "10:40",
                "12:45",
                "14:10",
                "15:35",
                "17:00",
                "18:40",
                "20:25"
            ],

            vuelta: [
                "08:20",
                "09:20",
                "11:20",
                "12:40",
                "14:10",
                "15:40",
                "17:20",
                "19:00",
                "20:20",
                "21:50"
            ]

        }

    },

    acebal: {

        week: {

            ida: [
                "06:30",
                "06:31",
                "08:00",
                "10:05",
                "11:30",
                "13:00",
                "13:50",
                "15:05",
                "16:35",
                "17:30",
                "18:40",
                "20:00"
            ],

            vuelta: [
                "06:10",
                "08:15",
                "09:45",
                "11:00",
                "12:00",
                "13:15",
                "14:50",
                "15:40",
                "17:00",
                "18:20",
                "19:20",
                "21:00"
            ]

        },

        saturday: {

            ida: [
                "06:30",
                "08:30",
                "09:40",
                "11:40",
                "13:00",
                "15:00",
                "19:30"
            ],

            vuelta: [
                "08:15",
                "10:00",
                "11:10",
                "13:10",
                "13:11",
                "17:30",
                "17:31",
                "21:00"
            ]

        },

        sunday: {

            ida: [
                "06:30",
                "08:30",
                "09:40",
                "11:40",
                "13:00",
                "15:00",
                "19:30",
                "19:31"
            ],

            vuelta: [
                "08:15",
                "10:00",
                "11:10",
                "13:10",
                "17:30",
                "18:00",
                "21:00"
            ]

        }

    }

};


const routeSelect =
    document.getElementById("routeSelect");

const directionSelect =
    document.getElementById("directionSelect");

const daySelect =
    document.getElementById("daySelect");

const scheduleTitle =
    document.getElementById("scheduleTitle");

const scheduleDay =
    document.getElementById("scheduleDay");

const scheduleTimes =
    document.getElementById("scheduleTimes");


const dayNames = {

    week: "Lunes a viernes",

    saturday: "Sábados",

    sunday: "Domingos y feriados"

};


function updateSchedule() {

    const route =
        routeSelect.value;

    const direction =
        directionSelect.value;

    const day =
        daySelect.value;


    const selectedSchedule =
        schedules[route][day][direction];


    let routeName;


    if (route === "alvarez") {

        routeName =
            direction === "ida"
                ? "Álvarez → Rosario"
                : "Rosario → Álvarez";

    } else {

        routeName =
            direction === "ida"
                ? "Acebal → Rosario"
                : "Rosario → Acebal";

    }


    scheduleTitle.textContent =
        routeName;

    scheduleDay.textContent =
        dayNames[day];

    scheduleTimes.innerHTML = "";


    if (!selectedSchedule ||
        selectedSchedule.length === 0) {

        scheduleTimes.innerHTML = `
            <p class="schedule-empty">
                No hay horarios disponibles para esta selección.
            </p>
        `;

        return;
    }


    selectedSchedule.forEach((time) => {

        const timeElement =
            document.createElement("span");

        timeElement.classList.add(
            "schedule-time"
        );

        timeElement.textContent =
            time;

        scheduleTimes.appendChild(
            timeElement
        );

    });

}


routeSelect.addEventListener(
    "change",
    updateSchedule
);

directionSelect.addEventListener(
    "change",
    updateSchedule
);

daySelect.addEventListener(
    "change",
    updateSchedule
);


updateSchedule();