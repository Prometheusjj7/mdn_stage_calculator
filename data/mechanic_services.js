const services = [
    {
        id: "diagnostico",
        name: "Diagnóstico",
        price: 180,
        image: "",
        ingredients: [
            { id: MATERIAL.ELECTRONIC_COMPONENT, quantity: 1 },
            { id: MATERIAL.REFINED_GLASS, quantity: 1 }
        ]
    },
    {
        id: "balanceamento",
        name: "Balanceamento",
        price: 220,
        image: "",
        ingredients: [
            { id: MATERIAL.REFINED_RUBBER, quantity: 2 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 2 }
        ]
    },
    {
        id: "ajuste_suspensao",
        name: "Ajuste de Suspensão",
        price: 260,
        image: "",
        ingredients: [
            { id: MATERIAL.REFINED_ALUMINUM, quantity: 2 },
            { id: MATERIAL.REFINED_RUBBER, quantity: 2 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 1 }
        ]
    },
    {
        id: "tunagem_motor",
        name: "Tunagem de Motor",
        price: 420,
        image: "",
        ingredients: [
            { id: MATERIAL.ELECTRONIC_COMPONENT, quantity: 2 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 },
            { id: MATERIAL.REFINED_COPPER, quantity: 2 }
        ]
    },
    {
        id: "pintura",
        name: "Pintura Automotiva",
        price: 300,
        image: "",
        ingredients: [
            { id: MATERIAL.REFINED_GLASS, quantity: 1 },
            { id: MATERIAL.REFINED_PLASTIC, quantity: 2 },
            { id: MATERIAL.REFINED_SCRAP, quantity: 2 }
        ]
    }
];
