const COMPONENT = {
    ECU: "ecu",
    BRAKE_KIT: "brake_kit",
    AIR_FILTER: "air_filter",
    SPORT_EXHAUST: "sport_exhaust",
    BIG_TURBO: "big_turbo",
    INTERCOOLER: "intercooler",
    SUSPENSION_5: "suspension_5",
    RACING_CLUTCH: "racing_clutch",
    INTAKE_MANIFOLD: "intake_manifold",
    FUEL_SYSTEM: "fuel_system"
};

const STAGE = {
    STAGE_1: 1,
    STAGE_2: 2,
    STAGE_3: 3
};

const STAGE_CLASS_PRICING = {
    [STAGE.STAGE_1]: {
        name: "Classe D",
        total: 2310,
        parts: [
            { name: "Freio e suspensão (cada)", price: 210 },
            { name: "ECU", price: 350 },
            { name: "Filtro de ar", price: 350 },
            { name: "Escape", price: 210 },
            { name: "Coletor", price: 140 },
            { name: "Combustível", price: 140 },
            { name: "Turbo", price: 280 },
            { name: "Intercooler", price: 210 },
            { name: "Embreagem", price: 210 }
        ]
    },
    [STAGE.STAGE_2]: {
        name: "Classe C",
        total: 3120,
        parts: [
            { name: "Freio e suspensão (cada)", price: 280 },
            { name: "ECU", price: 490 },
            { name: "Filtro de ar", price: 490 },
            { name: "Escape", price: 280 },
            { name: "Coletor", price: 175 },
            { name: "Combustível", price: 175 },
            { name: "Turbo", price: 390 },
            { name: "Intercooler", price: 280 },
            { name: "Embreagem", price: 280 }
        ]
    },
    [STAGE.STAGE_3]: {
        name: "Classe B",
        total: 3920,
        parts: [
            { name: "Freio e suspensão (cada)", price: 350 },
            { name: "ECU", price: 630 },
            { name: "Filtro de ar", price: 630 },
            { name: "Escape", price: 350 },
            { name: "Coletor", price: 210 },
            { name: "Combustível", price: 210 },
            { name: "Turbo", price: 490 },
            { name: "Intercooler", price: 350 },
            { name: "Embreagem", price: 350 }
        ]
    }
};

const components = [
    {
        id: COMPONENT.ECU,
        name: "ECU",
        stage: STAGE.STAGE_1,
        sellPrice: 350,
        image: "assets/images/ecu_stage1.png",
        ingredients: [
            { id: MATERIAL.ELECTRONIC_COMPONENT, quantity: 1 },
            { id: MATERIAL.REFINED_COPPER, quantity: 2 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.BRAKE_KIT,
        name: "Kit de Freio",
        stage: STAGE.STAGE_1,
        sellPrice: 320,
        image: "assets/images/brake_kit.png",
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 3 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 2 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 1 }
        ]
    },
    {
        id: COMPONENT.AIR_FILTER,
        name: "Filtro de Ar",
        stage: STAGE.STAGE_1,
        sellPrice: 350,
        image: "assets/images/sport_air_filter.png",
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 },
            { id: MATERIAL.REFINED_GLASS, quantity: 1 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 1 }
        ]
    },
    {
        id: COMPONENT.SPORT_EXHAUST,
        name: "Escape Esportivo",
        stage: STAGE.STAGE_1,
        sellPrice: 400,
        image: "assets/images/sport_exhaust.png",
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 4 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 2 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.BIG_TURBO,
        name: "Turbo Grande",
        stage: STAGE.STAGE_2,
        sellPrice: 780,
        image: "assets/images/big_turbo.png",
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 4 },
            { id: MATERIAL.REFINED_COPPER, quantity: 3 },
            { id: MATERIAL.ELECTRONIC_COMPONENT, quantity: 2 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.INTERCOOLER,
        name: "Intercooler",
        stage: STAGE.STAGE_2,
        sellPrice: 640,
        image: "assets/images/intercooler.png",
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 4 },
            { id: MATERIAL.REFINED_GLASS, quantity: 2 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.SUSPENSION_5,
        name: "Suspensão 5",
        stage: STAGE.STAGE_2,
        sellPrice: 700,
        image: "assets/images/suspension_5.png",
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 3 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 3 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.RACING_CLUTCH,
        name: "Embreagem Racing",
        stage: STAGE.STAGE_3,
        sellPrice: 910,
        image: "assets/images/racing_clutch.png",
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 3 },
            { id: MATERIAL.REFINED_COPPER, quantity: 2 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 2 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.INTAKE_MANIFOLD,
        name: "Coletor de Admissão",
        stage: STAGE.STAGE_3,
        sellPrice: 980,
        image: "assets/images/intake_manifold.png",
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 4 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 3 },
            { id: MATERIAL.REFINED_COPPER, quantity: 2 }
        ]
    },
    {
        id: COMPONENT.FUEL_SYSTEM,
        name: "Sistema de Combustível",
        stage: STAGE.STAGE_3,
        sellPrice: 1050,
        image: "assets/images/fuel_system_upgrade.png",
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 4 },
            { id: MATERIAL.REFINED_COPPER, quantity: 3 },
            { id: MATERIAL.REFINED_GLASS, quantity: 2 },
            { id: MATERIAL.ELECTRONIC_COMPONENT, quantity: 1 }
        ]
    }
];

