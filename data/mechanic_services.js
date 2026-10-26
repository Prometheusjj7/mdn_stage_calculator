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
        price: 240,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_ENGINE,
        name: "Reparar Motor",
        price: 840,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_COPPER },
            { id: MATERIAL.REFINED_SCRAP }
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
        price: 110,
        ingredients: [
            { id: MATERIAL.REFINED_COPPER },
            { id: MATERIAL.REFINED_PLASTIC },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_FILTER,
        name: "Reparar Filtro",
        price: 125,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER },
            { id: MATERIAL.REFINED_PLASTIC },
            { id: MATERIAL.REFINED_ALUMINUM }
        ]
    },
    {
        id: SERVICE.REPAIR_INTERCOOLER,
        name: "Reparar Intercooler",
        price: 145,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_COPPER },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_COLETOR,
        name: "Reparar Coletor",
        price: 145,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_COPPER },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_BOMBA_COMBUSTIVEL,
        name: "Reparar Bomba de Combustível",
        price: 145,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_COPPER },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_TURBO,
        name: "Reparar Turbo",
        price: 115,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP },
            { id: MATERIAL.REFINED_ALUMINUM }
        ]
    },
    {
        id: SERVICE.REPAIR_EXAUSTOR,
        name: "Reparar Exaustor",
        price: 115,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP },
            { id: MATERIAL.REFINED_ALUMINUM }
        ]
    },
    {
        id: SERVICE.REPAIR_CLUTCH,
        name: "Reparar Embreagem",
        price: 145,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP },
            { id: MATERIAL.REFINED_ALUMINUM },
            { id: MATERIAL.REFINED_RUBBER }
        ]
    },
    {
        id: SERVICE.REPAIR_BRAKE,
        name: "Reparar Freio",
        price: 95,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    },
    {
        id: SERVICE.REPAIR_SUSPENSION,
        name: "Reparar Suspensão",
        price: 95,
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER },
            { id: MATERIAL.REFINED_SCRAP }
        ]
    }
];
