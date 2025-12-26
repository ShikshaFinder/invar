export interface Product {
    family: string;
    title: string;
    subtitle: string;
    description: string;
    features?: string[];
    nutrition?: {
        headers: string[];
        sections: {
            title: string;
            items: string[][];
        }[];
    };
    image?: string;
    file: string;
    type: string;
}

export interface Ingredient {
    name: string;
    sourceDoc: string;
    highlights: string[];
    image?: string;
}

export const ingredients: Ingredient[] = [
    {
        name: "ARJUNA (Terminalia arjuna)",
        sourceDoc: "/Benefits of Arjuna (Terminalia arjuna).docx",
        image: "/Arjuna.jpg",
        highlights: [
            "Cardiotonic effects", "Anti-hypertensive", "Anti-inflammatory", "Antioxidant",
            "Arrhythmia prevention", "Cholesterol-lowering", "Improved coronary blood flow",
            "Bronchodilation", "Wound-healing", "Diuretic", "Renal protection",
            "Gastric protection", "Anti-stress", "Neuroprotective", "Bone-strengthening"
        ]
    },
    {
        name: "BEETROOT (Beta vulgaris)",
        sourceDoc: "/Benefits of Beetroot (Beta vulgaris).docx",
        image: "/beetroot.jpg",
        highlights: [
            "Blood pressure regulation", "Improved exercise performance", "Nitric oxide production",
            "Antioxidant properties", "Anti-inflammatory benefits", "Digestive support",
            "Cognitive enhancement", "Liver detoxification", "Anemia prevention",
            "Skin health", "Diabetes support"
        ]
    },
    {
        name: "GARCINIA CAMBOGIA",
        sourceDoc: "/Garcinia Cambogia Extract.docx",
        image: "/garcinia.jpg",
        highlights: [
            "Hydroxycitric Acid (HCA) supports appetite suppression",
            "Fat metabolism", "Reduction of LDL and triglycerides",
            "Improved lipid profile", "Potential blood sugar regulation",
            "Mild antidepressant effects via serotonin", "Anti-inflammatory properties"
        ]
    },
    {
        name: "OMEGA 3 (EPA/DHA)",
        sourceDoc: "/Omega 3.docx",
        image: "/omega.jpg",
        highlights: [
            "Heart protection", "Triglyceride reduction", "Anti-arrhythmic effects",
            "Anti-inflammatory", "Improved brain function", "Mood stabilization",
            "Bone and joint benefits", "Eye health", "Pregnancy and fetal development benefits"
        ]
    },
    {
        name: "VITAMINS, MINERALS, ZINC, DHA",
        sourceDoc: "/Vitamins, Minerals, Zinc, and DHA.docx",
        image: "/minrals.jpg",
        highlights: [
            "Vitamin A for vision and immunity",
            "Vitamin B complex for metabolism and neurological health",
            "Vitamin C for collagen and immunity",
            "Vitamin D for calcium absorption",
            "Vitamin E for cell protection",
            "Vitamin K for clotting and bone density",
            "Calcium for bones",
            "Magnesium for ATP synthesis and nerve function",
            "Iron for oxygen transport",
            "Potassium and sodium for electrolyte balance",
            "Zinc for immunity, healing, DNA synthesis",
            "DHA for brain, retina, inflammation control"
        ]
    }
];

export interface UseCase {
    title: string;
    description: string;
}

export const useCases: UseCase[] = [
    {
        title: "SORE THROAT SPRAY",
        description: "Symptomatic relief from throat pain, cough irritation, microbe-related soreness. Herbal action from ginger, honey, tulsi, curcumin, piperine."
    },
    {
        title: "SALLYPRO PROTEIN",
        description: "General nutrition, daily supplementation for protein intake, improving vitamins and minerals intake, general fitness and immunity support."
    },
    {
        title: "SALLYPRO C CARDIAC FORMULA",
        description: "Heart health, cardiac strengthening, circulation improvement, anti-inflammatory and antioxidant support due to Arjuna and Beetroot."
    },
    {
        title: "SALLYPRO D DIABESITY FORMULA",
        description: "Metabolic support, weight management, anti-inflammatory benefits, controlled carbohydrate metabolism, high fiber, EPA-DHA, green tea extract, CLA, Garcinia."
    }
];

export const products: Product[] = [
    {
        family: "PRODUCT 1",
        title: "SORE THROAT & COUGH RELIEF SPRAY",
        subtitle: "30 ml - Anise Flavour",
        description: "Spray formulation intended for throat discomfort relief, coughing, and soreness.",
        image: "/Throatwal Spray.png",
        features: [
            "Brand: INVAR",
            "Power of 5: Ginger, Tulsi, Honey, Curcumin, Piperin",
            "Certifications: Gluten Free, Sugar Free",
            "Usage: Relief for throat discomfort & cough"
        ],
        file: "/Sore Throat & Cough Relief Spray.docx",
        type: "Document",
    },
    {
        family: "PRODUCT 2",
        title: "SALLYPRO PROTEIN POWDER (Mango)",
        subtitle: "200 gm - Mango Flavour",
        description: "Protein Powder Enriched With Vitamin, Minerals & Zinc & DHA. A daily nutrition supplement.",
        image: "/01.png",
        features: [
            "Enriched with Vitamins, Minerals & Zinc",
            "Contains: Calcium, Vitamin D3, Magnesium",
            "With DHA for brain health",
            "Delicious Mango Flavour"
        ],
        nutrition: {
            headers: ["Nutrients", "Per 100g", "Per 30g", "% RDA"],
            sections: [
                {
                    title: "Nutritional Information",
                    items: [
                        ["Energy", "353.5 Kcal", "106.05 Kcal", "5.3%"],
                        ["Protein", "25 gm", "7.5 gm", "13.88%"],
                        ["Carbohydrates", "60 gm", "18 gm", "-"],
                        ["Sugar", "30 gm", "9 gm", "-"],
                        ["Fat", "1.5 gm", "0.45 gm", "-"],
                        ["Lycopene (10%)", "2000 mcg", "600 mcg", "-"],
                        ["L-Lysine", "25 mg", "7.5 mg", "-"],
                        ["Glutamic Acid", "10 mg", "3 mg", "-"],
                        ["Choline Bitartrate", "65 mg", "19.5 mg", "-"],
                        ["DHA (10%)", "100 mg", "30 mg", "-"]
                    ]
                },
                {
                    title: "Vitamins",
                    items: [
                        ["Vitamin A", "2000 IU", "600 IU", "18%"],
                        ["Vitamin D3", "1000 IU", "300 IU", "50%"],
                        ["Vitamin E", "15 mg", "4.5 mg", "45%"],
                        ["Vitamin K", "45 mcg", "13.5 mcg", "24.54%"],
                        ["Vitamin C", "80 mg", "24 mg", "30%"],
                        ["B1", "3 mg", "0.9 mg", "50%"],
                        ["B2", "3 mg", "0.9 mg", "36%"],
                        ["B3", "50 mg", "15 mg", "83.33%"],
                        ["B6", "5 mg", "1.5 mg", "62.56%"],
                        ["B12", "6 mcg", "1.8 mcg", "81.81%"]
                    ]
                },
                {
                    title: "Minerals",
                    items: [
                        ["Biotin", "133.33 mcg", "40 mcg", "100%"],
                        ["Pantothenic Acid", "6 mg", "1.8 mg", "36%"],
                        ["Folic Acid", "1 mg", "0.3 mg", "100%"],
                        ["Iron", "27 mg", "8.1 mg", "42.63%"],
                        ["Calcium", "1300 mg", "390 mg", "39%"],
                        ["Magnesium", "350 mg", "105 mg", "23.86%"],
                        ["Zinc", "10 mg", "3 mg", "17.64%"],
                        ["Iodine", "88 mcg", "26.4 mcg", "18.85%"],
                        ["Copper", "480 mcg", "144 mcg", "24.87%"],
                        ["Sodium", "420 mg", "126 mg", "6.3%"],
                        ["Potassium", "860 mg", "258 mg", "7.37%"],
                        ["Chloride", "240 mg", "72 mg", "3.17%"],
                        ["Phosphorus", "900 mg", "270 mg", "27%"],
                        ["Manganese", "5 mg", "1.5 mg", "37.5%"],
                        ["Selenium", "24 mcg", "7.2 mcg", "18%"],
                        ["Chromium", "75 mcg", "22.5 mcg", "45%"]
                    ]
                }
            ]
        },
        file: "/Vitamins, Minerals, Zinc, and DHA.docx",
        type: "Document",
    },
    {
        family: "PRODUCT 3",
        title: "SALLYPRO PROTEIN POWDER (Chocolate)",
        subtitle: "200 gm - Chocolate Flavour",
        description: "Protein Powder Enriched With Vitamin, Minerals & Zinc & DHA. A daily nutrition supplement.",
        image: "/03.png",
        features: [
            "Enriched with Vitamins, Minerals & Zinc",
            "Contains: Calcium, Vitamin D3, Magnesium",
            "With DHA for brain health",
            "Rich Chocolate Flavour"
        ],
        nutrition: {
            headers: ["Nutrients", "Per 100g", "Per 30g", "% RDA"],
            sections: [
                {
                    title: "Nutritional Information",
                    items: [
                        ["Energy", "353.5 Kcal", "106.05 Kcal", "5.3%"],
                        ["Protein", "25 gm", "7.5 gm", "13.88%"],
                        ["Carbohydrates", "60 gm", "18 gm", "-"],
                        ["Sugar", "30 gm", "9 gm", "-"],
                        ["Fat", "1.5 gm", "0.45 gm", "-"],
                        ["Lycopene (10%)", "2000 mcg", "600 mcg", "-"],
                        ["L-Lysine", "25 mg", "7.5 mg", "-"],
                        ["Glutamic Acid", "10 mg", "3 mg", "-"],
                        ["Choline Bitartrate", "65 mg", "19.5 mg", "-"],
                        ["DHA (10%)", "100 mg", "30 mg", "-"]
                    ]
                },
                {
                    title: "Vitamins",
                    items: [
                        ["Vitamin A", "2000 IU", "600 IU", "18%"],
                        ["Vitamin D3", "1000 IU", "300 IU", "50%"],
                        ["Vitamin E", "15 mg", "4.5 mg", "45%"],
                        ["Vitamin K", "45 mcg", "13.5 mcg", "24.54%"],
                        ["Vitamin C", "80 mg", "24 mg", "30%"],
                        ["B1", "3 mg", "0.9 mg", "50%"],
                        ["B2", "3 mg", "0.9 mg", "36%"],
                        ["B3", "50 mg", "15 mg", "83.33%"],
                        ["B6", "5 mg", "1.5 mg", "62.56%"],
                        ["B12", "6 mcg", "1.8 mcg", "81.81%"]
                    ]
                },
                {
                    title: "Minerals",
                    items: [
                        ["Biotin", "133.33 mcg", "40 mcg", "100%"],
                        ["Pantothenic Acid", "6 mg", "1.8 mg", "36%"],
                        ["Folic Acid", "1 mg", "0.3 mg", "100%"],
                        ["Iron", "27 mg", "8.1 mg", "42.63%"],
                        ["Calcium", "1300 mg", "390 mg", "39%"],
                        ["Magnesium", "350 mg", "105 mg", "23.86%"],
                        ["Zinc", "10 mg", "3 mg", "17.64%"],
                        ["Iodine", "88 mcg", "26.4 mcg", "18.85%"],
                        ["Copper", "480 mcg", "144 mcg", "24.87%"],
                        ["Sodium", "420 mg", "126 mg", "6.3%"],
                        ["Potassium", "860 mg", "258 mg", "7.37%"],
                        ["Chloride", "240 mg", "72 mg", "3.17%"],
                        ["Phosphorus", "900 mg", "270 mg", "27%"],
                        ["Manganese", "5 mg", "1.5 mg", "37.5%"],
                        ["Selenium", "24 mcg", "7.2 mcg", "18%"],
                        ["Chromium", "75 mcg", "22.5 mcg", "45%"]
                    ]
                }
            ]
        },
        file: "/Vitamins, Minerals, Zinc, and DHA.docx",
        type: "Document",
    },
    {
        family: "PRODUCT 4",
        title: "SALLYPRO D DIABESITY POWDER",
        subtitle: "200 gm - Vanilla Flavour",
        description: "Enriched with whey protein, Omega 3, fibers, CLA, Garcinia Cambogia Extract, micronutrients, antioxidants, and vitamins.",
        image: "/01.png",
        features: [
            "No added sugar / Sugar Free",
            "Contains: Calcium, EPA/DHA, Magnesium, Zinc",
            "Key Ingredients: Omega 3, Garcinia Cambogia, CLA",
            "Supports weight management & wellness"
        ],
        nutrition: {
            headers: ["Nutrients", "Per 100g", "Per 30g"],
            sections: [
                {
                    title: "Nutritional Information",
                    items: [
                        ["Energy", "348.7 Kcal", "104.61 Kcal"],
                        ["Protein", "32 gm", "9.6 gm"],
                        ["Carbohydrates", "40 gm", "12 gm"],
                        ["Sugar as Stevia", "0 gm", "-"],
                        ["Fat", "2.3 gm", "0.69 gm"],
                        ["Fiber", "20 gm", "6 gm"],
                        ["EPA", "300 mg", "90 mg"],
                        ["DHA", "200 mg", "60 mg"],
                        ["Conjugated Linoleic Acid", "8333 mg", "2500 mg"],
                        ["Green Tea Extract", "800 mg", "240 mg"],
                        ["Hydroxycitric Acid", "800 mg", "240 mg"],
                        ["Calcium", "667 mg", "200 mg"],
                        ["Inositol", "333.3 mg", "100 mg"],
                        ["Phosphorus", "300 mg", "90 mg"],
                        ["Magnesium", "166.7 mg", "50 mg"],
                        ["Vitamin C", "66.7 mg", "20 mg"],
                        ["Vitamin B3", "40 mg", "12 mg"],
                        ["Iron", "33.3 mg", "10 mg"],
                        ["Zinc", "16.7 mg", "5 mg"],
                        ["Vitamin E", "15 mg", "4.5 mg"],
                        ["Copper", "3.33 mg", "1 mg"],
                        ["Vitamin B1", "3 mg", "0.9 mg"],
                        ["Vitamin B2", "3 mg", "0.9 mg"],
                        ["Vitamin A", "1750 mcg", "525 mcg"],
                        ["Vitamin B6", "1.5 mg", "0.45 mg"],
                        ["Folic Acid", "150 mcg", "45 mcg"],
                        ["Chromium", "83.33 mcg", "25 mcg"],
                        ["Biotin", "83.33 mcg", "25 mcg"],
                        ["Vitamin B12", "1.5 mcg", "0.45 mcg"]
                    ]
                }
            ]
        },
        file: "/Garcinia Cambogia Extract.docx",
        type: "Document",
    },
    {
        family: "PRODUCT 5",
        title: "SALLYPRO C CARDIAC PROTEIN POWDER",
        subtitle: "200 gm - Dry Fruits Flavour",
        description: "Protein Powder with Arjuna and Beetroot Extract. Intended for heart health and cardiac wellness.",
        image: "/04.png",
        features: [
            "Enriched with Arjuna & Beetroot Extract",
            "Daily Nutrition Supplement for Heart Health",
            "Contains: Calcium, Vitamin D3, Magnesium, Zinc",
            "With DHA"
        ],
        nutrition: {
            headers: ["Nutrients", "Per 100g", "Per 30g"],
            sections: [
                {
                    title: "Nutritional Information",
                    items: [
                        ["Energy", "358.9 Kcal", "107.67 Kcal"],
                        ["Carbohydrate", "75 gm", "22.5 gm"],
                        ["Protein", "10 gm", "3 gm"],
                        ["Fat", "2.1 gm", "0.63 gm"],
                        ["Potassium", "480 mg", "144 mg"],
                        ["Chloride", "450 mg", "135 mg"],
                        ["Sodium", "350 mg", "105 mg"],
                        ["Calcium", "310 mg", "93 mg"],
                        ["Phosphorus", "300 mg", "90 mg"],
                        ["Choline", "80 mg", "24 mg"],
                        ["Magnesium", "60 mg", "18 mg"],
                        ["Arjuna Extract", "50 mg", "15 mg"],
                        ["Beetroot Extract", "25 mg", "7.5 mg"],
                        ["Niacinamide", "6.5 mg", "1.95 mg"],
                        ["Vitamin E Acetate", "6 mg", "1.8 mg"],
                        ["Zinc", "3.5 mg", "1.05 mg"],
                        ["Vitamin B6", "0.8 mg", "0.24 mg"],
                        ["Vitamin B2", "0.72 mg", "0.216 mg"],
                        ["Vitamin B1", "0.65 mg", "0.195 mg"],
                        ["Copper", "235 mcg", "70.5 mcg"],
                        ["Folic Acid", "100 mcg", "30 mcg"],
                        ["Vitamin A (Acetate)", "100 mcg", "30 mcg"],
                        ["DHA", "80 mg", "24 mg"],
                        ["Iodine", "40 mcg", "12 mcg"],
                        ["Molybdenum", "30 mcg", "9 mcg"],
                        ["Chromium", "25 mcg", "7.5 mcg"],
                        ["Vitamin K", "25 mcg", "7.5 mcg"],
                        ["Selenium", "20 mcg", "6 mcg"],
                        ["Biotin", "12.3 mcg", "3.69 mcg"],
                        ["Cholecalciferol", "4.2 mcg", "1.26 mcg"],
                        ["Vitamin B12", "1 mcg", "0.3 mcg"],
                        ["Manganese", "1 mg", "0.3 mg"]
                    ]
                }
            ]
        },
        file: "/Benefits of Arjuna (Terminalia arjuna).docx",
        type: "Document",
    },
    {
        family: "CATALOG",
        title: "Invar Product Catalog",
        subtitle: "Full Catalog",
        description: "View our complete product lineup and specifications.",
        image: undefined,
        file: "/Invar Pdf New.pdf",
        type: "PDF",
    },
];
