/* =====================================================
   HORARIOS INTERBUS
===================================================== */

/* =====================================================
   DATOS
===================================================== */

const schedules = {
  alvarez: {
    habitual: {
      ida: {
        week: [
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
          "14:40",
          "15:35",
          "16:35",
          "17:45",
          "18:40",
          "19:40",
          "20:45",
          "23:05",
        ],
        saturday: [
          "06:45",
          "08:00",
          "09:40",
          "10:40",
          "12:45",
          "14:10",
          "15:35",
          "17:30",
          "18:40",
          "20:25",
        ],
        sunday: [
          "06:45",
          "08:00",
          "09:40",
          "10:40",
          "12:45",
          "14:10",
          "15:35",
          "17:30",
          "18:40",
          "20:25",
        ],
      },

      vuelta: {
        week: [
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
          "00:10",
        ],
        saturday: [
          "08:20",
          "09:20",
          "11:20",
          "12:40",
          "14:10",
          "15:40",
          "17:20",
          "19:00",
          "20:20",
          "21:50",
        ],
        sunday: [
          "08:20",
          "09:20",
          "11:20",
          "12:40",
          "14:10",
          "15:40",
          "17:20",
          "19:00",
          "20:20",
          "21:50",
        ],
      },
    },

    vacacional: {
      ida: {
        week: [
          "05:25",
          "06:45",
          "07:25",
          "08:00",
          "09:40",
          "10:40",
          "11:40",
          "13:10",
          "14:40",
          "16:10",
          "17:45",
          "19:15",
          "20:45",
          "23:05",
        ],
        saturday: [
          "06:45",
          "08:00",
          "09:40",
          "10:40",
          "12:45",
          "14:10",
          "15:35",
          "17:30",
          "18:40",
          "20:25",
        ],
        sunday: [
          "06:45",
          "08:00",
          "09:40",
          "10:40",
          "12:45",
          "14:10",
          "15:35",
          "17:30",
          "18:40",
          "20:25",
        ],
      },

      vuelta: {
        week: [
          "06:35",
          "08:10",
          "09:00",
          "10:00",
          "11:15",
          "12:15",
          "13:10",
          "14:40",
          "16:15",
          "17:45",
          "19:20",
          "20:50",
          "22:05",
          "00:10",
        ],
        saturday: [
          "08:20",
          "09:20",
          "11:20",
          "12:40",
          "14:10",
          "15:40",
          "17:20",
          "19:00",
          "20:20",
          "21:50",
        ],
        sunday: [
          "08:20",
          "09:20",
          "11:20",
          "12:40",
          "14:10",
          "15:40",
          "17:20",
          "19:00",
          "20:20",
          "21:50",
        ],
      },
    },
  },

  /* =================================================
        ACEBAL
    ================================================= */

  acebal: {
    habitual: {
      ida: {
        week: [
          "06:30",
          "06:31",
          "08:00",
          "10:05",
          "11:30",
          "13:00",
          "14:50",
          "16:05",
          "16:35",
          "17:30",
          "18:40",
          "20:00",
        ],
        saturday: [
          "06:30",
          "08:30",
          "09:40",
          "11:40",
          "13:00",
          "15:00",
          "18:30",
        ],
        sunday: [
          "06:30",
          "08:30",
          "09:40",
          "11:40",
          "13:00",
          "15:00",
          "18:30",
          "19:31",
        ],
      },

      vuelta: {
        week: [
          "06:10",
          "08:15",
          "09:45",
          "11:00",
          "12:00",
          "13:45",
          "14:50",
          "15:40",
          "17:00",
          "18:20",
          "19:20",
          "21:00",
        ],
        saturday: [
          "08:15",
          "10:00",
          "11:10",
          "12:10",
          "13:31",
          "17:30",
          "17:31",
          "21:00",
        ],
        sunday: ["08:15", "10:00", "11:10", "12:10", "17:30", "18:00", "21:00"],
      },
    },

    vacacional: {
      ida: {
        week: [
          "06:30",
          "08:00",
          "10:00",
          "11:30",
          "12:30",
          "14:45",
          "15:50",
          "16:35",
          "18:05",
          "19:10",
        ],
        saturday: [
          "06:30",
          "08:30",
          "09:40",
          "11:40",
          "13:00",
          "15:00",
          "18:30",
        ],
        sunday: [
          "06:30",
          "08:30",
          "09:40",
          "11:40",
          "13:00",
          "15:00",
          "18:30",
          "19:31",
        ],
      },

      vuelta: {
        week: [
          "06:20",
          "08:20",
          "09:45",
          "11:30",
          "13:00",
          "14:00",
          "16:20",
          "16:30",
          "17:30",
          "18:40",
          "19:45",
          "21:00",
        ],
        saturday: [
          "08:15",
          "10:00",
          "11:10",
          "12:10",
          "13:31",
          "17:30",
          "17:31",
          "21:00",
        ],
        sunday: ["08:15", "10:00", "11:10", "12:10", "17:30", "18:00", "21:00"],
      },
    },
  },

  /* =================================================
        URANGA
     ================================================= */

  uranga: {
    type: "stops",
    availability: "Solo días hábiles",
    ida: {
      origin: "Uranga",
      destination: "Rosario",
      stops: [
        ["Uranga", "07:50"],
        ["4 Esquinas", "07:55"],
        ["Plaza Cnel. Domínguez", "08:05"],
        ["Pueblo Villa Amelia", "08:20"],
        ["Cruce", "08:40"],
        ["Terminal Rosario", "09:40"],
      ],
    },
    vuelta: {
      origin: "Rosario",
      destination: "Uranga",
      stops: [
        ["Terminal Rosario", "19:20"],
        ["Cruce", "20:20"],
        ["Pueblo Villa Amelia", "20:40"],
        ["Plaza Cnel. Domínguez", "20:55"],
        ["4 Esquinas", "21:05"],
        ["Uranga", "21:10"],
      ],
    },
  },
};

/* =====================================================
   NOMBRES
===================================================== */

const routeNames = {
  acebal: "Acebal",
  alvarez: "Álvarez",
  uranga: "Uranga",
};

const seasonNames = {
  habitual: "Horarios habituales",
  vacacional: "Horarios de vacaciones",
};

const dayNames = {
  week: "Lunes a viernes",
  saturday: "Sábados",
  sunday: "Domingos y feriados",
};

const directionNames = {
  ida: "Ida",
  vuelta: "Vuelta",
};

/* =====================================================
   VIGENCIAS DE LAS TABLAS
===================================================== */

const validityDates = {
  alvarez: {
    habitual: "Vigencia indicada en la web: 25/03/25",
    vacacional: "Vigencia indicada en la web: 23/12/24",
  },

  acebal: {
    habitual: "Vigencia indicada en la web: 04/03/24",
    vacacional: "Fecha de vigencia no indicada en la tabla",
  },
};

/* =====================================================
   ORDEN DE VISUALIZACIÓN
===================================================== */

const routeOrder = ["acebal", "alvarez"];
const seasonOrder = ["habitual", "vacacional"];
const dayOrder = ["week", "saturday", "sunday"];
const directionOrder = ["ida", "vuelta"];

/* =====================================================
   HELPER
===================================================== */

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

/* =====================================================
   RENDER
===================================================== */

function renderSchedules() {
  const container = document.getElementById("schedulesContainer");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  routeOrder.forEach(function (route) {
    const locality = createElement("section", "schedule-locality");
    locality.id = route;

    locality.appendChild(
      createElement("h2", "schedule-locality-title", routeNames[route]),
    );

    seasonOrder.forEach(function (season) {
      const seasonBlock = createElement("div", "schedule-season");

      seasonBlock.appendChild(
        createElement("h3", "schedule-season-title", seasonNames[season]),
      );

      seasonBlock.appendChild(
        createElement("p", "schedule-validity", validityDates[route][season]),
      );

      dayOrder.forEach(function (day) {
        const dayBlock = createElement("div", "schedule-day-block");

        dayBlock.appendChild(
          createElement("h4", "schedule-day-title", dayNames[day]),
        );

        const directions = createElement("div", "schedule-directions");

        directionOrder.forEach(function (direction) {
          const directionBlock = createElement("div", "schedule-direction");

          directionBlock.appendChild(
            createElement(
              "h5",
              "schedule-direction-title",
              directionNames[direction],
            ),
          );

          const timesBlock = createElement("div", "schedule-times");

          schedules[route][season][direction][day].forEach(function (time) {
            timesBlock.appendChild(createElement("div", "schedule-time", time));
          });

          directionBlock.appendChild(timesBlock);
          directions.appendChild(directionBlock);
        });

        dayBlock.appendChild(directions);
        seasonBlock.appendChild(dayBlock);
      });

      locality.appendChild(seasonBlock);
    });

    container.appendChild(locality);
  });
}

function renderUrangaSchedule() {
  const container = document.getElementById("schedulesContainer");

  if (!container) {
    return;
  }

  const route = schedules.uranga;

  const locality = createElement("section", "schedule-locality");
  locality.id = "uranga";

  locality.appendChild(
    createElement("h2", "schedule-locality-title", "Uranga"),
  );

  const seasonBlock = createElement("div", "schedule-season");
  seasonBlock.appendChild(
    createElement("h3", "schedule-season-title", "Horarios para Uranga"),
  );

  seasonBlock.appendChild(
    createElement(
      "p",
      "schedule-validity",
      "Disponibilidad del servicio: solo días hábiles",
    ),
  );

  ["ida", "vuelta"].forEach(function (direction) {
    const directionBlock = createElement("div", "uranga-direction");

    directionBlock.appendChild(
      createElement(
        "h4",
        "schedule-day-title",
        route[direction].origin + " - " + route[direction].destination,
      ),
    );

    const tableWrapper = createElement("div", "uranga-table-wrapper");
    const table = document.createElement("table");
    table.className = "uranga-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    route[direction].stops.forEach(function (stop) {
      const th = document.createElement("th");
      th.textContent = stop[0];
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const timeRow = document.createElement("tr");

    route[direction].stops.forEach(function (stop) {
      const td = document.createElement("td");
      td.textContent = stop[1];
      timeRow.appendChild(td);
    });

    tbody.appendChild(timeRow);
    table.appendChild(tbody);

    tableWrapper.appendChild(table);
    directionBlock.appendChild(tableWrapper);
    seasonBlock.appendChild(directionBlock);
  });

  locality.appendChild(seasonBlock);
  container.appendChild(locality);
}

renderSchedules();
renderUrangaSchedule();