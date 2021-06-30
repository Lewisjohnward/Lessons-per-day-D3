const ObjectsToCsv = require('objects-to-csv');

const lessonCleaner = () => {
  const lessons = 
[
    {
      "id": 0,
      "day": "25",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 1,
      "day": "24",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 2,
      "day": "23",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 3,
      "day": "21",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 4,
      "day": "20",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 5,
      "day": "18",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 6,
      "day": "17",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 7,
      "day": "16",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 8,
      "day": "15",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 9,
      "day": "14",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 10,
      "day": "13",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 11,
      "day": "11",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 12,
      "day": "10",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 13,
      "day": "09",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 14,
      "day": "08",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 15,
      "day": "07",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 16,
      "day": "06",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 17,
      "day": "04",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 18,
      "day": "02",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 19,
      "day": "01",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 20,
      "day": "26",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 21,
      "day": "25",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 22,
      "day": "25",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 23,
      "day": "24",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 24,
      "day": "20",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 25,
      "day": "17",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 26,
      "day": "17",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 27,
      "day": "11",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 28,
      "day": "10",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 29,
      "day": "09",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 30,
      "day": "06",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 31,
      "day": "04",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 32,
      "day": "03",
      "month": "mag",
      "length": "30 min"
    },
    {
      "id": 33,
      "day": "28",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 34,
      "day": "27",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 35,
      "day": "16",
      "month": "apr",
      "length": "45 min"
    },
    {
      "id": 36,
      "day": "15",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 37,
      "day": "13",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 38,
      "day": "07",
      "month": "apr",
      "length": "45 min"
    },
    {
      "id": 39,
      "day": "06",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 40,
      "day": "02",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 41,
      "day": "01",
      "month": "apr",
      "length": "30 min"
    },
    {
      "id": 42,
      "day": "26",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 43,
      "day": "26",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 44,
      "day": "25",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 45,
      "day": "23",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 46,
      "day": "19",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 47,
      "day": "18",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 48,
      "day": "12",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 49,
      "day": "04",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 50,
      "day": "03",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 51,
      "day": "28",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 52,
      "day": "26",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 53,
      "day": "25",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 54,
      "day": "21",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 55,
      "day": "19",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 56,
      "day": "17",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 57,
      "day": "17",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 58,
      "day": "16",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 59,
      "day": "12",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 60,
      "day": "11",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 61,
      "day": "10",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 62,
      "day": "09",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 63,
      "day": "05",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 64,
      "day": "04",
      "month": "feb",
      "length": "45 min"
    },
    {
      "id": 65,
      "day": "04",
      "month": "feb",
      "length": "30 min"
    },
    {
      "id": 66,
      "day": "30",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 67,
      "day": "29",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 68,
      "day": "28",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 69,
      "day": "26",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 70,
      "day": "22",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 71,
      "day": "21",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 72,
      "day": "21",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 73,
      "day": "20",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 74,
      "day": "19",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 75,
      "day": "18",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 76,
      "day": "15",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 77,
      "day": "14",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 78,
      "day": "14",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 79,
      "day": "08",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 80,
      "day": "08",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 81,
      "day": "04",
      "month": "gen",
      "length": "30 min"
    },
    {
      "id": 82,
      "day": "04",
      "month": "gen",
      "length": "45 min"
    },
    {
      "id": 83,
      "day": "30",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 84,
      "day": "29",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 85,
      "day": "22",
      "month": "dic",
      "length": "30 min"
    },
    {
      "id": 86,
      "day": "22",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 87,
      "day": "18",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 88,
      "day": "17",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 89,
      "day": "15",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 90,
      "day": "11",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 91,
      "day": "11",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 92,
      "day": "10",
      "month": "dic",
      "length": "30 min"
    },
    {
      "id": 93,
      "day": "09",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 94,
      "day": "09",
      "month": "dic",
      "length": "30 min"
    },
    {
      "id": 95,
      "day": "03",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 96,
      "day": "01",
      "month": "dic",
      "length": "45 min"
    },
    {
      "id": 97,
      "day": "30",
      "month": "nov",
      "length": "30 min"
    },
    {
      "id": 98,
      "day": "29",
      "month": "nov",
      "length": "30 min"
    },
    {
      "id": 99,
      "day": "28",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 100,
      "day": "26",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 101,
      "day": "25",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 102,
      "day": "23",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 103,
      "day": "22",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 104,
      "day": "21",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 105,
      "day": "19",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 106,
      "day": "17",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 107,
      "day": "16",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 108,
      "day": "14",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 109,
      "day": "13",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 110,
      "day": "13",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 111,
      "day": "11",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 112,
      "day": "10",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 113,
      "day": "09",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 114,
      "day": "08",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 115,
      "day": "06",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 116,
      "day": "05",
      "month": "nov",
      "length": "45 min"
    },
    {
      "id": 117,
      "day": "31",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 118,
      "day": "29",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 119,
      "day": "29",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 120,
      "day": "27",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 121,
      "day": "26",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 122,
      "day": "26",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 123,
      "day": "23",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 124,
      "day": "22",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 125,
      "day": "22",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 126,
      "day": "20",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 127,
      "day": "19",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 128,
      "day": "18",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 129,
      "day": "15",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 130,
      "day": "14",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 131,
      "day": "12",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 132,
      "day": "08",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 133,
      "day": "07",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 134,
      "day": "07",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 135,
      "day": "07",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 136,
      "day": "06",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 137,
      "day": "05",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 138,
      "day": "04",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 139,
      "day": "01",
      "month": "ott",
      "length": "45 min"
    },
    {
      "id": 140,
      "day": "29",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 141,
      "day": "29",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 142,
      "day": "28",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 143,
      "day": "26",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 144,
      "day": "26",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 145,
      "day": "26",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 146,
      "day": "22",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 147,
      "day": "19",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 148,
      "day": "17",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 149,
      "day": "16",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 150,
      "day": "16",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 151,
      "day": "14",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 152,
      "day": "13",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 153,
      "day": "11",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 154,
      "day": "09",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 155,
      "day": "09",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 156,
      "day": "07",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 157,
      "day": "06",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 158,
      "day": "04",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 159,
      "day": "01",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 160,
      "day": "01",
      "month": "set",
      "length": "45 min"
    },
    {
      "id": 161,
      "day": "01",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 162,
      "day": "27",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 163,
      "day": "26",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 164,
      "day": "26",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 165,
      "day": "18",
      "month": "ago",
      "length": "30 min"
    },
    {
      "id": 166,
      "day": "18",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 167,
      "day": "17",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 168,
      "day": "11",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 169,
      "day": "07",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 170,
      "day": "05",
      "month": "ago",
      "length": "45 min"
    },
    {
      "id": 171,
      "day": "30",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 172,
      "day": "28",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 173,
      "day": "21",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 174,
      "day": "21",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 175,
      "day": "20",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 176,
      "day": "16",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 177,
      "day": "15",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 178,
      "day": "15",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 179,
      "day": "10",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 180,
      "day": "07",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 181,
      "day": "04",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 182,
      "day": "03",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 183,
      "day": "30",
      "month": "giu",
      "length": "45 min"
    },
    {
      "id": 184,
      "day": "29",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 185,
      "day": "27",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 186,
      "day": "26",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 187,
      "day": "23",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 188,
      "day": "21",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 189,
      "day": "19",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 190,
      "day": "18",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 191,
      "day": "16",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 192,
      "day": "11",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 193,
      "day": "09",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 194,
      "day": "08",
      "month": "giu",
      "length": "30 min"
    },
    {
      "id": 195,
      "day": "04",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 196,
      "day": "02",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 197,
      "day": "01",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 198,
      "day": "31",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 199,
      "day": "26",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 200,
      "day": "25",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 201,
      "day": "25",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 202,
      "day": "19",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 203,
      "day": "18",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 204,
      "day": "12",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 205,
      "day": "12",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 206,
      "day": "05",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 207,
      "day": "05",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 208,
      "day": "28",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 209,
      "day": "27",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 210,
      "day": "27",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 211,
      "day": "21",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 212,
      "day": "20",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 213,
      "day": "14",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 214,
      "day": "14",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 215,
      "day": "07",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 216,
      "day": "07",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 217,
      "day": "31",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 218,
      "day": "30",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 219,
      "day": "24",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 220,
      "day": "23",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 221,
      "day": "20",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 222,
      "day": "17",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 223,
      "day": "16",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 224,
      "day": "13",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 225,
      "day": "10",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 226,
      "day": "10",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 227,
      "day": "09",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 228,
      "day": "29",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 229,
      "day": "28",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 230,
      "day": "28",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 231,
      "day": "27",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 232,
      "day": "25",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 233,
      "day": "24",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 234,
      "day": "24",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 235,
      "day": "22",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 236,
      "day": "21",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 237,
      "day": "18",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 238,
      "day": "17",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 239,
      "day": "17",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 240,
      "day": "11",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 241,
      "day": "10",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 242,
      "day": "10",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 243,
      "day": "04",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 244,
      "day": "02",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 245,
      "day": "29",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 246,
      "day": "28",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 247,
      "day": "23",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 248,
      "day": "21",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 249,
      "day": "17",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 250,
      "day": "14",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 251,
      "day": "07",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 252,
      "day": "06",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 253,
      "day": "28",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 254,
      "day": "27",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 255,
      "day": "18",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 256,
      "day": "16",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 257,
      "day": "13",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 258,
      "day": "03",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 259,
      "day": "02",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 260,
      "day": "27",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 261,
      "day": "26",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 262,
      "day": "25",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 263,
      "day": "22",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 264,
      "day": "13",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 265,
      "day": "12",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 266,
      "day": "06",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 267,
      "day": "05",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 268,
      "day": "30",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 269,
      "day": "29",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 270,
      "day": "23",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 271,
      "day": "22",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 272,
      "day": "18",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 273,
      "day": "15",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 274,
      "day": "14",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 275,
      "day": "11",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 276,
      "day": "08",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 277,
      "day": "06",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 278,
      "day": "01",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 279,
      "day": "25",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 280,
      "day": "21",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 281,
      "day": "20",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 282,
      "day": "17",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 283,
      "day": "12",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 284,
      "day": "10",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 285,
      "day": "05",
      "month": "set",
      "length": "30 min"
    },
    {
      "id": 286,
      "day": "04",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 287,
      "day": "21",
      "month": "ago",
      "length": "30 min"
    },
    {
      "id": 288,
      "day": "20",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 289,
      "day": "13",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 290,
      "day": "30",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 291,
      "day": "04",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 292,
      "day": "26",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 293,
      "day": "23",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 294,
      "day": "16",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 295,
      "day": "10",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 296,
      "day": "07",
      "month": "lug",
      "length": "90 min"
    },
    {
      "id": 297,
      "day": "03",
      "month": "lug",
      "length": "90 min"
    },
    {
      "id": 298,
      "day": "22",
      "month": "giu",
      "length": "90 min"
    },
    {
      "id": 299,
      "day": "11",
      "month": "giu",
      "length": "90 min"
    },
    {
      "id": 300,
      "day": "04",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 301,
      "day": "29",
      "month": "mag",
      "length": "90 min"
    },
    {
      "id": 302,
      "day": "24",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 303,
      "day": "16",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 304,
      "day": "13",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 305,
      "day": "12",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 306,
      "day": "10",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 307,
      "day": "09",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 308,
      "day": "07",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 309,
      "day": "03",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 310,
      "day": "03",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 311,
      "day": "02",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 312,
      "day": "01",
      "month": "mag",
      "length": "90 min"
    },
    {
      "id": 313,
      "day": "30",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 314,
      "day": "24",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 315,
      "day": "23",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 316,
      "day": "20",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 317,
      "day": "19",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 318,
      "day": "18",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 319,
      "day": "16",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 320,
      "day": "12",
      "month": "apr",
      "length": "90 min"
    },
    {
      "id": 321,
      "day": "12",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 322,
      "day": "10",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 323,
      "day": "09",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 324,
      "day": "08",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 325,
      "day": "07",
      "month": "apr",
      "length": "90 min"
    },
    {
      "id": 326,
      "day": "06",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 327,
      "day": "05",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 328,
      "day": "03",
      "month": "apr",
      "length": "90 min"
    },
    {
      "id": 329,
      "day": "29",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 330,
      "day": "28",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 331,
      "day": "21",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 332,
      "day": "18",
      "month": "mar",
      "length": "90 min"
    },
    {
      "id": 333,
      "day": "17",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 334,
      "day": "16",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 335,
      "day": "15",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 336,
      "day": "11",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 337,
      "day": "21",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 338,
      "day": "12",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 339,
      "day": "17",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 340,
      "day": "07",
      "month": "gen",
      "length": "90 min"
    },
    {
      "id": 341,
      "day": "17",
      "month": "dic",
      "length": "90 min"
    },
    {
      "id": 342,
      "day": "10",
      "month": "dic",
      "length": "90 min"
    },
    {
      "id": 343,
      "day": "03",
      "month": "dic",
      "length": "90 min"
    },
    {
      "id": 344,
      "day": "21",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 345,
      "day": "19",
      "month": "nov",
      "length": "90 min"
    },
    {
      "id": 346,
      "day": "19",
      "month": "nov",
      "length": "90 min"
    },
    {
      "id": 347,
      "day": "18",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 348,
      "day": "17",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 349,
      "day": "07",
      "month": "nov",
      "length": "90 min"
    },
    {
      "id": 350,
      "day": "06",
      "month": "nov",
      "length": "90 min"
    },
    {
      "id": 351,
      "day": "05",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 352,
      "day": "05",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 353,
      "day": "04",
      "month": "nov",
      "length": "90 min"
    },
    {
      "id": 354,
      "day": "31",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 355,
      "day": "31",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 356,
      "day": "29",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 357,
      "day": "29",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 358,
      "day": "23",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 359,
      "day": "22",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 360,
      "day": "21",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 361,
      "day": "20",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 362,
      "day": "17",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 363,
      "day": "13",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 364,
      "day": "10",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 365,
      "day": "09",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 366,
      "day": "08",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 367,
      "day": "05",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 368,
      "day": "04",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 369,
      "day": "02",
      "month": "ott",
      "length": "90 min"
    },
    {
      "id": 370,
      "day": "01",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 371,
      "day": "29",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 372,
      "day": "27",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 373,
      "day": "25",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 374,
      "day": "24",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 375,
      "day": "15",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 376,
      "day": "09",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 377,
      "day": "01",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 378,
      "day": "01",
      "month": "giu",
      "length": "60 min"
    },
    {
      "id": 379,
      "day": "28",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 380,
      "day": "06",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 381,
      "day": "05",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 382,
      "day": "04",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 383,
      "day": "02",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 384,
      "day": "28",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 385,
      "day": "26",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 386,
      "day": "21",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 387,
      "day": "20",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 388,
      "day": "14",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 389,
      "day": "11",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 390,
      "day": "10",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 391,
      "day": "07",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 392,
      "day": "05",
      "month": "apr",
      "length": "60 min"
    },
    {
      "id": 393,
      "day": "31",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 394,
      "day": "24",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 395,
      "day": "24",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 396,
      "day": "10",
      "month": "feb",
      "length": "60 min"
    },
    {
      "id": 397,
      "day": "27",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 398,
      "day": "20",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 399,
      "day": "18",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 400,
      "day": "13",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 401,
      "day": "16",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 402,
      "day": "01",
      "month": "dic",
      "length": "60 min"
    },
    {
      "id": 403,
      "day": "23",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 404,
      "day": "16",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 405,
      "day": "09",
      "month": "nov",
      "length": "60 min"
    },
    {
      "id": 406,
      "day": "14",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 407,
      "day": "07",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 408,
      "day": "05",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 409,
      "day": "03",
      "month": "ott",
      "length": "60 min"
    },
    {
      "id": 410,
      "day": "29",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 411,
      "day": "26",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 412,
      "day": "22",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 413,
      "day": "15",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 414,
      "day": "10",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 415,
      "day": "06",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 416,
      "day": "01",
      "month": "set",
      "length": "60 min"
    },
    {
      "id": 417,
      "day": "31",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 418,
      "day": "29",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 419,
      "day": "27",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 420,
      "day": "25",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 421,
      "day": "23",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 422,
      "day": "22",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 423,
      "day": "17",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 424,
      "day": "15",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 425,
      "day": "11",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 426,
      "day": "08",
      "month": "ago",
      "length": "60 min"
    },
    {
      "id": 427,
      "day": "18",
      "month": "lug",
      "length": "45 min"
    },
    {
      "id": 428,
      "day": "15",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 429,
      "day": "12",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 430,
      "day": "06",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 431,
      "day": "05",
      "month": "lug",
      "length": "60 min"
    },
    {
      "id": 432,
      "day": "09",
      "month": "giu",
      "length": "45 min"
    },
    {
      "id": 433,
      "day": "08",
      "month": "giu",
      "length": "45 min"
    },
    {
      "id": 434,
      "day": "30",
      "month": "mag",
      "length": "45 min"
    },
    {
      "id": 435,
      "day": "29",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 436,
      "day": "19",
      "month": "mag",
      "length": "60 min"
    },
    {
      "id": 437,
      "day": "16",
      "month": "mag",
      "length": "45 min"
    },
    {
      "id": 438,
      "day": "18",
      "month": "apr",
      "length": "45 min"
    },
    {
      "id": 439,
      "day": "27",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 440,
      "day": "26",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 441,
      "day": "25",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 442,
      "day": "25",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 443,
      "day": "24",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 444,
      "day": "24",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 445,
      "day": "23",
      "month": "mar",
      "length": "45 min"
    },
    {
      "id": 446,
      "day": "23",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 447,
      "day": "22",
      "month": "mar",
      "length": "60 min"
    },
    {
      "id": 448,
      "day": "19",
      "month": "mar",
      "length": "30 min"
    },
    {
      "id": 449,
      "day": "14",
      "month": "gen",
      "length": "60 min"
    },
    {
      "id": 450,
      "day": "07",
      "month": "gen",
      "length": "60 min"
    }
  ]

  let updatedLessons = []

  let year = 2021
  let previousLesson = 5

  const whatMonth = month => {
    let monthAsNumber  
    if (month === "gen"){
      monthAsNumber = 0
    }
    if (month === "feb"){
      monthAsNumber = 1
    }
    if (month === "mar"){
      monthAsNumber = 2
    }
    if (month === "apr"){
      monthAsNumber = 3
    }
    if (month === "mag"){
      monthAsNumber = 4
    }
    if (month === "giu"){
      monthAsNumber = 5
    }
    if (month === "lug"){
      monthAsNumber = 6
    }
    if (month === "ago"){
      monthAsNumber = 7
    }
    if (month === "set"){
      monthAsNumber = 8
    }
    if (month === "ott"){
      monthAsNumber = 9
    }
    if (month === "nov"){
      monthAsNumber = 10
    }
    if (month === "dic"){
      monthAsNumber = 11
    }

    return monthAsNumber
  }

  const whatDay = day => {
    const numericalDay = parseInt(day)
    return numericalDay
  }

  const calculateLength = length => {
    return parseInt(length)
  }

  lessons.map(item => {
    const month = whatMonth(item.month)
    const currentLesson = month
    const day = whatDay(item.day)
    const length = calculateLength(item.length)

    if (currentLesson < previousLesson){
      year -= 1
    }

    const updated = {
      id: item.id,
      length: length,
      date: new Date(year, month, day)
    }

    updatedLessons.push(updated)
    previousLesson = month
  })

  return updatedLessons
}

(async () => {
    const csv = new ObjectsToCsv(lessonCleaner())
    
    await csv.toDisk('./test.csv')

})()
