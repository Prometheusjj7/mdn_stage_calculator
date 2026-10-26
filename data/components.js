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
