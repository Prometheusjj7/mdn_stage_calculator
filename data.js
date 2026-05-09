const materials = [
    {
        id: "refined_plastic",
        name: "Plástico Refinado",
        image: "assets/images/refined-plastic.png",
        price: 6
    },
    {
        id: "refined_scrap",
        name: "Sucata Refinada",
        image: "assets/images/refined-scrap.png",
        price: 6
    },
    {
        id: "refined_rubber",
        name: "Borracha Refinada",
        image: "assets/images/refined-rubber.png",
        price: 6
    },
    {
        id: "refined_glass",
        name: "Vidro Refinado",
        image: "assets/images/refined-glass.png",
        price: 6
    },
    {
        id: "refined_copper",
        name: "Cobre Refinado",
        image: "assets/images/refined-copper.png",
        price: 6
    },
    {
        id: "refined_aluminum",
        name: "Alumínio Refinado",
        image: "assets/images/refined-aluminum.png",
        price: 6
    }
];

const components = [
    {
        id: "ecu",
        name: "ECU",
        image: "assets/images/ecu_stage1.png",
        stage: 1,
        sellPrice: 7500,
        ingredients: [
            { id: "refined_copper", quantity: 100 },
            { id: "refined_plastic", quantity: 100 },
            { id: "refined_scrap", quantity: 100 },
            { id: "refined_aluminum", quantity: 100 }
        ]
    },
    {
        id: "brake_kit",
        name: "Kit de Freio",
        image: "assets/images/brake_kit.png",
        stage: 2,
        sellPrice: 13750,
        ingredients: [
            { id: "refined_plastic", quantity: 240 },
            { id: "refined_scrap", quantity: 240 },
            { id: "refined_rubber", quantity: 240 },
            { id: "refined_copper", quantity: 240 },
            { id: "refined_aluminum", quantity: 240 }
        ]
    },
    {
        id: "air_filter",
        name: "Filtro de Ar",
        image: "assets/images/sport_air_filter.png",
        stage: 2,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    },
    {
        id: "sport_exhaust",
        name: "Escapamento Esportivo",
        image: "assets/images/sport_exhaust.png",
        stage: 2,
        sellPrice: 15000,
        ingredients: [
            { id: "refined_scrap", quantity: 500 },
            { id: "refined_copper", quantity: 500 },
            { id: "refined_aluminum", quantity: 500 }
        ]
    },
    {
        id: "big_turbo",
        name: "Turbina",
        image: "assets/images/big_turbo.png",
        stage: 3,
        sellPrice: 18800,
        ingredients: [
            { id: "refined_plastic", quantity: 400 },
            { id: "refined_rubber", quantity: 400 },
            { id: "refined_scrap", quantity: 400 },
            { id: "refined_copper", quantity: 400 }
        ]
    },
    {
        id: "intercooler",
        name: "Intercooler",
        image: "assets/images/intercooler.png",
        stage: 3,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    },
    {
        id: "suspension_5",
        name: "Kit de Suspensão",
        image: "assets/images/suspension_5.png",
        stage: 3,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    },
    {
        id: "racing_clutch",
        name: "Embreagem Esportiva",
        image: "assets/images/racing_clutch.png",
        stage: 3,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    },
    {
        id: "intake_manifold",
        name: "Coletor de Admissão",
        image: "assets/images/intake_manifold.png",
        stage: 3,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    },
    {
        id: "fuel_system",
        name: "Sistema de Combustível",
        image: "assets/images/fuel_system_upgrade.png",
        stage: 3,
        sellPrice: 9400,
        ingredients: [
            { id: "refined_plastic", quantity: 200 },
            { id: "refined_rubber", quantity: 200 },
            { id: "refined_scrap", quantity: 200 },
            { id: "refined_copper", quantity: 200 }
        ]
    }
];

const services = [
    {
        id: "remove_install_part",
        name: "Remover/Instalar Peça",
        price: 150,
        ingredients: []
    },
    {
        id: "repair_lataria",
        name: "Reparar Lataria",
        price: 200,
        ingredients: [
            { id: "refined_aluminum", quantity: 6 },
            { id: "refined_scrap", quantity: 7 }
        ]
    },
    {
        id: "repair_engine",
        name: "Reparar Motor",
        price: 700,
        ingredients: [
            { id: "refined_aluminum", quantity: 7 },
            { id: "refined_copper", quantity: 10 },
            { id: "refined_scrap", quantity: 20 }
        ]
    },
    {
        id: "refil_nitro",
        name: "Refil de Nitro",
        price: 625,
        ingredients: []
    },
    {
        id: "repair_ecu",
        name: "Reparar ECU",
        price: 750,
        ingredients: [
            { id: "refined_copper", quantity: 10 },
            { id: "refined_plastic", quantity: 6 },
            { id: "refined_scrap", quantity: 5 }
        ]
    },
    {
        id: "repair_filter",
        name: "Reparar Filtro",
        price: 750,
        ingredients: [
            { id: "refined_rubber", quantity: 10 },
            { id: "refined_plastic", quantity: 10 },
            { id: "refined_aluminum", quantity: 9 }
        ]
    },
    {
        id: "repair_intercooler",
        name: "Reparar Intercooler",
        price: 750,
        ingredients: [
            { id: "refined_aluminum", quantity: 15 },
            { id: "refined_copper", quantity: 14 },
            { id: "refined_scrap", quantity: 13 }
        ]
    },
    {
        id: "repair_coletor",
        name: "Reparar Coletor",
        price: 750,
        ingredients: [
            { id: "refined_aluminum", quantity: 15 },
            { id: "refined_copper", quantity: 14 },
            { id: "refined_scrap", quantity: 13 }
        ]
    },
    {
        id: "repair_bomba_combustivel",
        name: "Reparar Bomba de Combustível",
        price: 750,
        ingredients: [
            { id: "refined_aluminum", quantity: 15 },
            { id: "refined_copper", quantity: 14 },
            { id: "refined_scrap", quantity: 13 }
        ]
    },
    {
        id: "repair_turbo",
        name: "Reparar Turbo",
        price: 750,
        ingredients: [
            { id: "refined_scrap", quantity: 15 },
            { id: "refined_aluminum", quantity: 14 }
        ]
    },
    {
        id: "repair_exaustor",
        name: "Reparar Exaustor",
        price: 750,
        ingredients: [
            { id: "refined_scrap", quantity: 15 },
            { id: "refined_aluminum", quantity: 14 }
        ]
    },
    {
        id: "repair_clutch",
        name: "Reparar Embreagem",
        price: 750,
        ingredients: [
            { id: "refined_scrap", quantity: 14 },
            { id: "refined_aluminum", quantity: 14 },
            { id: "refined_rubber", quantity: 14 }
        ]
    },
    {
        id: "repair_brake",
        name: "Reparar Freio",
        price: 750,
        ingredients: [
            { id: "refined_rubber", quantity: 8 },
            { id: "refined_scrap", quantity: 9 }
        ]
    },
    {
        id: "repair_suspension",
        name: "Reparar Suspensão",
        price: 750,
        ingredients: [
            { id: "refined_rubber", quantity: 8 },
            { id: "refined_scrap", quantity: 9 }
        ]
    }
];

const products = [
    {
        id: "lockpick",
        name: "Lockpick",
        image: "assets/images/lockpick.png",
        sellPrice: 250,
        ingredients: [
            { id: "refined_aluminum", quantity: 15 },
            { id: "refined_scrap", quantity: 10 }
        ]
    },
    {
        id: "advanced_lockpick",
        name: "Lockpick Avançado",
        image: "assets/images/lockpick_advanced.png",
        sellPrice: 500,
        ingredients: [
            { id: "refined_aluminum", quantity: 30 },
            { id: "refined_scrap", quantity: 20 }
        ]
    },
    {
        id: "engine_repair_kit",
        name: "Kit de Reparo de Motor",
        image: "assets/images/engine_repair_kit.png",
        sellPrice: 2500,
        ingredients: []
    },
    {
        id: "garrafa_nitro_grande",
        name: "Garrafa de Nitro Grande",
        image: "assets/images/garrafa_nitro_grande.png",
        sellPrice: 20000,
        ingredients: []
    }, {
        id: "racing_seatbelt",
        name: "Cinto de Segurança de Corrida",
        image: "assets/images/racing_seatbelt.png",
        sellPrice: 3000,
        ingredients: []
    },
];

const partners = [
    { name: "Crew Blacklist", discount: 10 },
    { name: "YellowJack", discount: 10 },
    { name: "Crew Midnight", discount: 10 },
    { name: "Cassey Dinner", discount: 10 },
    { name: "Crips", discount: 10 },
    { name: "Funcionário", discount: 15 }
];