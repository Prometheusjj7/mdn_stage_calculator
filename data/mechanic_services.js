const SERVICE = {
    REMOVE_INSTALL_PART: "remove_install_part",
    REPAIR_LATARIA: "repair_lataria",
    REPAIR_ENGINE: "repair_engine",
    REFIL_NITRO: "refil_nitro",
    REPAIR_ECU: "repair_ecu",
    REPAIR_FILTER: "repair_filter",
    REPAIR_INTERCOOLER: "repair_intercooler",
    REPAIR_COLETOR: "repair_coletor",
    REPAIR_BOMBA_COMBUSTIVEL: "repair_bomba_combustivel",
    REPAIR_TURBO: "repair_turbo",
    REPAIR_EXAUSTOR: "repair_exaustor",
    REPAIR_CLUTCH: "repair_clutch",
    REPAIR_BRAKE: "repair_brake",
    REPAIR_SUSPENSION: "repair_suspension"
};

const services = [
    {
        id: SERVICE.REMOVE_INSTALL_PART,
        name: "Remover/Instalar Peça",
        price: 150,
        ingredients: []
    },
    {
        id: SERVICE.REPAIR_LATARIA,
        name: "Reparar Lataria",
        price: 200,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 6 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 7 }
        ]
    },
    {
        id: SERVICE.REPAIR_ENGINE,
        name: "Reparar Motor",
        price: 700,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 7 },
            { id: MATERIAL.REFINED_COPPER, quantity: 10 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 20 }
        ]
    },
    {
        id: SERVICE.REFIL_NITRO,
        name: "Refil de Nitro",
        price: 625,
        ingredients: []
    },
    {
        id: SERVICE.REPAIR_ECU,
        name: "Reparar ECU",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_COPPER, quantity: 10 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 6 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 5 }
        ]
    },
    {
        id: SERVICE.REPAIR_FILTER,
        name: "Reparar Filtro",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER, quantity: 10 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 10 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 9 }
        ]
    },
    {
        id: SERVICE.REPAIR_INTERCOOLER,
        name: "Reparar Intercooler",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 15 },
            { id: MATERIAL.REFINED_COPPER, quantity: 14 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 13 }
        ]
    },
    {
        id: SERVICE.REPAIR_COLETOR,
        name: "Reparar Coletor",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 15 },
            { id: MATERIAL.REFINED_COPPER, quantity: 14 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 13 }
        ]
    },
    {
        id: SERVICE.REPAIR_BOMBA_COMBUSTIVEL,
        name: "Reparar Bomba de Combustível",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 15 },
            { id: MATERIAL.REFINED_COPPER, quantity: 14 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 13 }
        ]
    },
    {
        id: SERVICE.REPAIR_TURBO,
        name: "Reparar Turbo",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 15 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 14 }
        ]
    },
    {
        id: SERVICE.REPAIR_EXAUSTOR,
        name: "Reparar Exaustor",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 15 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 14 }
        ]
    },
    {
        id: SERVICE.REPAIR_CLUTCH,
        name: "Reparar Embreagem",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 14 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 14 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 14 }
        ]
    },
    {
        id: SERVICE.REPAIR_BRAKE,
        name: "Reparar Freio",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER, quantity: 8 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 9 }
        ]
    },
    {
        id: SERVICE.REPAIR_SUSPENSION,
        name: "Reparar Suspensão",
        price: 750,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER, quantity: 8 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 9 }
        ]
    }
];
