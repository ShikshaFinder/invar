export interface Product {
    family: string;
    title: string;
    subtitle: string;
    description: string;
    detailIntro?: string;
    benefitAreas?: string[];
    usageDetails?: string[];
    qualityNotes?: string[];
    additional_description?: string; // Optional field for extra info box
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
    intro: string;
    role: string;
    focusAreas: string[];
    formulationNotes: string[];
    image?: string;
}

export const ingredients: Ingredient[] = [
    {
        name: "ARJUNA (Terminalia arjuna)",
        sourceDoc: "/Benefits of Arjuna (Terminalia arjuna).docx",
        image: "/Arjuna.jpg",
        intro: "Arjuna is a traditional botanical ingredient selected for formulas that keep cardiovascular wellness in view. Its profile brings together cardiotonic, circulation, antioxidant, and inflammation-related areas for a more complete ingredient story.",
        role: "Heart-focused botanical for cardiovascular and circulation-oriented nutrition.",
        focusAreas: ["Cardiovascular wellness", "Circulation support", "Antioxidant balance"],
        formulationNotes: [
            "Supports a heart-health narrative alongside beetroot and omega-3.",
            "Provides a botanical complement to daily nutritional support.",
            "Best understood within a balanced diet and professional care plan."
        ],
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
        intro: "Beetroot is a naturally nitrate-rich root used in nutrition formulations focused on circulation, exercise performance, and antioxidant support. It adds a recognizable, food-based ingredient story to the formula.",
        role: "Plant-based source for circulation, performance, and antioxidant support.",
        focusAreas: ["Nitric oxide pathway", "Exercise performance", "Antioxidant and digestive support"],
        formulationNotes: [
            "Pairs naturally with cardiovascular-focused nutrition.",
            "A food-derived ingredient that is easy to understand and communicate.",
            "A complementary ingredient, not a replacement for prescribed care."
        ],
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
        intro: "Garcinia cambogia is included in the metabolic-support conversation for its HCA content and its links to appetite and lipid metabolism. Its role is one part of a broader, balanced approach to healthy weight management.",
        role: "Metabolic-support botanical used in weight-management formulations.",
        focusAreas: ["Appetite and satiety", "Lipid metabolism", "Metabolic wellness"],
        formulationNotes: [
            "Works alongside fiber, protein, and lifestyle support in SALLYPRO D.",
            "Keeps the formula story broader than a single extract.",
            "Use only as directed, especially when taking medicines or managing a condition."
        ],
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
        intro: "EPA and DHA are long-chain omega-3 fatty acids used across heart, brain, eye, and maternal nutrition conversations. Their role connects cardiovascular support with broader whole-life nutrition.",
        role: "Essential fatty-acid pair for heart, brain, eye, and maternal nutrition.",
        focusAreas: ["Heart and triglycerides", "Brain and mood", "Eye and maternal nutrition"],
        formulationNotes: [
            "Pairs with micronutrients in daily nutrition formulations.",
            "Supports a broad nutrition story across different life stages.",
            "Dietary use should follow product directions and medical guidance when relevant."
        ],
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
        intro: "Vitamins, minerals, zinc, and DHA form the micronutrient foundation of daily nutrition. Together they support the formula story across immunity, energy metabolism, bones, blood formation, healing, and cognitive development.",
        role: "Broad micronutrient blend for daily nutrition and life-stage support.",
        focusAreas: ["Immunity and healing", "Metabolism and energy", "Bones, brain, and vision"],
        formulationNotes: [
            "Brings multiple micronutrients into one convenient daily format.",
            "Communicates both foundational and targeted nutrition in one blend.",
            "Needs should be considered alongside diet, age, life stage, and professional advice."
        ],
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
        description: `<p><strong>Symptomatic relief from throat pain and cough:</strong></p>\n<ul>\n<li>Provides fast relief from throat pain, cough irritation, and microbe-related soreness.</li>\n<li>Herbal action from ginger, honey, tulsi, curcumin, and piperine for natural soothing.</li>\n<li>Easy-to-use spray format for convenient application.</li>\n<li>Recommended for use as needed or as directed by your healthcare professional.</li>\n</ul>\n<p><strong>Usage:</strong> Spray directly into the throat as required.</p>`
    },
    {
        title: "SALLYPRO PROTEIN",
        description: `<p><strong>General nutrition and daily supplementation:</strong></p>\n<ul>\n<li>Supports muscle growth and recovery with high-quality protein.</li>\n<li>Improves daily intake of essential vitamins and minerals.</li>\n<li>Helps maintain general fitness and immunity for all age groups.</li>\n<li>Easy to mix with milk or water for a delicious, healthy drink.</li>\n</ul>\n<p><strong>Recommended Usage:</strong> Take 1-2 scoops daily or as directed by your healthcare professional.</p>`
    },
    {
        title: "SALLYPRO C CARDIAC FORMULA",
        description: "Heart health, cardiac strengthening, circulation improvement, anti-inflammatory and antioxidant support due to Arjuna and Beetroot."
    },
    {
        title: "SALLYPRO D DIABESITY FORMULA",
        description: `<p><strong>Metabolic support and weight management:</strong></p>\n<ul>\n<li>Formulated for healthy carbohydrate metabolism and weight control.</li>\n<li>Contains high fiber, EPA-DHA, green tea extract, CLA, and Garcinia Cambogia for comprehensive metabolic support.</li>\n<li>Provides anti-inflammatory and antioxidant benefits for overall wellness.</li>\n<li>Recommended for daily use as part of a balanced diet and active lifestyle.</li>\n</ul>\n<p><strong>Usage:</strong> Take 1-2 servings daily or as directed by your healthcare professional.</p>`
    }
];

export const products: Product[] = [
    {
        family: "PRODUCT 1",
        title: "SORE THROAT & COUGH RELIEF SPRAY",
        subtitle: "30 ml - Anise Flavour",
        description: "Spray formulation intended for throat discomfort relief, coughing, and soreness.",
        detailIntro: "A compact herbal spray designed for everyday throat comfort, with a focused blend of ginger, tulsi, honey, curcumin, and piperin in an easy-to-use format.",
        benefitAreas: ["Throat comfort", "Cough and soreness relief", "Convenient on-the-go format"],
        usageDetails: [
            "Spray directly into the throat as needed or as directed by a healthcare professional.",
            "Keep the compact spray format close for travel, work, or daily routines.",
            "Read the label and follow the recommended serving instructions."
        ],
        qualityNotes: ["30 ml spray format", "Anise flavour", "Gluten free and sugar free"],
        additional_description: `<p><strong>Why choose SORE THROAT & COUGH RELIEF SPRAY?</strong></p>\n<ul>\n<li>Provides fast relief from throat discomfort and cough.</li>\n<li>Contains natural ingredients: Ginger, Tulsi, Honey, Curcumin, Piperin.</li>\n<li>Gluten Free and Sugar Free for safe daily use.</li>\n<li>Easy-to-use spray format for on-the-go relief.</li>\n</ul>\n<p><strong>Usage:</strong> Spray directly into the throat as needed, or as directed by your healthcare professional.</p>`,
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
        detailIntro: "A mango-flavoured daily nutrition supplement that brings protein, essential micronutrients, zinc, and DHA together in one convenient serving.",
        benefitAreas: ["Daily protein nutrition", "Vitamin and mineral support", "DHA-supported brain nutrition"],
        usageDetails: [
            "Mix 1–2 scoops with milk or water, stir well, and consume daily.",
            "Use as part of a balanced diet and an active, age-appropriate routine.",
            "Follow the product label or the serving guidance provided by your healthcare professional."
        ],
        qualityNotes: ["200 g pack", "Mango flavour", "Enriched with vitamins, minerals, zinc, and DHA"],
        additional_description: `<p><strong>Why choose SALLYPRO Protein Powder (Mango)?</strong></p>\n<ul>\n<li>Delicious mango flavor for enjoyable daily nutrition.</li>\n<li>Supports muscle recovery and growth with high-quality protein.</li>\n<li>Enriched with essential vitamins and minerals for immunity and vitality.</li>\n<li>Contains DHA for brain health.</li>\n</ul>\n<p><strong>Usage:</strong> Mix 1-2 scoops with milk or water, stir well, and consume daily or as directed by your healthcare professional.</p>`,
        image: "/sallypro-mango.png",
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
                        ["DHA (10%)", "100 mg", "30 mg", "-"],
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
                        ["B12", "6 mcg", "1.8 mcg", "81.81%"],
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
                        ["Chromium", "75 mcg", "22.5 mcg", "45%"],
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
        detailIntro: "A chocolate-flavoured daily nutrition supplement formulated to make protein and micronutrient support easy to add to a regular routine.",
        benefitAreas: ["Daily protein nutrition", "Micronutrient coverage", "DHA-supported brain nutrition"],
        usageDetails: [
            "Mix 1–2 scoops with milk or water, stir well, and consume daily.",
            "Use as part of a balanced diet rather than as a substitute for varied meals.",
            "Follow the product label or the serving guidance provided by your healthcare professional."
        ],
        qualityNotes: ["200 g pack", "Chocolate flavour", "Enriched with vitamins, minerals, zinc, and DHA"],
        additional_description: `<p><strong>Why choose SALLYPRO Protein Powder (Chocolate)?</strong></p>\n<ul>\n<li>Formulated for daily nutrition and overall wellness.</li>\n<li>Supports muscle recovery and growth with high-quality protein.</li>\n<li>Enriched with essential vitamins and minerals for immunity and vitality.</li>\n<li>Delicious chocolate flavor makes it enjoyable for all ages.</li>\n</ul>\n<p><strong>Usage:</strong> Mix 1-2 scoops with milk or water, stir well, and consume daily or as directed by your healthcare professional.</p>`,
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
        title: "SALLYPRO C CARDIAC FORMULA",
        subtitle: "Cardiac Nutrition Formula",
        description: "A heart-focused nutrition formula with Arjuna and Beetroot for cardiovascular wellness, circulation, antioxidant balance, and inflammation support.",
        detailIntro: "SALLYPRO C brings together a focused cardiac-nutrition story around traditional botanical and food-derived ingredients, making it easier to support a heart-conscious daily routine.",
        benefitAreas: ["Cardiovascular wellness", "Circulation support", "Antioxidant and inflammation balance"],
        usageDetails: [
            "Use the serving size shown on the product label or as directed by a healthcare professional.",
            "Take as part of a balanced diet and an individualized cardiac-care plan.",
            "Speak with a qualified healthcare professional before use if you take medicines or manage a heart condition."
        ],
        qualityNotes: ["Heart-focused nutrition formula", "With Arjuna and Beetroot", "Designed for a cardiac-care nutrition story"],
        additional_description: `<p><strong>Why choose SALLYPRO C CARDIAC FORMULA?</strong></p>\n<ul>\n<li>Designed around cardiovascular wellness and daily nutritional support.</li>\n<li>Features Arjuna and Beetroot, ingredients associated with circulation and antioxidant support.</li>\n<li>Supports a heart-conscious routine alongside balanced nutrition and professional care.</li>\n<li>Convenient format for consistent daily use.</li>\n</ul>\n<p><strong>Usage:</strong> Follow the product label or use as directed by your healthcare professional.</p>`,
        image: "/invar-c15.jpeg",
        features: [
            "Cardiac-focused nutritional support",
            "With Arjuna and Beetroot",
            "Supports circulation and antioxidant balance",
            "Use alongside professional cardiac care"
        ],
        file: "/Invar Pdf New.pdf",
        type: "PDF",
    },
    {
        family: "PRODUCT 5",
        title: "SALLYPRO D DIABESITY POWDER",
        subtitle: "200 gm - Vanilla Flavour",
        description: "Enriched with whey protein, Omega 3, fibers, CLA, Garcinia Cambogia Extract, micronutrients, antioxidants, and vitamins.",
        detailIntro: "A vanilla-flavoured formula combining whey protein, fiber, omega-3, CLA, Garcinia cambogia extract, micronutrients, antioxidants, and vitamins for a broader metabolic-support nutrition story.",
        benefitAreas: ["Metabolic-support nutrition", "Protein and fiber intake", "Omega-3 and micronutrient support"],
        usageDetails: [
            "Mix 1–2 scoops with water or milk, stir well, and consume daily.",
            "Use alongside a balanced diet, regular movement, and an individualized wellness plan.",
            "Follow the product label and seek professional guidance when managing a medical condition."
        ],
        qualityNotes: ["200 g pack", "Vanilla flavour", "No added sugar", "Contains omega-3, fiber, CLA, and Garcinia cambogia"],
        additional_description: `<p><strong>Why choose SALLYPRO D DIABESITY POWDER?</strong></p>\n<ul>\n<li>Formulated for weight management and metabolic support.</li>\n<li>Contains Omega 3, CLA, Garcinia Cambogia, and high fiber.</li>\n<li>Supports healthy carbohydrate metabolism and antioxidant defense.</li>\n<li>No added sugar, suitable for daily use.</li>\n</ul>\n<p><strong>Usage:</strong> Mix 1-2 scoops with water or milk, stir well, and consume daily or as directed by your healthcare professional.</p>`,
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
        family: "CATALOG",
        title: "Invar Product Catalog",
        subtitle: "Full Catalog",
        description: "View our complete product lineup and specifications.",
        image: undefined,
        file: "/Invar Pdf New.pdf",
        type: "PDF",
    },
];
