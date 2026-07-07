const PRODUCT = {
    LOCKPICK: "lockpick",
    ADVANCED_LOCKPICK: "advanced_lockpick",
    ENGINE_REPAIR_KIT: "engine_repair_kit",
    GARRAFA_NITRO_GRANDE: "garrafa_nitro_grande",
    RACING_SEATBELT: "racing_seatbelt",
    TIRE: "tire",
};

const products = [
    {
        id: PRODUCT.LOCKPICK,
        name: "Lockpick",
        image: "assets/images/lockpick.png",
        sellPrice: 250,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 15 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 10 }
        ]
    },
    {
        id: PRODUCT.ADVANCED_LOCKPICK,
        name: "Lockpick Avançado",
        image: "assets/images/lockpick_advanced.png",
        sellPrice: 500,
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 30 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 20 }
        ]
    },
    {
        id: PRODUCT.ENGINE_REPAIR_KIT,
        name: "Kit de Reparo de Motor",
        image: "assets/images/engine_repair_kit.png",
        sellPrice: 2500,
        ingredients: []
    },
    {
        id: PRODUCT.GARRAFA_NITRO_GRANDE,
        name: "Garrafa de Nitro Grande",
        image: "assets/images/garrafa_nitro_grande.png",
        sellPrice: 20000,
        ingredients: []
    }, {
        id: PRODUCT.RACING_SEATBELT,
        name: "Cinto de Segurança de Corrida",
        image: "assets/images/racing_seatbelt.png",
        sellPrice: 3000,
        ingredients: []
    }, {
        id: PRODUCT.TIRE,
        name: "Pneu",
        sellPrice: 150,
        ingredients: []
    },
];
