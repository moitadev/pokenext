import { NextResponse } from "next/server";


export async function GET() {
    const pokecolors = [
        {
          id: 1,
          name: "bulbasaur",
          color: "#399494",
          rgb: "rgba(57, 148, 148, .3)"
        },
        {
          id: 2,
          name: "ivysaur",
          color: "#209483",
          rgb: "rgba(32, 148, 131, .3)"
        },
        {
          id: 3,
          name: "venusaur",
          color: "#20b49c",
          rgb: "rgba(32, 180, 156, .3)"
        },
        {
          id: 4,
          name: "charmander",
          color: "#ff9441",
          rgb: "rgba(255, 148, 65"
        },
        {
          id: 5,
          name: "charmeleon",
          color: "#cd3939",
          rgb: "rgba(205, 57, 57, .3)"
        },
        {
          id: 6,
          name: "charizard",
          color: "#ee8329",
          rgb: "rgba(238, 131, 41, .3)"
        },
        {
          id: 7,
          name: "squirtle",
          color: "#5a9ca4",
          rgb: "rgba(90, 156, 164, .3)"
        },
        {
          id: 8,
          name: "wartortle",
          color: "#8bacf6",
          rgb: "rgba(139, 172, 246, .3)"
        },
        {
          id: 9,
          name: "blastoise",
          color: "#5a8bcd",
          rgb: "rgba(90, 139, 205, .3)"
        },
        {
          id: 10,
          name: "caterpie",
          color: "#31ac41",
          rgb: "rgba(49, 172, 65, .3)"
        },
        {
          id: 11,
          name: "metapod",
          color: "#6a8b5a",
          rgb: "rgba(106, 139, 90, .3)"
        },
        {
          id: 12,
          name: "butterfree",
          color: "#eeeeff",
          rgb: "rgba(238, 238, 255, .3)"
        },
        {
          id: 13,
          name: "weedle",
          color: "#cd7310",
          rgb: "rgba(205, 115, 16, .3)"
        },
        {
          id: 14,
          name: "kakuna",
          color: "#cd9c10",
          rgb: "rgba(205, 156, 16, .3)"
        },
        {
          id: 15,
          name: "beedrill",
          color: "#fff6a4",
          rgb: "(255, 246, 164, .3)"
        },
        {
          id: 16,
          name: "pidgey",
          color: "#a4625a",
          rgb: "rgba(164, 98, 90, .3)"
        },
        {
          id: 17,
          name: "pidgeotto",
          color: "#ffe68b",
          rgb: "rgba(255, 230, 139, .3)"
        },
        {
          id: 18,
          name: "pidgeot",
          color: "#e6b462",
          rgb: "rgba(230, 180, 98, .3)"
        },
        {
          id: 19,
          name: "rattata",
          color: "#b473bd",
          rgb: "rgba(180, 115, 189, .3)"
        },
        {
          id: 20,
          name: "raticate",
          color: "#a47329",
          rgb: "rgba(164, 115, 41, .3)"
        },
        {
          id: 21,
          name: "spearow",
          color: "#ee524a",
          rgb: "rgba(238, 82, 74, .3)"
        },
        {
          id: 22,
          name: "fearow",
          color: "#b47320",
          rgb: "rgba(180, 115, 32, .3)"
        },
        {
          id: 23,
          name: "ekans",
          color: "#cd62b4",
          rgb: "rgba(205, 98, 180, .3)"
        },
        {
          id: 24,
          name: "arbok",
          color: "#a483c5",
          rgb: "rgba(164, 131, 197, .3)"
        },
        {
          id: 25,
          name: "pikachu",
          color: "#f6e652",
          rgb: "rgba(246, 230, 82, .3)"
        },
        {
          id: 26,
          name: "raichu",
          color: "#f6ac29",
          rgb: "rgba(246, 172, 41, .3)"
        },
        {
          id: 27,
          name: "sandshrew",
          color: "#cdb400",
          rgb: "rgba(205, 180, 0, .3)"
        },
        {
          id: 28,
          name: "sandslash",
          color: "#8b6218",
          rgb: "rgba(139, 98, 24, .3)"
        },
        {
          id: 29,
          name: "nidoran♀",
          color: "#d5d5ff",
          rgb: "rgba(213, 213, 255, .3)"
        },
        {
          id: 30,
          name: "nidorina",
          color: "#8bc5cd",
          rgb: "rgba(139, 197, 205, .3)"
        },
        {
          id: 31,
          name: "nidoqueen",
          color: "#628bac",
          rgb: "rgba(98, 139, 172, .3)"
        },
        {
          id: 32,
          name: "nidoran♂",
          color: "#bd62c5",
          rgb: "rgba(189, 98, 197, .3)"
        },
        {
          id: 33,
          name: "nidorino",
          color: "#945ab4",
          rgb: "rgba(148, 90, 180, .3)"
        },
        {
          id: 34,
          name: "nidoking",
          color: "#a45294",
          rgb: "rgba(164, 82, 148, .3)"
        },
        {
          id: 35,
          name: "clefairy",
          color: "#ffd5bd",
          rgb: "rgba(255, 213, 189, .3)"
        },
        {
          id: 36,
          name: "clefable",
          color: "#ffc5b4",
          rgb: "rgba(255, 197, 180, .3)"
        },
        {
          id: 37,
          name: "vulpix",
          color: "#e6946a",
          rgb: "rgba(230, 148, 106, .3)"
        },
        {
          id: 38,
          name: "ninetales",
          color: "#e6c552",
          rgb: "rgba(230, 197, 82, .3)"
        },
        {
          id: 39,
          name: "jigglypuff",
          color: "#ffaca4",
          rgb: "rgba(255, 172, 164, .3)"
        },
        {
          id: 40,
          name: "wigglytuff",
          color: "#ffacbd",
          rgb: "rgba(255, 172, 189, .3)"
        },
        {
          id: 41,
          name: "zubat",
          color: "#8bb4ee",
          rgb: "rgba(139, 180, 238, .3)"
        },
        {
          id: 42,
          name: "golbat",
          color: "#ac52ac",
          rgb: "rgba(172, 82, 172, .3)"
        },
        {
          id: 43,
          name: "oddish",
          color: "#8bac31",
          rgb: "rgba(139, 172, 49, .3)"
        },
        {
          id: 44,
          name: "gloom",
          color: "#4a6a7b",
          rgb: "rgba(74, 106, 123, .3)"
        },
        {
          id: 45,
          name: "vileplume",
          color: "#de4a5a",
          rgb: "rgba(222, 74, 90, .3)"
        },
        {
          id: 46,
          name: "paras",
          color: "#ffac62",
          rgb: "rgba(255, 172, 98, .3)"
        },
        {
          id: 47,
          name: "parasect",
          color: "#ee3131",
          rgb: "rgba(238, 49, 49, .3)"
        },
        {
          id: 48,
          name: "venonat",
          color: "#8b6aa4",
          rgb: "rgba(139, 106, 164, .3)"
        },
        {
          id: 49,
          name: "venomoth",
          color: "#f6deff",
          rgb: "rgba(246, 222, 255, .3)"
        },
        {
          id: 50,
          name: "diglett",
          color: "#b4ac73",
          rgb: "rgba(180, 172, 115, .3)"
        },
        {
          id: 51,
          name: "dugtrio",
          color: "#c57341",
          rgb: "rgba(197, 115, 65, .3)"
        },
        {
          id: 52,
          name: "meowth",
          color: "#ffe683",
          rgb: "rgba(255, 230, 131, .3)"
        },
        {
          id: 53,
          name: "persian",
          color: "#deb46a",
          rgb: "rgba(222, 180, 106, .3)"
        },
        {
          id: 54,
          name: "psyduck",
          color: "#ffd54a",
          rgb: "rgba(255, 213, 74, .3)"
        },
        {
          id: 55,
          name: "golduck",
          color: "#8bacd5",
          rgb: "rgba(139, 172, 213, .3)"
        },
        {
          id: 56,
          name: "mankey",
          color: "#d5ac9c",
          rgb: "rgba(213, 172, 156, .3)"
        },
        {
          id: 57,
          name: "primeape",
          color: "#e6bd9c",
          rgb: "rgba(230, 189, 156, .3)"
        },
        {
          id: 58,
          name: "growlithe",
          color: "#fff6a4",
          rgb: "rgba(255, 246, 164, .3)"
        },
        {
          id: 59,
          name: "arcanine",
          color: "#d5a48b",
          rgb: "rgba(213, 164, 139, .3)"
        },
        {
          id: 60,
          name: "poliwag",
          color: "#5283c5",
          rgb: "rgba(82, 131, 197, .3)"
        },
        {
          id: 61,
          name: "poliwhirl",
          color: "#3973ac",
          rgb: "rgba(57, 115, 172, .3)"
        },
        {
          id: 62,
          name: "poliwrath",
          color: "#395a83",
          rgb: "rgba(57, 90, 131, .3)"
        },
        {
          id: 63,
          name: "abra",
          color: "#ffe629",
          rgb: "rgba(255, 230, 41, .3)"
        },
        {
          id: 64,
          name: "kadabra",
          color: "#d5bd08",
          rgb: "rgba(213, 189, 8, .3)"
        },
        {
          id: 65,
          name: "alakazam",
          color: "#ffee18",
          rgb: "rgba(255, 238, 24, .3)"
        },
        {
          id: 66,
          name: "machop",
          color: "#94bdbd",
          rgb: "rgba(148, 189, 189, .3)"
        },
        {
          id: 67,
          name: "machoke",
          color: "#bd9ce6",
          rgb: "rgba(189, 156, 230, .3)"
        },
        {
          id: 68,
          name: "machamp",
          color: "#838b94",
          rgb: "rgba(131, 139, 148, .3)"
        },
        {
          id: 69,
          name: "bellsprout",
          color: "#5a3900",
          rgb: "rgba(90, 57, 0, .3)"
        },
        {
          id: 70,
          name: "weepinbell",
          color: "#6ac552",
          rgb: "rgba(106, 197, 82, .3)"
        },
        {
          id: 71,
          name: "victreebel",
          color: "#4aa47b",
          rgb: "rgba(74, 164, 123, .3)"
        },
        {
          id: 72,
          name: "tentacool",
          color: "#6ab4e6",
          rgb: "rgba(106, 180, 230, .3)"
        },
        {
          id: 73,
          name: "tentacruel",
          color: "#83cde6",
          rgb: "rgba(131, 205, 230, .3)"
        },
        {
          id: 74,
          name: "geodude",
          color: "#9c9483",
          rgb: "rgba(156, 148, 131, .3)"
        },
        {
          id: 75,
          name: "graveler",
          color: "#b4b49c",
          rgb: "rgba(180, 180, 156, .3)"
        },
        {
          id: 76,
          name: "golem",
          color: "#9c8b52",
          rgb: "rgba(156, 139, 82, .3)"
        },
        {
          id: 77,
          name: "ponyta",
          color: "#e65a29",
          rgb: "rgba(230, 90, 41, .3)"
        },
        {
          id: 78,
          name: "rapidash",
          color: "#ff9c18",
          rgb: "rgba(255, 156, 24, .3)"
        },
        {
          id: 79,
          name: "slowpoke",
          color: "#de627b",
          rgb: "rgba(222, 98, 123, .3)"
        },
        {
          id: 80,
          name: "slowbro",
          color: "#ff9494",
          rgb: "rgba(255, 148, 148, .3)"
        },
        {
          id: 81,
          name: "magnemite",
          color: "#8bb4a4",
          rgb: "rgba(139, 180, 164, .3)"
        },
        {
          id: 82,
          name: "magneton",
          color: "#393131",
          rgb: "rgba(57, 49, 49, .3)"
        },
        {
          id: 83,
          name: "farfetchd",
          color: "#e6e6a4",
          rgb: "rgba(230, 230, 164, .3)"
        },
        {
          id: 84,
          name: "doduo",
          color: "#946a5a",
          rgb: "rgba(148, 106, 90, .3)"
        },
        {
          id: 85,
          name: "dodrio",
          color: "#a47b5a",
          rgb: "rgba(164, 123, 90, .3)"
        },
        {
          id: 86,
          name: "seel",
          color: "#d5cdee",
          rgb: "rgba(213, 205, 238, .3)"
        },
        {
          id: 87,
          name: "dewgong",
          color: "#e6e6f6",
          rgb: "rgba(230, 230, 246, .3)"
        },
        {
          id: 88,
          name: "grimer",
          color: "#944a9c",
          rgb: "rgba(148, 74, 156, .3)"
        },
        {
          id: 89,
          name: "muk",
          color: "#bd7bbd",
          rgb: "rgba(189, 123, 189, .3)"
        },
        {
          id: 90,
          name: "shellder",
          color: "#9c8bc5",
          rgb: "rgba(156, 139, 197, .3)"
        },
        {
          id: 91,
          name: "cloyster",
          color: "#7b5283",
          rgb: "rgba(123, 82, 131, .3)"
        },
        {
          id: 92,
          name: "gastly",
          color: "#d5accd",
          rgb: "rgba(213, 172, 205, .3)"
        },
        {
          id: 93,
          name: "haunter",
          color: "#835a6a",
          rgb: "rgba(131, 90, 106, .3)"
        },
        {
          id: 94,
          name: "gengar",
          color: "#9473b4",
          rgb: "rgba(148, 115, 180, .3)"
        },
        {
          id: 95,
          name: "onix",
          color: "#837b7b",
          rgb: "rgba(131, 123, 123, .3)"
        },
        {
          id: 96,
          name: "drowzee",
          color: "#f6de00",
          rgb: "rgba(246, 222, 0, .3)"
        },
        {
          id: 97,
          name: "hypno",
          color: "#f6de00",
          rgb: "rgba(246, 222, 0, .3)"
        },
        {
          id: 98,
          name: "krabby",
          color: "#de524a",
          rgb: "rgba(222, 82, 74, .3)"
        },
        {
          id: 99,
          name: "kingler",
          color: "#c56a5a",
          rgb: "rgba(197, 106, 90, .3)"
        },
        {
          id: 100,
          name: "voltorb",
          color: "#ff5220",
          rgb: "rgba(255, 82, 32, .3)"
        },
        {
          id: 101,
          name: "Electrode",
          color: "#eeeeee",
          rgb: "rgba(238, 238, 238, .3)"
        },
        {
          id: 102,
          name: "Exeggcute",
          color: "#ffd5ac",
          rgb: "rgba(255, 213, 172, .3)"
        },
        {
          id: 103,
          name: "Exeggutor",
          color: "#73ac31",
          rgb: "rgba(115, 172, 49, .3)"
        },
        {
          id: 104,
          name: "Cubone",
          color: "#946a5a",
          rgb: "rgba(148, 106, 90, .3)"
        },
        {
          id: 105,
          name: "Marowak",
          color: "#946a52",
          rgb: "rgba(148, 106, 82, .3)"
        },
        {
          id: 106,
          name: "Hitmonlee",
          color: "#cda483",
          rgb: "rgba(205, 164, 131, .3)"
        },
        {
          id: 107,
          name: "Hitmonchan",
          color: "#cdb47b",
          rgb: "rgba(205, 180, 123, .3)"
        },
        {
          id: 108,
          name: "Lickitung",
          color: "#ee736a",
          rgb: "rgba(238, 115, 106, .3)"
        },
        {
          id: 109,
          name: "Koffing",
          color: "#eed56a",
          rgb: "rgba(238, 213, 106, .3)"
        },
        {
          id: 110,
          name: "Weezing",
          color: "#bd8bcd",
          rgb: "rgba(189, 139, 205, .3)"
        },
        {
          id: 111,
          name: "Rhyhorn",
          color: "#8383ac",
          rgb: "rgba(131, 131, 172, .3)"
        },
        {
          id: 112,
          name: "Rhydon",
          color: "#8b8b94",
          rgb: "rgba(139, 139, 148, .3)"
        },
        {
          id: 113,
          name: "Chansey",
          color: "#ffd5d5",
          rgb: "rgba(255, 213, 213, .3)"
        },
        {
          id: 114,
          name: "Tangela",
          color: "#417b94",
          rgb: "rgba(65, 123, 148, .3)"
        },
        {
          id: 115,
          name: "Kangaskhan",
          color: "#9c7b73",
          rgb: "rgba(156, 123, 115, .3)"
        },
        {
          id: 116,
          name: "Horsea",
          color: "#6a94b4",
          rgb: "rgba(106, 148, 180, .3)"
        },
        {
          id: 117,
          name: "Seadra",
          color: "#6a839c",
          rgb: "rgba(106, 131, 156, .3)"
        },
        {
          id: 118,
          name: "Goldeen",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 119,
          name: "Seaking",
          color: "#f6f6ff",
          rgb: "rgba(246, 246, 255, .3)"
        },
        {
          id: 120,
          name: "Staryu",
          color: "#9c6a39",
          rgb: "rgba(156, 106, 57, .3)"
        },
        {
          id: 121,
          name: "Starmie",
          color: "#5a529c",
          rgb: "rgba(90, 82, 156, .3)"
        },
        {
          id: 122,
          name: "Mr. Mime",
          color: "#104a73",
          rgb: "rgba(16, 74, 115, .3)"
        },
        {
          id: 123,
          name: "Scyther",
          color: "#8bcd73",
          rgb: "rgba(139, 205, 115, .3)"
        },
        {
          id: 124,
          name: "Jynx",
          color: "#f6315a",
          rgb: "rgba(246, 49, 90, .3)"
        },
        {
          id: 125,
          name: "Electabuzz",
          color: "#c5a410",
          rgb: "rgba(197, 164, 16, .3)"
        },
        {
          id: 126,
          name: "Magmar",
          color: "#ff4a31",
          rgb: "rgba(255, 74, 49, .3)"
        },
        {
          id: 127,
          name: "Pinsir",
          color: "#c5ac8b",
          rgb: "rgba(197, 172, 139, .3)"
        },
        {
          id: 128,
          name: "Tauros",
          color: "#dea44a",
          rgb: "rgba(222, 164, 74, .3)"
        },
        {
          id: 129,
          name: "Magikarp",
          color: "#f66218",
          rgb: "rgba(246, 98, 24, .3)"
        },
        {
          id: 130,
          name: "Gyarados",
          color: "#208bac",
          rgb: "rgba(32, 139, 172, .3)"
        },
        {
          id: 131,
          name: "Lapras",
          color: "#397ba4",
          rgb: "rgba(57, 123, 164, .3)"
        },
        {
          id: 132,
          name: "Ditto",
          color: "#c57be6",
          rgb: "rgba(197, 123, 230, .3)"
        },
        {
          id: 133,
          name: "Eevee",
          color: "#a4624a",
          rgb: "rgba(164, 98, 74, .3)"
        },
        {
          id: 134,
          name: "Vaporeon",
          color: "#5ac5e6",
          rgb: "rgba(90, 197, 230, .3)"
        },
        {
          id: 135,
          name: "Jolteon",
          color: "#ffde52",
          rgb: "rgba(255, 222, 82, .3)"
        },
        {
          id: 136,
          name: "Flareon",
          color: "#ffeea4",
          rgb: "rgba(255, 238, 164, .3)"
        },
        {
          id: 137,
          name: "Porygon",
          color: "#0883a4",
          rgb: "rgba(8, 131, 164, .3)"
        },
        {
          id: 138,
          name: "Omanyte",
          color: "#9c836a",
          rgb: "rgba(156, 131, 106, .3)"
        },
        {
          id: 139,
          name: "Omastar",
          color: "#399ccd",
          rgb: "rgba(57, 156, 205, .3)"
        },
        {
          id: 140,
          name: "Kabuto",
          color: "#c58329",
          rgb: "rgba(197, 131, 41, .3)"
        },
        {
          id: 141,
          name: "Kabutops",
          color: "#bd8b41",
          rgb: "rgba(189, 139, 65, .3)"
        },
        {
          id: 142,
          name: "Aerodactyl",
          color: "#9483a4",
          rgb: "rgba(148, 131, 164, .3)"
        },
        {
          id: 143,
          name: "Snorlax",
          color: "#f6e6bd",
          rgb: "rgba(246, 230, 189, .3)"
        },
        {
          id: 144,
          name: "Articuno",
          color: "#6aacf6",
          rgb: "rgba(106, 172, 246, .3)"
        },
        {
          id: 145,
          name: "Zapdos",
          color: "#d5ac08",
          rgb: "rgba(213, 172, 8, .3)"
        },
        {
          id: 146,
          name: "Moltres",
          color: "#ee6239",
          rgb: "rgba(238, 98, 57, .3)"
        },
        {
          id: 147,
          name: "Dratini",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 148,
          name: "Dragonair",
          color: "#5a8bee",
          rgb: "rgba(90, 139, 238, .3)"
        },
        {
          id: 149,
          name: "Dragonite",
          color: "#de7339",
          rgb: "rgba(222, 115, 57, .3)"
        },
        {
          id: 150,
          name: "Mewtwo",
          color: "#ded5e6",
          rgb: "rgba(222, 213, 230, .3)"
        },
        {
          id: 151,
          name: "Mew",
          color: "#ffb4d5",
          rgb: "rgba(255, 180, 213, .3)"
        },
        {
          id: 152,
          name: "Chikorita",
          color: "#d5f68b",
          rgb: "rgba(213, 246, 139, .3)"
        },
        {
          id: 153,
          name: "Bayleef",
          color: "#f6e64a",
          rgb: "rgba(246, 230, 74, .3)"
        },
        {
          id: 154,
          name: "Meganium",
          color: "#9ce652",
          rgb: "rgba(156, 230, 82, .3)"
        },
        {
          id: 155,
          name: "Cyndaquil",
          color: "#de0000",
          rgb: "rgba(222, 0, 0, .3)"
        },
        {
          id: 156,
          name: "Quilava",
          color: "#ff5a00",
          rgb: "rgba(255, 90, 0, .3)"
        },
        {
          id: 157,
          name: "Typhlosion",
          color: "#ffee94",
          rgb: "rgba(255, 238, 148, .3)"
        },
        {
          id: 158,
          name: "Totodile",
          color: "#6ab4e6",
          rgb: "rgba(106, 180, 230, .3)"
        },
        {
          id: 159,
          name: "Croconaw",
          color: "#5aace6",
          rgb: "rgba(90, 172, 230, .3)"
        },
        {
          id: 160,
          name: "Feraligatr",
          color: "#5ab4f6",
          rgb: "rgba(90, 180, 246, .3)"
        },
        {
          id: 161,
          name: "Sentret",
          color: "#bd835a",
          rgb: "rgba(189, 131, 90, .3)"
        },
        {
          id: 162,
          name: "Furret",
          color: "#ffee94",
          rgb: "rgba(255, 238, 148, .3)"
        },
        {
          id: 163,
          name: "Hoothoot",
          color: "#bd8b41",
          rgb: "rgba(189, 139, 65, .3)"
        },
        {
          id: 164,
          name: "Noctowl",
          color: "#7b5a4a",
          rgb: "rgba(123, 90, 74, .3)"
        },
        {
          id: 165,
          name: "Ledyba",
          color: "#ffe69c",
          rgb: "rgba(255, 230, 156, .3)"
        },
        {
          id: 166,
          name: "Ledian",
          color: "#ff4a41",
          rgb: "rgba(255, 74, 65, .3)"
        },
        {
          id: 167,
          name: "Spinarak",
          color: "#8be631",
          rgb: "rgba(139, 230, 49, .3)"
        },
        {
          id: 168,
          name: "Ariados",
          color: "#c54141",
          rgb: "rgba(197, 65, 65, .3)"
        },
        {
          id: 169,
          name: "Crobat",
          color: "#a45acd",
          rgb: "rgba(164, 90, 205, .3)"
        },
        {
          id: 170,
          name: "Chinchou",
          color: "#ffcd52",
          rgb: "rgba(255, 205, 82, .3)"
        },
        {
          id: 171,
          name: "Lanturn",
          color: "#6294e6",
          rgb: "rgba(98, 148, 230, .3)"
        },
        {
          id: 172,
          name: "Pichu",
          color: "#f6e652",
          rgb: "rgba(246, 230, 82, .3)"
        },
        {
          id: 173,
          name: "Cleffa",
          color: "#ffa494",
          rgb: "rgba(255, 164, 148, .3)"
        },
        {
          id: 174,
          name: "Igglybuff",
          color: "#ffacbd",
          rgb: "rgba(255, 172, 189, .3)"
        },
        {
          id: 175,
          name: "Togepi",
          color: "#f6d5a4",
          rgb: "rgba(246, 213, 164, .3)"
        },
        {
          id: 176,
          name: "Togetic",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 177,
          name: "Natu",
          color: "#73bd41",
          rgb: "rgba(115, 189, 65, .3)"
        },
        {
          id: 178,
          name: "Xatu",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 179,
          name: "Mareep",
          color: "#ffe6bd",
          rgb: "rgba(255, 230, 189, .3)"
        },
        {
          id: 180,
          name: "Flaaffy",
          color: "#ffa4a4",
          rgb: "rgba(255, 164, 164, .3)"
        },
        {
          id: 181,
          name: "Ampharos",
          color: "#ffee4a",
          rgb: "rgba(255, 238, 74, .3)"
        },
        {
          id: 182,
          name: "Bellossom",
          color: "#d52000",
          rgb: "rgba(213, 32, 0, .3)"
        },
        {
          id: 183,
          name: "Marill",
          color: "#5a9cee",
          rgb: "rgba(90, 156, 238, .3)"
        },
        {
          id: 184,
          name: "Azumarill",
          color: "#5a9cee",
          rgb: "rgba(90, 156, 238, .3)"
        },
        {
          id: 185,
          name: "Sudowoodo",
          color: "#c5a44a",
          rgb: "rgba(197, 164, 74, .3)"
        },
        {
          id: 186,
          name: "Politoed",
          color: "#8bcd18",
          rgb: "rgba(139, 205, 24, .3)"
        },
        {
          id: 187,
          name: "Hoppip",
          color: "#ff7b94",
          rgb: "rgba(255, 123, 148, .3)"
        },
        {
          id: 188,
          name: "Skiploom",
          color: "#62d531",
          rgb: "rgba(98, 213, 49, .3)"
        },
        {
          id: 189,
          name: "Jumpluff",
          color: "#739cff",
          rgb: "rgba(115, 156, 255, .3)"
        },
        {
          id: 190,
          name: "Aipom",
          color: "#8341ac",
          rgb: "rgba(131, 65, 172, .3)"
        },
        {
          id: 191,
          name: "Sunkern",
          color: "#ffff00",
          rgb: "rgba(255, 255, 0, .3)"
        },
        {
          id: 192,
          name: "Sunflora",
          color: "#eecd08",
          rgb: "rgba(238, 205, 8, .3)"
        },
        {
          id: 193,
          name: "Yanma",
          color: "#e6ffff",
          rgb: "rgba(230, 255, 255, .3)"
        },
        {
          id: 194,
          name: "Wooper",
          color: "#397bc5",
          rgb: "rgba(57, 123, 197, .3)"
        },
        {
          id: 195,
          name: "Quagsire",
          color: "#629cbd",
          rgb: "rgba(98, 156, 189, .3)"
        },
        {
          id: 196,
          name: "Espeon",
          color: "#e6a4d5",
          rgb: "rgba(230, 164, 213, .3)"
        },
        {
          id: 197,
          name: "Umbreon",
          color: "#414152",
          rgb: "rgba(65, 65, 82, .3)"
        },
        {
          id: 198,
          name: "Murkrow",
          color: "#314162",
          rgb: "rgba(49, 65, 98, .3)"
        },
        {
          id: 199,
          name: "Slowking",
          color: "#ee736a",
          rgb: "rgba(238, 115, 106, .3)"
        },
        {
          id: 200,
          name: "Misdreavus",
          color: "#314a62",
          rgb: "rgba(49, 74, 98, .3)"
        },
        {
          id: 201,
          name: "Unown",
          color: "#737373",
          rgb: "rgba(115, 115, 115, .3)"
        },
        {
          id: 202,
          name: "Wobbuffet",
          color: "#3194ee",
          rgb: "rgba(49, 148, 238, .3)"
        },
        {
          id: 203,
          name: "Girafarig",
          color: "#eede52",
          rgb: "rgba(238, 222, 82, .3)"
        },
        {
          id: 204,
          name: "Pineco",
          color: "#294a7b",
          rgb: "rgba(41, 74, 123, .3)"
        },
        {
          id: 205,
          name: "Forretress",
          color: "#c5a4de",
          rgb: "rgba(197, 164, 222, .3)"
        },
        {
          id: 206,
          name: "Dunsparce",
          color: "#f6e67b",
          rgb: "rgba(246, 230, 123, .3)"
        },
        {
          id: 207,
          name: "Gligar",
          color: "#ac6294",
          rgb: "rgba(172, 98, 148, .3)"
        },
        {
          id: 208,
          name: "Steelix",
          color: "#4a628b",
          rgb: "rgba(74, 98, 139, .3)"
        },
        {
          id: 209,
          name: "Snubbull",
          color: "#ffacb4",
          rgb: "rgba(255, 172, 180, .3)"
        },
        {
          id: 210,
          name: "Granbull",
          color: "#ac83ac",
          rgb: "rgba(172, 131, 172, .3)"
        },
        {
          id: 211,
          name: "Qwilfish",
          color: "#a4ac6a",
          rgb: "rgba(164, 172, 106, .3)"
        },
        {
          id: 212,
          name: "Scizor",
          color: "#a42929",
          rgb: "rgba(164, 41, 41, .3)"
        },
        {
          id: 213,
          name: "Shuckle",
          color: "#eec54a",
          rgb: "rgba(238, 197, 74, .3)"
        },
        {
          id: 214,
          name: "Heracross",
          color: "#6a94c5",
          rgb: "rgba(106, 148, 197, .3)"
        },
        {
          id: 215,
          name: "Sneasel",
          color: "#3994ac",
          rgb: "rgba(57, 148, 172, .3)"
        },
        {
          id: 216,
          name: "Teddiursa",
          color: "#b46220",
          rgb: "rgba(180, 98, 32, .3)"
        },
        {
          id: 217,
          name: "Ursaring",
          color: "#945220",
          rgb: "rgba(148, 82, 32, .3)"
        },
        {
          id: 218,
          name: "Slugma",
          color: "#cd3918",
          rgb: "rgba(205, 57, 24, .3)"
        },
        {
          id: 219,
          name: "Magcargo",
          color: "#de5a20",
          rgb: "rgba(222, 90, 32, .3)"
        },
        {
          id: 220,
          name: "Swinub",
          color: "#cd9c7b",
          rgb: "rgba(205, 156, 123, .3)"
        },
        {
          id: 221,
          name: "Piloswine",
          color: "#ac835a",
          rgb: "rgba(172, 131, 90, .3)"
        },
        {
          id: 222,
          name: "Corsola",
          color: "#ffa4c5",
          rgb: "rgba(255, 164, 197, .3)"
        },
        {
          id: 223,
          name: "Remoraid",
          color: "#b4ded5",
          rgb: "rgba(180, 222, 213, .3)"
        },
        {
          id: 224,
          name: "Octillery",
          color: "#a43110",
          rgb: "rgba(164, 49, 16, .3)"
        },
        {
          id: 225,
          name: "Delibird",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 226,
          name: "Mantine",
          color: "#ac9cc5",
          rgb: "rgba(172, 156, 197, .3)"
        },
        {
          id: 227,
          name: "Skarmory",
          color: "#9cb4d5",
          rgb: "rgba(156, 180, 213, .3)"
        },
        {
          id: 228,
          name: "Houndour",
          color: "#292931",
          rgb: "rgba(41, 41, 49, .3)"
        },
        {
          id: 229,
          name: "Houndoom",
          color: "#4a4a52",
          rgb: "rgba(74, 74, 82, .3)"
        },
        {
          id: 230,
          name: "Kingdra",
          color: "#629ccd",
          rgb: "rgba(98, 156, 205, .3)"
        },
        {
          id: 231,
          name: "Phanpy",
          color: "#acd5ee",
          rgb: "rgba(172, 213, 238, .3)"
        },
        {
          id: 232,
          name: "Donphan",
          color: "#4a5252",
          rgb: "rgba(74, 82, 82, .3)"
        },
        {
          id: 233,
          name: "Porygon2",
          color: "#ee5a62",
          rgb: "rgba(238, 90, 98, .3)"
        },
        {
          id: 234,
          name: "Stantler",
          color: "#e6b45a",
          rgb: "rgba(230, 180, 90, .3)"
        },
        {
          id: 235,
          name: "Smeargle",
          color: "#dedebd",
          rgb: "rgba(222, 222, 189, .3)"
        },
        {
          id: 236,
          name: "Tyrogue",
          color: "#eec5ff",
          rgb: "rgba(238, 197, 255, .3)"
        },
        {
          id: 237,
          name: "Hitmontop",
          color: "#bda452",
          rgb: "rgba(189, 164, 82, .3)"
        },
        {
          id: 238,
          name: "Smoochum",
          color: "#ffe652",
          rgb: "rgba(255, 230, 82, .3)"
        },
        {
          id: 239,
          name: "Elekid",
          color: "#ffcd31",
          rgb: "rgba(255, 205, 49, .3)"
        },
        {
          id: 240,
          name: "Magby",
          color: "#d55239",
          rgb: "rgba(213, 82, 57, .3)"
        },
        {
          id: 241,
          name: "Miltank",
          color: "#d58b83",
          rgb: "rgba(213, 139, 131, .3)"
        },
        {
          id: 242,
          name: "Blissey",
          color: "#ffacc5",
          rgb: "rgba(255, 172, 197, .3)"
        },
        {
          id: 243,
          name: "Raikou",
          color: "#ffcd41",
          rgb: "rgba(255, 205, 65, .3)"
        },
        {
          id: 244,
          name: "Entei",
          color: "#cda462",
          rgb: "rgba(205, 164, 98, .3)"
        },
        {
          id: 245,
          name: "Suicune",
          color: "#7bbdff",
          rgb: "rgba(123, 189, 255, .3)"
        },
        {
          id: 246,
          name: "Larvitar",
          color: "#accd9c",
          rgb: "rgba(172, 205, 156, .3)"
        },
        {
          id: 247,
          name: "Pupitar",
          color: "#739cc5",
          rgb: "rgba(115, 156, 197, .3)"
        },
        {
          id: 248,
          name: "Tyranitar",
          color: "#accd9c",
          rgb: "rgba(172, 205, 156, .3)"
        },
        {
          id: 249,
          name: "Lugia",
          color: "#d5e6f6",
          rgb: "rgba(213, 230, 246, .3)"
        },
        {
          id: 250,
          name: "Ho-oh",
          color: "#ff5a10",
          rgb: "rgba(255, 90, 16, .3)"
        },
        {
          id: 251,
          name: "Celebi",
          color: "#ffffde",
          rgb: "rgba(255, 255, 222, .3)"
        },
        {
          id: 252,
          name: "Treecko",
          color: "#acde6a",
          rgb: "rgba(172, 222, 106, .3)"
        },
        {
          id: 253,
          name: "Grovyle",
          color: "#62ac4a",
          rgb: "rgba(98, 172, 74, .3)"
        },
        {
          id: 254,
          name: "Sceptile",
          color: "#83cd6a",
          rgb: "rgba(131, 205, 106, .3)"
        },
        {
          id: 255,
          name: "Torchic",
          color: "#ff8b31",
          rgb: "rgba(255, 139, 49, .3)"
        },
        {
          id: 256,
          name: "Combusken",
          color: "#eebd4a",
          rgb: "rgba(238, 189, 74, .3)"
        },
        {
          id: 257,
          name: "Blaziken",
          color: "#bd4141",
          rgb: "rgba(189, 65, 65, .3)"
        },
        {
          id: 258,
          name: "Mudkip",
          color: "#41a4de",
          rgb: "rgba(65, 164, 222, .3)"
        },
        {
          id: 259,
          name: "Marshtomp",
          color: "#4ab4ac",
          rgb: "rgba(74, 180, 172, .3)"
        },
        {
          id: 260,
          name: "Swampert",
          color: "#524a52",
          rgb: "rgba(82, 74, 82, .3)"
        },
        {
          id: 261,
          name: "Poochyena",
          color: "#a4a4a4",
          rgb: "rgba(164, 164, 164, .3)"
        },
        {
          id: 262,
          name: "Mightyena",
          color: "#313131",
          rgb: "rgba(49, 49, 49, .3)"
        },
        {
          id: 263,
          name: "Zigzagoon",
          color: "#947b6a",
          rgb: "rgba(148, 123, 106, .3)"
        },
        {
          id: 264,
          name: "Linoone",
          color: "#decdbd",
          rgb: "rgba(222, 205, 189, .3)"
        },
        {
          id: 265,
          name: "Wurmple",
          color: "#d52952",
          rgb: "rgba(213, 41, 82, .3)"
        },
        {
          id: 266,
          name: "Silcoon",
          color: "#eeeee6",
          rgb: "rgba(238, 238, 230, .3)"
        },
        {
          id: 267,
          name: "Beautifly",
          color: "#6a6262",
          rgb: "rgba(106, 98, 98, .3)"
        },
        {
          id: 268,
          name: "Cascoon",
          color: "#eed5ee",
          rgb: "rgba(238, 213, 238, .3)"
        },
        {
          id: 269,
          name: "Dustox",
          color: "#739452",
          rgb: "rgba(115, 148, 82, .3)"
        },
        {
          id: 270,
          name: "Lotad",
          color: "#62b46a",
          rgb: "rgba(98, 180, 106, .3)"
        },
        {
          id: 271,
          name: "Lombre",
          color: "#6a8b39",
          rgb: "rgba(106, 139, 57, .3)"
        },
        {
          id: 272,
          name: "Ludicolo",
          color: "#9cc562",
          rgb: "rgba(156, 197, 98, .3)"
        },
        {
          id: 273,
          name: "Seedot",
          color: "#7b736a",
          rgb: "rgba(123, 115, 106, .3)"
        },
        {
          id: 274,
          name: "Nuzleaf",
          color: "#947362",
          rgb: "rgba(148, 115, 98, .3)"
        },
        {
          id: 275,
          name: "Shiftry",
          color: "#9c6a4a",
          rgb: "rgba(156, 106, 74, .3)"
        },
        {
          id: 276,
          name: "Taillow",
          color: "#314a7b",
          rgb: "rgba(49, 74, 123, .3)"
        },
        {
          id: 277,
          name: "Swellow",
          color: "#294162",
          rgb: "rgba(41, 65, 98, .3)"
        },
        {
          id: 278,
          name: "Wingull",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 279,
          name: "Pelipper",
          color: "#ffde4a",
          rgb: "rgba(255, 222, 74, .3)"
        },
        {
          id: 280,
          name: "Ralts",
          color: "#73bd73",
          rgb: "rgba(115, 189, 115, .3)"
        },
        {
          id: 281,
          name: "Kirlia",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 282,
          name: "Gardevoir",
          color: "#eeeeff",
          rgb: "rgba(238, 238, 255, .3)"
        },
        {
          id: 283,
          name: "Surskit",
          color: "#83c5e6",
          rgb: "rgba(131, 197, 230, .3)"
        },
        {
          id: 284,
          name: "Masquerain",
          color: "#c5cde6",
          rgb: "rgba(197, 205, 230, .3)"
        },
        {
          id: 285,
          name: "Shroomish",
          color: "#eed5b4",
          rgb: "rgba(238, 213, 180, .3)"
        },
        {
          id: 286,
          name: "Breloom",
          color: "#629452",
          rgb: "rgba(98, 148, 82, .3)"
        },
        {
          id: 287,
          name: "Slakoth",
          color: "#decdbd",
          rgb: "rgba(222, 205, 189, .3)"
        },
        {
          id: 288,
          name: "Vigoroth",
          color: "#d5d5d5",
          rgb: "rgba(213, 213, 213, .3)"
        },
        {
          id: 289,
          name: "Slaking",
          color: "#a4836a",
          rgb: "rgba(164, 131, 106, .3)"
        },
        {
          id: 290,
          name: "Nincada",
          color: "#ffffee",
          rgb: "rgba(255, 255, 238, .3)"
        },
        {
          id: 291,
          name: "Ninjask",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 292,
          name: "Shedinja",
          color: "#b4945a",
          rgb: "rgba(180, 148, 90, .3)"
        },
        {
          id: 293,
          name: "Whismur",
          color: "#eeace6",
          rgb: "rgba(238, 172, 230, .3)"
        },
        {
          id: 294,
          name: "Loudred",
          color: "#736294",
          rgb: "rgba(115, 98, 148, .3)"
        },
        {
          id: 295,
          name: "Exploud",
          color: "#a4a4de",
          rgb: "rgba(164, 164, 222, .3)"
        },
        {
          id: 296,
          name: "Makuhita",
          color: "#ffde6a",
          rgb: "rgba(255, 222, 106, .3)"
        },
        {
          id: 297,
          name: "Hariyama",
          color: "#b46a52",
          rgb: "rgba(180, 106, 82, .3)"
        },
        {
          id: 298,
          name: "Azurill",
          color: "#4a7be6",
          rgb: "rgba(74, 123, 230, .3)"
        },
        {
          id: 299,
          name: "Nosepass",
          color: "#627bbd",
          rgb: "rgba(98, 123, 189, .3)"
        },
        {
          id: 300,
          name: "Skitty",
          color: "#d55a7b",
          rgb: "rgba(213, 90, 123, .3)"
        },
        {
          id: 301,
          name: "Delcatty",
          color: "#a473c5",
          rgb: "rgba(164, 115, 197, .3)"
        },
        {
          id: 302,
          name: "Sableye",
          color: "#5a4a94",
          rgb: "rgba(90, 74, 148, .3)"
        },
        {
          id: 303,
          name: "Mawile",
          color: "#737373",
          rgb: "rgba(115, 115, 115, .3)"
        },
        {
          id: 304,
          name: "Aron",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 305,
          name: "Lairon",
          color: "#c5cdd5",
          rgb: "rgba(197, 205, 213, .3)"
        },
        {
          id: 306,
          name: "Aggron",
          color: "#52524a",
          rgb: "rgba(82, 82, 74, .3)"
        },
        {
          id: 307,
          name: "Meditite",
          color: "#e6dede",
          rgb: "rgba(230, 222, 222, .3)"
        },
        {
          id: 308,
          name: "Medicham",
          color: "#e6738b",
          rgb: "rgba(230, 115, 139, .3)"
        },
        {
          id: 309,
          name: "Electrike",
          color: "#629c62",
          rgb: "rgba(98, 156, 98, .3)"
        },
        {
          id: 310,
          name: "Manectric",
          color: "#c5ac5a",
          rgb: "rgba(197, 172, 90, .3)"
        },
        {
          id: 311,
          name: "Plusle",
          color: "#de4a41",
          rgb: "rgba(222, 74, 65, .3)"
        },
        {
          id: 312,
          name: "Minun",
          color: "#ffeeb4",
          rgb: "rgba(255, 238, 180, .3)"
        },
        {
          id: 313,
          name: "Volbeat",
          color: "#4a4a52",
          rgb: "rgba(74, 74, 82, .3)"
        },
        {
          id: 314,
          name: "Illumise",
          color: "#393939",
          rgb: "rgba(57, 57, 57, .3)"
        },
        {
          id: 315,
          name: "Roselia",
          color: "#73c55a",
          rgb: "rgba(115, 197, 90, .3)"
        },
        {
          id: 316,
          name: "Gulpin",
          color: "#a4de94",
          rgb: "rgba(164, 222, 148, .3)"
        },
        {
          id: 317,
          name: "Swalot",
          color: "#ac83ee",
          rgb: "rgba(172, 131, 238, .3)"
        },
        {
          id: 318,
          name: "Carvanha",
          color: "#eebd29",
          rgb: "rgba(238, 189, 41, .3)"
        },
        {
          id: 319,
          name: "Sharpedo",
          color: "#395294",
          rgb: "rgba(57, 82, 148, .3)"
        },
        {
          id: 320,
          name: "Wailmer",
          color: "#4a83b4",
          rgb: "rgba(74, 131, 180, .3)"
        },
        {
          id: 321,
          name: "Wailord",
          color: "#eee6ff",
          rgb: "rgba(238, 230, 255, .3)"
        },
        {
          id: 322,
          name: "Numel",
          color: "#deb44a",
          rgb: "rgba(222, 180, 74, .3)"
        },
        {
          id: 323,
          name: "Camerupt",
          color: "#ee6a4a",
          rgb: "rgba(238, 106, 74, .3)"
        },
        {
          id: 324,
          name: "Torkoal",
          color: "#bdaca4",
          rgb: "rgba(189, 172, 164, .3)"
        },
        {
          id: 325,
          name: "Spoink",
          color: "#a4a4ac",
          rgb: "rgba(164, 164, 172, .3)"
        },
        {
          id: 326,
          name: "Grumpig",
          color: "#4a4a52",
          rgb: "rgba(74, 74, 82, .3)"
        },
        {
          id: 327,
          name: "Spinda",
          color: "#e6d5a4",
          rgb: "rgba(230, 213, 164, .3)"
        },
        {
          id: 328,
          name: "Trapinch",
          color: "#ee7341",
          rgb: "rgba(238, 115, 65, .3)"
        },
        {
          id: 329,
          name: "Vibrava",
          color: "#6ac56a",
          rgb: "rgba(106, 197, 106, .3)"
        },
        {
          id: 330,
          name: "Flygon",
          color: "#b4de73",
          rgb: "rgba(180, 222, 115, .3)"
        },
        {
          id: 331,
          name: "Cacnea",
          color: "#bdde7b",
          rgb: "rgba(189, 222, 123, .3)"
        },
        {
          id: 332,
          name: "Cacturne",
          color: "#a4d573",
          rgb: "rgba(164, 213, 115, .3)"
        },
        {
          id: 333,
          name: "Swablu",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 334,
          name: "Altaria",
          color: "#cdcde6",
          rgb: "rgba(205, 205, 230, .3)"
        },
        {
          id: 335,
          name: "Zangoose",
          color: "#cddef6",
          rgb: "rgba(205, 222, 246, .3)"
        },
        {
          id: 336,
          name: "Seviper",
          color: "#394152",
          rgb: "rgba(57, 65, 82, .3)"
        },
        {
          id: 337,
          name: "Lunatone",
          color: "#b4a452",
          rgb: "rgba(180, 164, 82, .3)"
        },
        {
          id: 338,
          name: "Solrock",
          color: "#deb418",
          rgb: "rgba(222, 180, 24, .3)"
        },
        {
          id: 339,
          name: "Barboach",
          color: "#31b4e6",
          rgb: "rgba(49, 180, 230, .3)"
        },
        {
          id: 340,
          name: "Whiscash",
          color: "#394a9c",
          rgb: "rgba(57, 74, 156, .3)"
        },
        {
          id: 341,
          name: "Corphish",
          color: "#e65208",
          rgb: "rgba(230, 82, 8, .3)"
        },
        {
          id: 342,
          name: "Crawdaunt",
          color: "#cd3131",
          rgb: "rgba(205, 49, 49, .3)"
        },
        {
          id: 343,
          name: "Baltoy",
          color: "#c5c562",
          rgb: "rgba(197, 197, 98, .3)"
        },
        {
          id: 344,
          name: "Claydol",
          color: "#4a4139",
          rgb: "rgba(74, 65, 57, .3)"
        },
        {
          id: 345,
          name: "Lileep",
          color: "#83395a",
          rgb: "rgba(131, 57, 90, .3)"
        },
        {
          id: 346,
          name: "Cradily",
          color: "#7bc573",
          rgb: "rgba(123, 197, 115, .3)"
        },
        {
          id: 347,
          name: "Anorith",
          color: "#6a6a7b",
          rgb: "rgba(106, 106, 123, .3)"
        },
        {
          id: 348,
          name: "Armaldo",
          color: "#394152",
          rgb: "rgba(57, 65, 82, .3)"
        },
        {
          id: 349,
          name: "Feebas",
          color: "#d5cd83",
          rgb: "rgba(213, 205, 131, .3)"
        },
        {
          id: 350,
          name: "Milotic",
          color: "#ffe6b4",
          rgb: "rgba(255, 230, 180, .3)"
        },
        {
          id: 351,
          name: "Castform",
          color: "#e6dede",
          rgb: "rgba(230, 222, 222, .3)"
        },
        {
          id: 352,
          name: "Kecleon",
          color: "#5a9473",
          rgb: "rgba(90, 148, 115, .3)"
        },
        {
          id: 353,
          name: "Shuppet",
          color: "#625a8b",
          rgb: "rgba(98, 90, 139, .3)"
        },
        {
          id: 354,
          name: "Banette",
          color: "#5a5262",
          rgb: "rgba(90, 82, 98, .3)"
        },
        {
          id: 355,
          name: "Duskull",
          color: "#4a4a41",
          rgb: "rgba(74, 74, 65, .3)"
        },
        {
          id: 356,
          name: "Dusclops",
          color: "#62625a",
          rgb: "rgba(98, 98, 90, .3)"
        },
        {
          id: 357,
          name: "Tropius",
          color: "#398b4a",
          rgb: "rgba(57, 139, 74, .3)"
        },
        {
          id: 358,
          name: "Chimecho",
          color: "#c5e6ff",
          rgb: "rgba(197, 230, 255, .3)"
        },
        {
          id: 359,
          name: "Absol",
          color: "#b4b4d5",
          rgb: "rgba(180, 180, 213, .3)"
        },
        {
          id: 360,
          name: "Wynaut",
          color: "#6abdde",
          rgb: "rgba(106, 189, 222, .3)"
        },
        {
          id: 361,
          name: "Snorunt",
          color: "#eec56a",
          rgb: "rgba(238, 197, 106, .3)"
        },
        {
          id: 362,
          name: "Glalie",
          color: "#e6e6f6",
          rgb: "rgba(230, 230, 246, .3)"
        },
        {
          id: 363,
          name: "Spheal",
          color: "#f6e6bd",
          rgb: "rgba(246, 230, 189, .3)"
        },
        {
          id: 364,
          name: "Sealeo",
          color: "#5a94de",
          rgb: "rgba(90, 148, 222, .3)"
        },
        {
          id: 365,
          name: "Walrein",
          color: "#83b4e6",
          rgb: "rgba(131, 180, 230, .3)"
        },
        {
          id: 366,
          name: "Clamperl",
          color: "#3962bd",
          rgb: "rgba(57, 98, 189, .3)"
        },
        {
          id: 367,
          name: "Huntail",
          color: "#4a9cbd",
          rgb: "rgba(74, 156, 189, .3)"
        },
        {
          id: 368,
          name: "Gorebyss",
          color: "#f68bc5",
          rgb: "rgba(246, 139, 197, .3)"
        },
        {
          id: 369,
          name: "Relicanth",
          color: "#cdb494",
          rgb: "rgba(205, 180, 148, .3)"
        },
        {
          id: 370,
          name: "Luvdisc",
          color: "#e6739c",
          rgb: "rgba(230, 115, 156, .3)"
        },
        {
          id: 371,
          name: "Bagon",
          color: "#62ace6",
          rgb: "rgba(98, 172, 230, .3)"
        },
        {
          id: 372,
          name: "Shelgon",
          color: "#d5d5d5",
          rgb: "rgba(213, 213, 213, .3)"
        },
        {
          id: 373,
          name: "Salamence",
          color: "#a4394a",
          rgb: "rgba(164, 57, 74, .3)"
        },
        {
          id: 374,
          name: "Beldum",
          color: "#4a6aa4",
          rgb: "rgba(74, 106, 164, .3)"
        },
        {
          id: 375,
          name: "Metang",
          color: "#41628b",
          rgb: "rgba(65, 98, 139, .3)"
        },
        {
          id: 376,
          name: "Metagross",
          color: "#416294",
          rgb: "rgba(65, 98, 148, .3)"
        },
        {
          id: 377,
          name: "Regirock",
          color: "#948b73",
          rgb: "rgba(148, 139, 115, .3)"
        },
        {
          id: 378,
          name: "Regice",
          color: "#6ab4d5",
          rgb: "rgba(106, 180, 213, .3)"
        },
        {
          id: 379,
          name: "Registeel",
          color: "#b4acac",
          rgb: "rgba(180, 172, 172, .3)"
        },
        {
          id: 380,
          name: "Latias",
          color: "#cdcdee",
          rgb: "rgba(205, 205, 238, .3)"
        },
        {
          id: 381,
          name: "Latios",
          color: "#4a62b4",
          rgb: "rgba(74, 98, 180, .3)"
        },
        {
          id: 382,
          name: "Kyogre",
          color: "#3962b4",
          rgb: "rgba(57, 98, 180, .3)"
        },
        {
          id: 383,
          name: "Groudon",
          color: "#736262",
          rgb: "rgba(115, 98, 98, .3)"
        },
        {
          id: 384,
          name: "Rayquaza",
          color: "#4a8373",
          rgb: "rgba(74, 131, 115, .3)"
        },
        {
          id: 385,
          name: "Jirachi",
          color: "#e6bd52",
          rgb: "rgba(230, 189, 82, .3)"
        },
        {
          id: 386,
          name: "Deoxys",
          color: "#bd6a6a",
          rgb: "rgba(189, 106, 106, .3)"
        },
        {
          id: 387,
          name: "Turtwig",
          color: "#bdcd83",
          rgb: "rgba(189, 205, 131, .3)"
        },
        {
          id: 388,
          name: "Grotle",
          color: "#62b46a",
          rgb: "rgba(98, 180, 106, .3)"
        },
        {
          id: 389,
          name: "Torterra",
          color: "#41ac41",
          rgb: "rgba(65, 172, 65, .3)"
        },
        {
          id: 390,
          name: "Chimchar",
          color: "#ffe6ac",
          rgb: "rgba(255, 230, 172, .3)"
        },
        {
          id: 391,
          name: "Monferno",
          color: "#d58b29",
          rgb: "rgba(213, 139, 41, .3)"
        },
        {
          id: 392,
          name: "Infernape",
          color: "#e63941",
          rgb: "rgba(230, 57, 65, .3)"
        },
        {
          id: 393,
          name: "Piplup",
          color: "#318bd5",
          rgb: "rgba(49, 139, 213, .3)"
        },
        {
          id: 394,
          name: "Prinplup",
          color: "#205a94",
          rgb: "rgba(32, 90, 148, .3)"
        },
        {
          id: 395,
          name: "Empoleon",
          color: "#102041",
          rgb: "rgba(16, 32, 65, .3)"
        },
        {
          id: 396,
          name: "Starly",
          color: "#524a4a",
          rgb: "rgba(82, 74, 74, .3)"
        },
        {
          id: 397,
          name: "Staravia",
          color: "#5a525a",
          rgb: "rgba(90, 82, 90, .3)"
        },
        {
          id: 398,
          name: "Staraptor",
          color: "#5a525a",
          rgb: "rgba(90, 82, 90, .3)"
        },
        {
          id: 399,
          name: "Bidoof",
          color: "#c58b41",
          rgb: "rgba(197, 139, 65, .3)"
        },
        {
          id: 400,
          name: "Bibarel",
          color: "#bd834a",
          rgb: "rgba(189, 131, 74, .3)"
        },
        {
          id: 401,
          name: "Kricketot",
          color: "#ffeeac",
          rgb: "rgba(255, 238, 172, .3)"
        },
        {
          id: 402,
          name: "Kricketune",
          color: "#de5a52",
          rgb: "rgba(222, 90, 82, .3)"
        },
        {
          id: 403,
          name: "Shinx",
          color: "#7bacf6",
          rgb: "rgba(123, 172, 246, .3)"
        },
        {
          id: 404,
          name: "Luxio",
          color: "#4a4a62",
          rgb: "rgba(74, 74, 98, .3)"
        },
        {
          id: 405,
          name: "Luxray",
          color: "#4a4a62",
          rgb: "rgba(74, 74, 98, .3)"
        },
        {
          id: 406,
          name: "Budew",
          color: "#7bd55a",
          rgb: "rgba(123, 213, 90, .3)"
        },
        {
          id: 407,
          name: "Roserade",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 408,
          name: "Cranidos",
          color: "#4a83bd",
          rgb: "rgba(74, 131, 189, .3)"
        },
        {
          id: 409,
          name: "Rampardos",
          color: "#83837b",
          rgb: "rgba(131, 131, 123, .3)"
        },
        {
          id: 410,
          name: "Shieldon",
          color: "#62626a",
          rgb: "rgba(98, 98, 106, .3)"
        },
        {
          id: 411,
          name: "Bastiodon",
          color: "#62626a",
          rgb: "rgba(98, 98, 106, .3)"
        },
        {
          id: 412,
          name: "Burmy",
          color: "#527341",
          rgb: "rgba(82, 115, 65, .3)"
        },
        {
          id: 413,
          name: "Wormadam",
          color: "#527341",
          rgb: "rgba(82, 115, 65, .3)"
        },
        {
          id: 414,
          name: "Mothim",
          color: "#f6d57b",
          rgb: "rgba(246, 213, 123, .3)"
        },
        {
          id: 415,
          name: "Combee",
          color: "#ffc500",
          rgb: "rgba(255, 197, 0, .3)"
        },
        {
          id: 416,
          name: "Vespiquen",
          color: "#ffcd08",
          rgb: "rgba(255, 205, 8, .3)"
        },
        {
          id: 417,
          name: "Pachirisu",
          color: "#f6f6f6",
          rgb: "rgba(246, 246, 246, .3)"
        },
        {
          id: 418,
          name: "Buizel",
          color: "#ee7b18",
          rgb: "rgba(238, 123, 24, .3)"
        },
        {
          id: 419,
          name: "Floatzel",
          color: "#f6f6b4",
          rgb: "rgba(246, 246, 180, .3)"
        },
        {
          id: 420,
          name: "Cherubi",
          color: "#de6283",
          rgb: "rgba(222, 98, 131, .3)"
        },
        {
          id: 421,
          name: "Cherrim",
          color: "#6a417b",
          rgb: "rgba(106, 65, 123, .3)"
        },
        {
          id: 422,
          name: "Shellos",
          color: "#ff8bc5",
          rgb: "rgba(255, 139, 197, .3)"
        },
        {
          id: 423,
          name: "Gastrodon",
          color: "#6a4a39",
          rgb: "rgba(106, 74, 57, .3)"
        },
        {
          id: 424,
          name: "Ambipom",
          color: "#8339ac",
          rgb: "rgba(131, 57, 172, .3)"
        },
        {
          id: 425,
          name: "Drifloon",
          color: "#946ae6",
          rgb: "rgba(148, 106, 230, .3)"
        },
        {
          id: 426,
          name: "Drifblim",
          color: "#8352ac",
          rgb: "rgba(131, 82, 172, .3)"
        },
        {
          id: 427,
          name: "Buneary",
          color: "#b47b4a",
          rgb: "rgba(180, 123, 74, .3)"
        },
        {
          id: 428,
          name: "Lopunny",
          color: "#eedea4",
          rgb: "rgba(238, 222, 164, .3)"
        },
        {
          id: 429,
          name: "Mismagius",
          color: "#6a4a94",
          rgb: "rgba(106, 74, 148, .3)"
        },
        {
          id: 430,
          name: "Honchkrow",
          color: "#39395a",
          rgb: "rgba(57, 57, 90, .3)"
        },
        {
          id: 431,
          name: "Glameow",
          color: "#8b9cbd",
          rgb: "rgba(139, 156, 189, .3)"
        },
        {
          id: 432,
          name: "Purugly",
          color: "#8394b4",
          rgb: "rgba(131, 148, 180, .3)"
        },
        {
          id: 433,
          name: "Chingling",
          color: "#ffd55a",
          rgb: "rgba(255, 213, 90, .3)"
        },
        {
          id: 434,
          name: "Stunky",
          color: "#6a528b",
          rgb: "rgba(106, 82, 139, .3)"
        },
        {
          id: 435,
          name: "Skuntank",
          color: "#6a528b",
          rgb: "rgba(106, 82, 139, .3)"
        },
        {
          id: 436,
          name: "Bronzor",
          color: "#185a7b",
          rgb: "rgba(24, 90, 123, .3)"
        },
        {
          id: 437,
          name: "Bronzong",
          color: "#207383",
          rgb: "rgba(32, 115, 131, .3)"
        },
        {
          id: 438,
          name: "Bonsly",
          color: "#ac835a",
          rgb: "rgba(172, 131, 90, .3)"
        },
        {
          id: 439,
          name: "Mime Jr.",
          color: "#ffc5d5",
          rgb: "rgba(255, 197, 213, .3)"
        },
        {
          id: 440,
          name: "Happiny",
          color: "#ffc5d5",
          rgb: "rgba(255, 197, 213, .3)"
        },
        {
          id: 441,
          name: "Chatot",
          color: "#41414a",
          rgb: "rgba(65, 65, 74, .3)"
        },
        {
          id: 442,
          name: "Spiritomb",
          color: "#a4529c",
          rgb: "rgba(164, 82, 156, .3)"
        },
        {
          id: 443,
          name: "Gible",
          color: "#5294ac",
          rgb: "rgba(82, 148, 172, .3)"
        },
        {
          id: 444,
          name: "Gabite",
          color: "#394a8b",
          rgb: "rgba(57, 74, 139, .3)"
        },
        {
          id: 445,
          name: "Garchomp",
          color: "#5a62ac",
          rgb: "rgba(90, 98, 172, .3)"
        },
        {
          id: 446,
          name: "Munchlax",
          color: "#317b9c",
          rgb: "rgba(49, 123, 156, .3)"
        },
        {
          id: 447,
          name: "Riolu",
          color: "#4a9cee",
          rgb: "rgba(74, 156, 238, .3)"
        },
        {
          id: 448,
          name: "Lucario",
          color: "#5a5a5a",
          rgb: "rgba(90, 90, 90, .3)"
        },
        {
          id: 449,
          name: "Hippopotas",
          color: "#e6cd7b",
          rgb: "rgba(230, 205, 123, .3)"
        },
        {
          id: 450,
          name: "Hippowdon",
          color: "#eed594",
          rgb: "rgba(238, 213, 148, .3)"
        },
        {
          id: 451,
          name: "Skorupi",
          color: "#6a6ab4",
          rgb: "rgba(106, 106, 180, .3)"
        },
        {
          id: 452,
          name: "Drapion",
          color: "#4a3162",
          rgb: "rgba(74, 49, 98, .3)"
        },
        {
          id: 453,
          name: "Croagunk",
          color: "#6a73d5",
          rgb: "rgba(106, 115, 213, .3)"
        },
        {
          id: 454,
          name: "Toxicroak",
          color: "#6a73d5",
          rgb: "rgba(106, 115, 213, .3)"
        },
        {
          id: 455,
          name: "Carnivine",
          color: "#bdc57b",
          rgb: "rgba(189, 197, 123, .3)"
        },
        {
          id: 456,
          name: "Finneon",
          color: "#31415a",
          rgb: "rgba(49, 65, 90, .3)"
        },
        {
          id: 457,
          name: "Lumineon",
          color: "#31415a",
          rgb: "rgba(49, 65, 90, .3)"
        },
        {
          id: 458,
          name: "Mantyke",
          color: "#1052ac",
          rgb: "rgba(16, 82, 172, .3)"
        },
        {
          id: 459,
          name: "Snover",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 460,
          name: "Abomasnow",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 461,
          name: "Weavile",
          color: "#c52973",
          rgb: "rgba(197, 41, 115, .3)"
        },
        {
          id: 462,
          name: "Magnezone",
          color: "#6a739c",
          rgb: "rgba(106, 115, 156, .3)"
        },
        {
          id: 463,
          name: "Lickilicky",
          color: "#e67394",
          rgb: "rgba(230, 115, 148, .3)"
        },
        {
          id: 464,
          name: "Rhyperior",
          color: "#7b6a7b",
          rgb: "rgba(123, 106, 123, .3)"
        },
        {
          id: 465,
          name: "Tangrowth",
          color: "#3973ac",
          rgb: "rgba(57, 115, 172, .3)"
        },
        {
          id: 466,
          name: "Electivire",
          color: "#ffde20",
          rgb: "rgba(255, 222, 32, .3)"
        },
        {
          id: 467,
          name: "Magmortar",
          color: "#ffc539",
          rgb: "rgba(255, 197, 57, .3)"
        },
        {
          id: 468,
          name: "Togekiss",
          color: "#bdc5de",
          rgb: "rgba(189, 197, 222, .3)"
        },
        {
          id: 469,
          name: "Yanmega",
          color: "#f65a52",
          rgb: "rgba(246, 90, 82, .3)"
        },
        {
          id: 470,
          name: "Leafeon",
          color: "#eed59c",
          rgb: "rgba(238, 213, 156, .3)"
        },
        {
          id: 471,
          name: "Glaceon",
          color: "#94e6ee",
          rgb: "rgba(148, 230, 238, .3)"
        },
        {
          id: 472,
          name: "Gliscor",
          color: "#9c8bee",
          rgb: "rgba(156, 139, 238, .3)"
        },
        {
          id: 473,
          name: "Mamoswine",
          color: "#9c6a4a",
          rgb: "rgba(156, 106, 74, .3)"
        },
        {
          id: 474,
          name: "Porygon-Z",
          color: "#4a9cd5",
          rgb: "rgba(74, 156, 213, .3)"
        },
        {
          id: 475,
          name: "Gallade",
          color: "#c5cdde",
          rgb: "rgba(197, 205, 222, .3)"
        },
        {
          id: 476,
          name: "Probopass",
          color: "#e65a62",
          rgb: "rgba(230, 90, 98, .3)"
        },
        {
          id: 477,
          name: "Dusknoir",
          color: "#413939",
          rgb: "rgba(65, 57, 57, .3)"
        },
        {
          id: 478,
          name: "Froslass",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 479,
          name: "Rotom",
          color: "#5ac5bd",
          rgb: "rgba(90, 197, 189, .3)"
        },
        {
          id: 480,
          name: "Uxie",
          color: "#f6c573",
          rgb: "rgba(246, 197, 115, .3)"
        },
        {
          id: 481,
          name: "Mesprit",
          color: "#ee73ac",
          rgb: "rgba(238, 115, 172, .3)"
        },
        {
          id: 482,
          name: "Azelf",
          color: "#949cc5",
          rgb: "rgba(148, 156, 197, .3)"
        },
        {
          id: 483,
          name: "Dialga",
          color: "#20416a",
          rgb: "rgba(32, 65, 106, .3)"
        },
        {
          id: 484,
          name: "Palkia",
          color: "#eee6ff",
          rgb: "rgba(238, 230, 255, .3)"
        },
        {
          id: 485,
          name: "Heatran",
          color: "#c5c5c5",
          rgb: "rgba(197, 197, 197, .3)"
        },
        {
          id: 486,
          name: "Regigigas",
          color: "#c59c52",
          rgb: "rgba(197, 156, 82, .3)"
        },
        {
          id: 487,
          name: "Giratina",
          color: "#39394a",
          rgb: "rgba(57, 57, 74, .3)"
        },
        {
          id: 488,
          name: "Cresselia",
          color: "#c55a9c",
          rgb: "rgba(197, 90, 156, .3)"
        },
        {
          id: 489,
          name: "Phione",
          color: "#6ac5f6",
          rgb: "rgba(106, 197, 246, .3)"
        },
        {
          id: 490,
          name: "Manaphy",
          color: "#6ac5f6",
          rgb: "rgba(106, 197, 246, .3)"
        },
        {
          id: 491,
          name: "Darkrai",
          color: "#313131",
          rgb: "rgba(49, 49, 49, .3)"
        },
        {
          id: 492,
          name: "Shaymin",
          color: "#acde62",
          rgb: "rgba(172, 222, 98, .3)"
        },
        {
          id: 493,
          name: "Arceus",
          color: "#e6e6ee",
          rgb: "rgba(230, 230, 238, .3)"
        },
        {
          id: 494,
          name: "Victini",
          color: "#ffe6ac",
          rgb: "rgba(255, 230, 172, .3)"
        },
        {
          id: 495,
          name: "Snivy",
          color: "#00b400",
          rgb: "rgba(0, 180, 0, .3)"
        },
        {
          id: 496,
          name: "Servine",
          color: "#fff6bd",
          rgb: "rgba(255, 246, 189, .3)"
        },
        {
          id: 497,
          name: "Serperior",
          color: "#189c4a",
          rgb: "rgba(24, 156, 74, .3)"
        },
        {
          id: 498,
          name: "Tepig",
          color: "#ee8339",
          rgb: "rgba(238, 131, 57, .3)"
        },
        {
          id: 499,
          name: "Pignite",
          color: "#ee7329",
          rgb: "rgba(238, 115, 41, .3)"
        },
        {
          id: 500,
          name: "Emboar",
          color: "#313131",
          rgb: "rgba(49, 49, 49, .3)"
        },
        {
          id: 501,
          name: "Oshawott",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 502,
          name: "Dewott",
          color: "#52bdbd",
          rgb: "rgba(82, 189, 189, .3)"
        },
        {
          id: 503,
          name: "Samurott",
          color: "#205a9c",
          rgb: "rgba(32, 90, 156, .3)"
        },
        {
          id: 504,
          name: "Patrat",
          color: "#7b524a",
          rgb: "rgba(123, 82, 74, .3)"
        },
        {
          id: 505,
          name: "Watchog",
          color: "#943939",
          rgb: "rgba(148, 57, 57, .3)"
        },
        {
          id: 506,
          name: "Lillipup",
          color: "#eecd94",
          rgb: "rgba(238, 205, 148, .3)"
        },
        {
          id: 507,
          name: "Herdier",
          color: "#4a4a6a",
          rgb: "rgba(74, 74, 106, .3)"
        },
        {
          id: 508,
          name: "Stoutland",
          color: "#ffe6ac",
          rgb: "rgba(255, 230, 172, .3)"
        },
        {
          id: 509,
          name: "Purrloin",
          color: "#7b527b",
          rgb: "rgba(123, 82, 123, .3)"
        },
        {
          id: 510,
          name: "Liepard",
          color: "#836294",
          rgb: "rgba(131, 98, 148, .3)"
        },
        {
          id: 511,
          name: "Pansage",
          color: "#18a452",
          rgb: "rgba(24, 164, 82, .3)"
        },
        {
          id: 512,
          name: "Simisage",
          color: "#18a452",
          rgb: "rgba(24, 164, 82, .3)"
        },
        {
          id: 513,
          name: "Pansear",
          color: "#e65241",
          rgb: "rgba(230, 82, 65, .3)"
        },
        {
          id: 514,
          name: "Simisear",
          color: "#e65241",
          rgb: "rgba(230, 82, 65, .3)"
        },
        {
          id: 515,
          name: "Panpour",
          color: "#29b4de",
          rgb: "rgba(41, 180, 222, .3)"
        },
        {
          id: 516,
          name: "Simipour",
          color: "#29b4de",
          rgb: "rgba(41, 180, 222, .3)"
        },
        {
          id: 517,
          name: "Munna",
          color: "#ffc5cd",
          rgb: "rgba(255, 197, 205, .3)"
        },
        {
          id: 518,
          name: "Musharna",
          color: "#de7bbd",
          rgb: "rgba(222, 123, 189, .3)"
        },
        {
          id: 519,
          name: "Pidove",
          color: "#a4a4a4",
          rgb: "rgba(164, 164, 164, .3)"
        },
        {
          id: 520,
          name: "Tranquill",
          color: "#4a4a4a",
          rgb: "rgba(74, 74, 74, .3)"
        },
        {
          id: 521,
          name: "Unfezant",
          color: "#414152",
          rgb: "rgba(65, 65, 82, .3)"
        },
        {
          id: 522,
          name: "Blitzle",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 523,
          name: "Zebstrika",
          color: "#394141",
          rgb: "rgba(57, 65, 65, .3)"
        },
        {
          id: 524,
          name: "Roggenrola",
          color: "#41528b",
          rgb: "rgba(65, 82, 139, .3)"
        },
        {
          id: 525,
          name: "Boldore",
          color: "#41528b",
          rgb: "rgba(65, 82, 139, .3)"
        },
        {
          id: 526,
          name: "Gigalith",
          color: "#41528b",
          rgb: "rgba(65, 82, 139, .3)"
        },
        {
          id: 527,
          name: "Woobat",
          color: "#acdef6",
          rgb: "rgba(172, 222, 246, .3)"
        },
        {
          id: 528,
          name: "Swoobat",
          color: "#4a4a52",
          rgb: "rgba(74, 74, 82, .3)"
        },
        {
          id: 529,
          name: "Drilbur",
          color: "#313131",
          rgb: "rgba(49, 49, 49, .3)"
        },
        {
          id: 530,
          name: "Excadrill",
          color: "#5a4a41",
          rgb: "rgba(90, 74, 65, .3)"
        },
        {
          id: 531,
          name: "Audino",
          color: "#de8b94",
          rgb: "rgba(222, 139, 148, .3)"
        },
        {
          id: 532,
          name: "Timburr",
          color: "#c5bdac",
          rgb: "rgba(197, 189, 172, .3)"
        },
        {
          id: 533,
          name: "Gurdurr",
          color: "#c5bdac",
          rgb: "rgba(197, 189, 172, .3)"
        },
        {
          id: 534,
          name: "Conkeldurr",
          color: "#8b8b83",
          rgb: "rgba(139, 139, 131, .3)"
        },
        {
          id: 535,
          name: "Tympole",
          color: "#ffdebd",
          rgb: "rgba(255, 222, 189, .3)"
        },
        {
          id: 536,
          name: "Palpitoad",
          color: "#626262",
          rgb: "rgba(98, 98, 98, .3)"
        },
        {
          id: 537,
          name: "Seismitoad",
          color: "#0894d5",
          rgb: "rgba(8, 148, 213, .3)"
        },
        {
          id: 538,
          name: "Throh",
          color: "#eee6d5",
          rgb: "rgba(238, 230, 213, .3)"
        },
        {
          id: 539,
          name: "Sawk",
          color: "#b4f6ee",
          rgb: "rgba(180, 246, 238, .3)"
        },
        {
          id: 540,
          name: "Sewaddle",
          color: "#94cd08",
          rgb: "rgba(148, 205, 8, .3)"
        },
        {
          id: 541,
          name: "Swadloon",
          color: "#94cd08",
          rgb: "rgba(148, 205, 8, .3)"
        },
        {
          id: 542,
          name: "Leavanny",
          color: "#7bcd08",
          rgb: "rgba(123, 205, 8, .3)"
        },
        {
          id: 543,
          name: "Venipede",
          color: "#bd3152",
          rgb: "rgba(189, 49, 82, .3)"
        },
        {
          id: 544,
          name: "Whirlipede",
          color: "#83739c",
          rgb: "rgba(131, 115, 156, .3)"
        },
        {
          id: 545,
          name: "Scolipede",
          color: "#9c1041",
          rgb: "rgba(156, 16, 65, .3)"
        },
        {
          id: 546,
          name: "Cottonee",
          color: "#dee6ee",
          rgb: "rgba(222, 230, 238, .3)"
        },
        {
          id: 547,
          name: "Whimsicott",
          color: "#e6decd",
          rgb: "rgba(230, 222, 205, .3)"
        },
        {
          id: 548,
          name: "Petilil",
          color: "#c5ee7b",
          rgb: "rgba(197, 238, 123, .3)"
        },
        {
          id: 549,
          name: "Lilligant",
          color: "#c5ee7b",
          rgb: "rgba(197, 238, 123, .3)"
        },
        {
          id: 550,
          name: "Basculin",
          color: "#41a452",
          rgb: "rgba(65, 164, 82, .3)"
        },
        {
          id: 551,
          name: "Sandile",
          color: "#c59c5a",
          rgb: "rgba(197, 156, 90, .3)"
        },
        {
          id: 552,
          name: "Krokorok",
          color: "#c59c5a",
          rgb: "rgba(197, 156, 90, .3)"
        },
        {
          id: 553,
          name: "Krookodile",
          color: "#8b3141",
          rgb: "rgba(139, 49, 65, .3)"
        },
        {
          id: 554,
          name: "Darumaka",
          color: "#cd3131",
          rgb: "rgba(205, 49, 49, .3)"
        },
        {
          id: 555,
          name: "Darmanitan",
          color: "#ac2018",
          rgb: "rgba(172, 32, 24, .3)"
        },
        {
          id: 556,
          name: "Maractus",
          color: "#5ad56a",
          rgb: "rgba(90, 213, 106, .3)"
        },
        {
          id: 557,
          name: "Dwebble",
          color: "#a49c8b",
          rgb: "rgba(164, 156, 139, .3)"
        },
        {
          id: 558,
          name: "Crustle",
          color: "#8b6a4a",
          rgb: "rgba(139, 106, 74, .3)"
        },
        {
          id: 559,
          name: "Scraggy",
          color: "#202020",
          rgb: "rgba(32, 32, 32, .3)"
        },
        {
          id: 560,
          name: "Scrafty",
          color: "#202020",
          rgb: "rgba(32, 32, 32, .3)"
        },
        {
          id: 561,
          name: "Sigilyph",
          color: "#ffc508",
          rgb: "rgba(255, 197, 8, .3)"
        },
        {
          id: 562,
          name: "Yamask",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 563,
          name: "Cofagrigus",
          color: "#393941",
          rgb: "rgba(57, 57, 65, .3)"
        },
        {
          id: 564,
          name: "Tirtouga",
          color: "#4a9cde",
          rgb: "rgba(74, 156, 222, .3)"
        },
        {
          id: 565,
          name: "Carracosta",
          color: "#4a94d5",
          rgb: "rgba(74, 148, 213, .3)"
        },
        {
          id: 566,
          name: "Archen",
          color: "#f6cd62",
          rgb: "rgba(246, 205, 98, .3)"
        },
        {
          id: 567,
          name: "Archeops",
          color: "#3183f6",
          rgb: "rgba(49, 131, 246, .3)"
        },
        {
          id: 568,
          name: "Trubbish",
          color: "#296a4a",
          rgb: "rgba(41, 106, 74, .3)"
        },
        {
          id: 569,
          name: "Garbodor",
          color: "#a48b73",
          rgb: "rgba(164, 139, 115, .3)"
        },
        {
          id: 570,
          name: "Zorua",
          color: "#5a5a73",
          rgb: "rgba(90, 90, 115, .3)"
        },
        {
          id: 571,
          name: "Zoroark",
          color: "#202031",
          rgb: "rgba(32, 32, 49, .3)"
        },
        {
          id: 572,
          name: "Minccino",
          color: "#bdb4a4",
          rgb: "rgba(189, 180, 164, .3)"
        },
        {
          id: 573,
          name: "Ciccino",
          color: "#bdac9c",
          rgb: "rgba(189, 172, 156, .3)"
        },
        {
          id: 574,
          name: "Gothita",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 575,
          name: "Gothorita",
          color: "#414141",
          rgb: "rgba(65, 65, 65, .3)"
        },
        {
          id: 576,
          name: "Gothitelle",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 577,
          name: "Solosis",
          color: "#5ab47b",
          rgb: "rgba(90, 180, 123, .3)"
        },
        {
          id: 578,
          name: "Duosion",
          color: "#5ab47b",
          rgb: "rgba(90, 180, 123, .3)"
        },
        {
          id: 579,
          name: "Reuniclus",
          color: "#5ab47b",
          rgb: "rgba(90, 180, 123, .3)"
        },
        {
          id: 580,
          name: "Ducklett",
          color: "#94def6",
          rgb: "rgba(148, 222, 246, .3)"
        },
        {
          id: 581,
          name: "Swanna",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 582,
          name: "Vanillite",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 583,
          name: "Vanillish",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 584,
          name: "Vanilluxe",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 585,
          name: "Deerling",
          color: "#f6eec5",
          rgb: "rgba(246, 238, 197, .3)"
        },
        {
          id: 586,
          name: "Sawsbuck",
          color: "#7b5a31",
          rgb: "rgba(123, 90, 49, .3)"
        },
        {
          id: 587,
          name: "Emolga",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 588,
          name: "Karrablast",
          color: "#316aff",
          rgb: "rgba(49, 106, 255, .3)"
        },
        {
          id: 589,
          name: "Escavalier",
          color: "#c5c5c5",
          rgb: "rgba(197, 197, 197, .3)"
        },
        {
          id: 590,
          name: "Foongus",
          color: "#fff6e6",
          rgb: "rgba(255, 246, 230, .3)"
        },
        {
          id: 591,
          name: "Amoonguss",
          color: "#cdc5c5",
          rgb: "rgba(205, 197, 197, .3)"
        },
        {
          id: 592,
          name: "Frillish",
          color: "#83d5ff",
          rgb: "rgba(131, 213, 255, .3)"
        },
        {
          id: 593,
          name: "Jellicent",
          color: "#d5e6ff",
          rgb: "rgba(213, 230, 255, .3)"
        },
        {
          id: 594,
          name: "Alomomola",
          color: "#ffbdbd",
          rgb: "rgba(255, 189, 189, .3)"
        },
        {
          id: 595,
          name: "Joltik",
          color: "#f6de41",
          rgb: "rgba(246, 222, 65, .3)"
        },
        {
          id: 596,
          name: "Galvantula",
          color: "#ffde52",
          rgb: "rgba(255, 222, 82, .3)"
        },
        {
          id: 597,
          name: "Ferroseed",
          color: "#b4bdbd",
          rgb: "rgba(180, 189, 189, .3)"
        },
        {
          id: 598,
          name: "Ferrothorn",
          color: "#b4bdbd",
          rgb: "rgba(180, 189, 189, .3)"
        },
        {
          id: 599,
          name: "Klink",
          color: "#d5deee",
          rgb: "rgba(213, 222, 238, .3)"
        },
        {
          id: 600,
          name: "Klang",
          color: "#a4a4ac",
          rgb: "rgba(164, 164, 172, .3)"
        },
        {
          id: 601,
          name: "Klinklang",
          color: "#d5deee",
          rgb: "rgba(213, 222, 238, .3)"
        },
        {
          id: 602,
          name: "Tynamo",
          color: "#eeffff",
          rgb: "rgba(238, 255, 255, .3)"
        },
        {
          id: 603,
          name: "Eelektrik",
          color: "#205a62",
          rgb: "rgba(32, 90, 98, .3)"
        },
        {
          id: 604,
          name: "Eelektross",
          color: "#206273",
          rgb: "rgba(32, 98, 115, .3)"
        },
        {
          id: 605,
          name: "Elgyem",
          color: "#a4cdbd",
          rgb: "rgba(164, 205, 189, .3)"
        },
        {
          id: 606,
          name: "Beheeyem",
          color: "#de9c7b",
          rgb: "rgba(222, 156, 123, .3)"
        },
        {
          id: 607,
          name: "Litwick",
          color: "#cdc5cd",
          rgb: "rgba(205, 197, 205, .3)"
        },
        {
          id: 608,
          name: "Lampent",
          color: "#4a4a4a",
          rgb: "rgba(74, 74, 74, .3)"
        },
        {
          id: 609,
          name: "Chandelure",
          color: "#313131",
          rgb: "rgba(49, 49, 49, .3)"
        },
        {
          id: 610,
          name: "Axew",
          color: "#94a45a",
          rgb: "rgba(148, 164, 90, .3)"
        },
        {
          id: 611,
          name: "Fraxure",
          color: "#737373",
          rgb: "rgba(115, 115, 115, .3)"
        },
        {
          id: 612,
          name: "Haxorus",
          color: "#a4ac18",
          rgb: "rgba(164, 172, 24, .3)"
        },
        {
          id: 613,
          name: "Cubchoo",
          color: "#94d5ee",
          rgb: "rgba(148, 213, 238, .3)"
        },
        {
          id: 614,
          name: "Beartic",
          color: "#def6ff",
          rgb: "rgba(222, 246, 255, .3)"
        },
        {
          id: 615,
          name: "Cryogonal",
          color: "#5262c5",
          rgb: "rgba(82, 98, 197, .3)"
        },
        {
          id: 616,
          name: "Shelmet",
          color: "#c5c5d5",
          rgb: "rgba(197, 197, 213, .3)"
        },
        {
          id: 617,
          name: "Accelgor",
          color: "#6a83c5",
          rgb: "rgba(106, 131, 197, .3)"
        },
        {
          id: 618,
          name: "Stunfisk",
          color: "#d59c83",
          rgb: "rgba(213, 156, 131, .3)"
        },
        {
          id: 619,
          name: "Mienfoo",
          color: "#f6f68b",
          rgb: "rgba(246, 246, 139, .3)"
        },
        {
          id: 620,
          name: "Mienshao",
          color: "#e6d5d5",
          rgb: "rgba(230, 213, 213, .3)"
        },
        {
          id: 621,
          name: "Druddigon",
          color: "#104a8b",
          rgb: "rgba(16, 74, 139, .3)"
        },
        {
          id: 622,
          name: "Golett",
          color: "#83cdcd",
          rgb: "rgba(131, 205, 205, .3)"
        },
        {
          id: 623,
          name: "Golurk",
          color: "#83c5cd",
          rgb: "rgba(131, 197, 205, .3)"
        },
        {
          id: 624,
          name: "Pawniard",
          color: "#bd4141",
          rgb: "rgba(189, 65, 65, .3)"
        },
        {
          id: 625,
          name: "Bisharp",
          color: "#dedede",
          rgb: "rgba(222, 222, 222, .3)"
        },
        {
          id: 626,
          name: "Bouffalant",
          color: "#4a4131",
          rgb: "rgba(74, 65, 49, .3)"
        },
        {
          id: 627,
          name: "Rufflet",
          color: "#f6eed5",
          rgb: "rgba(246, 238, 213, .3)"
        },
        {
          id: 628,
          name: "Braviary",
          color: "#525273",
          rgb: "rgba(82, 82, 115, .3)"
        },
        {
          id: 629,
          name: "Vullaby",
          color: "#524141",
          rgb: "rgba(82, 65, 65, .3)"
        },
        {
          id: 630,
          name: "Mandibuzz",
          color: "#624a41",
          rgb: "rgba(98, 74, 65, .3)"
        },
        {
          id: 631,
          name: "Heatmor",
          color: "#a48b73",
          rgb: "rgba(164, 139, 115, .3)"
        },
        {
          id: 632,
          name: "Durant",
          color: "#181820",
          rgb: "rgba(24, 24, 32, .3)"
        },
        {
          id: 633,
          name: "Deino",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 634,
          name: "Zweilous",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 635,
          name: "Hydreigon",
          color: "#525252",
          rgb: "rgba(82, 82, 82, .3)"
        },
        {
          id: 636,
          name: "Larvesta",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 637,
          name: "Volcarona",
          color: "#ee7318",
          rgb: "rgba(238, 115, 24, .3)"
        },
        {
          id: 638,
          name: "Cobalion",
          color: "#18acb4",
          rgb: "rgba(24, 172, 180, .3)"
        },
        {
          id: 639,
          name: "Terrakion",
          color: "#b4acac",
          rgb: "rgba(180, 172, 172, .3)"
        },
        {
          id: 640,
          name: "Virizion",
          color: "#9ccd52",
          rgb: "rgba(156, 205, 82, .3)"
        },
        {
          id: 641,
          name: "Tornadus",
          color: "#8341ac",
          rgb: "rgba(131, 65, 172, .3)"
        },
        {
          id: 642,
          name: "Thundurus",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 643,
          name: "Reshiram",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 644,
          name: "Zekrom",
          color: "#313139",
          rgb: "rgba(49, 49, 57, .3)"
        },
        {
          id: 645,
          name: "Landorus",
          color: "#ffffff",
          rgb: "rgba(255, 255, 255, .3)"
        },
        {
          id: 646,
          name: "Kyurem",
          color: "#bde6ff",
          rgb: "rgba(189, 230, 255, .3)"
        },
        {
          id: 647,
          name: "Keldeo",
          color: "#202020",
          rgb: "rgba(32, 32, 32, .3)"
        },
        {
          id: 648,
          name: "Meloetta",
          color: "#cdf69c",
          rgb: "rgba(205, 246, 156, .3)"
        },
        {
          id: 649,
          name: "Genesect",
          color: "#9c5ac5",
          rgb: "rgba(156, 90, 197, .3)"
        }
      ];

    return NextResponse.json(pokecolors)
}

// import { NextApiRequest, NextApiResponse } from 'next';

// import { NextRequest, NextResponse } from "next/server";

// export default async function handler(req: NextRequest, res: NextResponse) {
//   if (req.method === 'GET') {
//     const pokemons = { id: 1, name: 'bulbasaur', color: '#399494', rgb: 'rgba(57, 148, 148, .3)' };
//     NextResponse.json(pokemons);
//   }
// }