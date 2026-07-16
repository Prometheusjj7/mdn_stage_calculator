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

const components = [
    {
        id: COMPONENT.ECU,
        name: "ECU",
        image: "assets/images/ecu_stage1.png",
        stage: STAGE.STAGE_1,
        sellPrice: 9000,
        ingredients: [
            { id: MATERIAL.REFINED_COPPER, quantity: 100 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 100 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 100 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 100 },
            { id: MATERIAL.ELECTRONIC_COMPONENTS, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.BRAKE_KIT,
        name: "Kit de Freio",
        image: "assets/images/brake_kit.png",
        stage: STAGE.STAGE_2,
        sellPrice: 16500,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 240 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 240 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 240 },
            { id: MATERIAL.REFINED_COPPER, quantity: 240 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 240 }
        ]
    },
    {
        id: COMPONENT.AIR_FILTER,
        name: "Filtro de Ar",
        image: "assets/images/sport_air_filter.png",
        stage: STAGE.STAGE_2,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.SPORT_EXHAUST,
        name: "Escapamento Esportivo",
        image: "assets/images/sport_exhaust.png",
        stage: STAGE.STAGE_2,
        sellPrice: 18000,
        ingredients: [
            { id: MATERIAL.REFINED_SCRAP, quantity: 500 },
            { id: MATERIAL.REFINED_COPPER, quantity: 500 },
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 500 }
        ]
    },
    {
        id: COMPONENT.BIG_TURBO,
        name: "Turbina",
        image: "assets/images/big_turbo.png",
        stage: STAGE.STAGE_3,
        sellPrice: 22560,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 400 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 400 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 400 },
            { id: MATERIAL.REFINED_COPPER, quantity: 400 }
        ]
    },
    {
        id: COMPONENT.INTERCOOLER,
        name: "Intercooler",
        image: "assets/images/intercooler.png",
        stage: STAGE.STAGE_3,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.SUSPENSION_5,
        name: "Kit de Suspensão",
        image: "assets/images/suspension_5.png",
        stage: STAGE.STAGE_3,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.RACING_CLUTCH,
        name: "Embreagem Esportiva",
        image: "assets/images/racing_clutch.png",
        stage: STAGE.STAGE_3,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.INTAKE_MANIFOLD,
        name: "Coletor de Admissão",
        image: "assets/images/intake_manifold.png",
        stage: STAGE.STAGE_3,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    },
    {
        id: COMPONENT.FUEL_SYSTEM,
        name: "Sistema de Combustível",
        image: "assets/images/fuel_system_upgrade.png",
        stage: STAGE.STAGE_3,
        sellPrice: 11280,
        ingredients: [
            { id: MATERIAL.REFINED_PLASTIC, quantity: 200 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 200 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 200 },
            { id: MATERIAL.REFINED_COPPER, quantity: 200 }
        ]
    }
];
