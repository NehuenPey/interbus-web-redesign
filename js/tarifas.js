const fares = {
    acebal: {
        title: "Acebal",
        stops: [
            "Rosario",
            "Carolina",
            "V. Plata",
            "Acc. Dom.",
            "4 Esq.",
            "C. Sauce",
            "Acebal",
        ],
        fares: [
            [null, 4900, 5760, 6800, 8200, 9000, 9500],
            [null, 2100, 2100, 3000, 4200, 5200, 5700],
            [null, null, null, 2100, 3400, 4200, 4800],
            [null, null, null, null, 2310, 3170, 3690],
            [null, null, null, null, null, 2100, 2480],
            [null, null, null, null, null, null, 2100],
            [null, null, null, null, null, null, null],
        ],
        promos: [
            { route: "Rosario – La Carolina", price: 4500 },
            { route: "Rosario – Acebal", price: 9000 },
        ],
    },

    alvarez: {
        title: "Álvarez",
        stops: [
            "Rosario",
            "Carolina",
            "L. Muchachos",
            "Piñero",
            "Álvarez",
        ],
        fares: [
            [null, 4900, 5400, 6600, 7300],
            [null, 2100, 2100, 2825, 3510],
            [null, null, null, 2310, 3000],
            [null, null, null, null, 2100],
            [null, null, null, null, 2100],
        ],
        promos: [
            { route: "Rosario – La Carolina", price: 4500 },
            { route: "Rosario – Álvarez", price: 7000 },
        ],
    },

    albarellos: {
        title: "Albarellos",
        stops: [
            "Rosario",
            "Carolina",
            "V. Plata",
            "V. Amelia",
            "Acc. Dom.",
            "4 Esquinas",
            "Uranga",
            "Albarellos",
        ],
        fares: [
            [null, 4900, 5760, 7300, 6800, 8200, 9500, 10400],
            [null, 2100, 2100, 3500, 3000, 4200, 5400, 6700],
            [null, null, null, 2600, 2100, 3400, 4500, 5800],
            [null, null, null, null, 3000, 4300, 5500, 6700],
            [null, null, null, null, null, 2310, 3500, 4700],
            [null, null, null, null, null, null, 2310, 3500],
            [null, null, null, null, null, null, null, 2310],
            [null, null, null, null, null, null, null, null],
        ],
        promos: [
            { route: "Rosario – La Carolina", price: 4500 }
        ],
    },
};


// =====================================================
// ORDEN DE VISUALIZACIÓN
// =====================================================

const fareRouteOrder = [
    "acebal",
    "alvarez",
    "albarellos"
];


// =====================================================
// HELPERS
// =====================================================

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


// 4900 -> "$4.900"
// 10400 -> "$10.400"

function formatPrice(value) {
    return "$" + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// =====================================================
// RENDER
// =====================================================

function buildTable(route) {
    const wrapper = createElement(
        "div",
        "fare-table-wrap"
    );

    wrapper.tabIndex = 0;

    wrapper.setAttribute(
        "role",
        "region"
    );

    wrapper.setAttribute(
        "aria-label",
        "Tarifas de " + route.title
    );


    const table = createElement(
        "table",
        "fare-table"
    );


    // Encabezado: destinos

    const thead = createElement("thead");
    const headRow = createElement("tr");

    const corner = createElement(
        "th",
        "fare-corner"
    );

    corner.scope = "col";

    corner.innerHTML =
        '<span class="fare-corner-to">Destino</span>' +
        '<span class="fare-corner-from">Origen</span>';

    headRow.appendChild(corner);


    route.stops.forEach(function (stop) {
        const th = createElement(
            "th",
            "fare-col",
            stop
        );

        th.scope = "col";

        headRow.appendChild(th);
    });


    thead.appendChild(headRow);
    table.appendChild(thead);


    // Cuerpo: origen en cada fila

    const tbody = createElement("tbody");

    route.fares.forEach(function (row, rowIndex) {
        const tr = createElement("tr");

        const rowHeader = createElement(
            "th",
            "fare-row",
            route.stops[rowIndex]
        );

        rowHeader.scope = "row";

        tr.appendChild(rowHeader);


        row.forEach(function (value) {

            if (value === null) {
                const empty = createElement(
                    "td",
                    "fare-cell fare-empty",
                    "–"
                );

                empty.setAttribute(
                    "aria-label",
                    "Sin tarifa"
                );

                tr.appendChild(empty);

            } else {
                tr.appendChild(
                    createElement(
                        "td",
                        "fare-cell",
                        formatPrice(value)
                    )
                );
            }

        });


        tbody.appendChild(tr);
    });


    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
}


function buildPromos(route) {
    const promos = createElement(
        "div",
        "fare-promos"
    );


    promos.appendChild(
        createElement(
            "p",
            "fare-promos-title",
            "Tarifa promocional con cambio justo"
        )
    );


    const list = createElement(
        "ul",
        "fare-promos-list"
    );


    route.promos.forEach(function (promo) {
        const item = createElement(
            "li",
            "fare-promo"
        );


        item.appendChild(
            createElement(
                "span",
                "fare-promo-route",
                promo.route
            )
        );


        item.appendChild(
            createElement(
                "strong",
                "fare-promo-price",
                formatPrice(promo.price)
            )
        );


        list.appendChild(item);
    });


    promos.appendChild(list);

    return promos;
}


function renderFares() {
    const container =
        document.getElementById("faresContainer");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    fareRouteOrder.forEach(function (key) {
        const route = fares[key];


        const block = createElement(
            "section",
            "fare-locality"
        );

        block.id = key;


        block.appendChild(
            createElement(
                "h2",
                "fare-locality-title",
                route.title
            )
        );


        const card = createElement(
            "div",
            "fare-card"
        );


        card.appendChild(
            buildTable(route)
        );

        card.appendChild(
            buildPromos(route)
        );


        block.appendChild(card);
        container.appendChild(block);
    });
}


renderFares();