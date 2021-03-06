const uuid = require('uuid/v1');

const pets =
            [{
                "id": uuid(),
                "species": "dog",
                "name": "prince charming",
                "price": 1200,
                "gender": "male",
                "weight": 5,
                "birth_date": 1577904086,
                "color": "blenheim,black,ruby",
                "breed": "the cavalier king kharles spaniel",
                "is_sterile": false,
                "hair": "long",
                "imageSrc": "images/image_1.jpg"
            },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "lucky",
                    "price": 1800,
                    "gender": "male",
                    "imageSrc": "images/image_2.jpg",
                    "weight": 30,
                    "birth_date": 1577904086,
                    "color": "golden",
                    "breed": "golden retrieverel",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "simba",
                    "price": 1500,
                    "gender": "male",
                    "imageSrc": "images/image_3.jpg",
                    "weight": 10,
                    "birth_date": 1577904086,
                    "color": "tricolor",
                    "breed": "beagle",
                    "is_sterile": false,
                    "hair": "short"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "diamond",
                    "price": 3000,
                    "gender": "female",
                    "imageSrc": "images/image_4.jpg",
                    "weight":4,
                    "birth_date": 1577904086,
                    "color": "white",
                    "breed": "bichon_frise",
                    "is_sterile": false,
                    "hair": "long"
                },

                {
                    "id":uuid(),
                    "species": "dog",
                    "name": "rocky",
                    "price": 1000,
                    "gender": "male",
                    "imageSrc": "images/image_5.jpg",
                    "weight": 25,
                    "birth_date": 1577904086,
                    "color": "brown",
                    "breed": "irish_setter",
                    "is_sterile": false,
                    "hair": "short"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "chester",
                    "price": 1800,
                    "gender": "male",
                    "imageSrc": "images/image_6.jpg",
                    "weight": 17,
                    "birth_date": 1577904086,
                    "color": "white",
                    "breed": "west_highland _white_terrier",
                    "is_sterile": false,
                    "hair": "short"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "daniella",
                    "price": 2000,
                    "gender": "female",
                    "imageSrc": "images/image_7.jpg",
                    "weight": 3.2,
                    "birth_date": 1577904086,
                    "color": "golden,black",
                    "breed": "yorkshire_terrier",
                    "is_sterile": false,
                    "hair": "short"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "jerry",
                    "price": 2000,
                    "gender": "male",
                    "imageSrc": "images/image_8.jpg",
                    "weight": 25,
                    "birth_date": 1577904086,
                    "color": "white,goldenblack",
                    "breed": "collie",
                    "is_sterile": false,
                    "hair": "long"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "benji",
                    "price": 1900,
                    "gender": "male",
                    "imageSrc": "images/image_9.jpg",
                    "weight": 35,
                    "birth_date": 1577904086,
                    "color": "golden,white",
                    "breed": "shiba_inu",
                    "is_sterile": false,
                    "hair": "short"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "loki",
                    "price": 2000,
                    "gender": "male",
                    "imageSrc": "images/image_10.jpg",
                    "weight": 30,
                    "birth_date": 1577904086,
                    "color": "black,brown",
                    "breed": "chow_chow",
                    "is_sterile": false,
                    "hair": "long"
                },


                {
                    "id": uuid(),
                    "species": "cat",
                    "price": 400,
                    "gender": "male",
                    "weight": 8,
                    "birth_date": 1546293600000,
                    "color": "orange",
                    "breed": "bengal cat",
                    "imageSrc": "images/image_11.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "cat",
                    "price": 600,
                    "gender": "male",
                    "weight": 5.5,
                    "birth_date": 1530478800000,
                    "color": "gray",
                    "breed": "siamese cat",
                    "imageSrc": "images/image_12.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "cat",
                    "price": 300,
                    "gender": "female",
                    "weight": 6.5,
                    "birth_date": 1538514000000,
                    "color": "gray",
                    "breed": "british shorthair",
                    "imageSrc": "images/image_13.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "cat",
                    "price": 700,
                    "gender": "female",
                    "weight": 9,
                    "birth_date": 1522789200000,
                    "color": "gray",
                    "breed": "maine coon",
                    "imageSrc": "images/image_14.jpg",
                    "is_sterile": true,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 800,
                    "gender": "female",
                    "weight": 20,
                    "birth_date": 1483567200000,
                    "color": "black",
                    "breed": "siberian husky",
                    "imageSrc": "images/image_15.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 900,
                    "gender": "female",
                    "weight": 2.8,
                    "birth_date": 1491426000000,
                    "color": "black",
                    "breed": "yorkshire terrier",
                    "imageSrc": "images/image_16.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 500,
                    "gender": "female",
                    "weight": 18,
                    "birth_date": 1499374800000,
                    "color": "black",
                    "breed": "dobermann",
                    "imageSrc": "images/image_17.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 400,
                    "gender": "male",
                    "weight": 3,
                    "birth_date": 1507410000000,
                    "color": "cream",
                    "breed": "pug",
                    "imageSrc": "images/image_18.jpg",
                    "is_sterile": true,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "raccoon",
                    "price": 650,
                    "gender": "male",
                    "weight": 7.5,
                    "birth_date": 1475960400000,
                    "color": "ginger",
                    "breed": "procyon lotor",
                    "imageSrc": "images/image_19.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "raccoon",
                    "price": 350,
                    "gender": "male",
                    "weight": 7,
                    "birth_date": 1554843600000,
                    "color": "black",
                    "breed": "raccoon dog",
                    "imageSrc": "images/image_20.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },

                {
                    "id": uuid(),
                    "species": "cat",
                    "name": "Мурчик",
                    "price": 600,
                    "gender": "male",
                    "weight": 2.1,
                    "birth_date": 1579113686,
                    "color": "gray",
                    "breed": "british shorthair",
                    "imageSrc": "images/image_21.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "Пушистик",
                    "price": 2000,
                    "gender": "female",
                    "weight": 4.24,
                    "birth_date": 1577904086,
                    "color": "black",
                    "breed": "beagle",
                    "imageSrc": "images/image_22.jpg",
                    "is_sterile": true,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "Хвост",
                    "price": 10549,
                    "gender": "female",
                    "weight": 1.24,
                    "birth_date": 1559414486,
                    "color": "white",
                    "breed": "chow-chow",
                    "imageSrc": "images/image_23.jpg",
                    "is_sterile": true,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "bird",
                    "name": "Кеша",
                    "price": 250,
                    "gender": "male",
                    "weight": 0.23,
                    "birth_date": 1576348886,
                    "color": "yellow",
                    "breed": "budgerigar",
                    "imageSrc": "images/image_24.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "name": "Буль-Буль",
                    "price": 49,
                    "gender": "male",
                    "weight": 0.11,
                    "birth_date": 1577558486,
                    "color": "gold",
                    "breed": "gold fish",
                    "imageSrc": "images/image_25.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "name": "Пушинка",
                    "price": 1449,
                    "gender": "female",
                    "weight": 2.11,
                    "birth_date": 1570300886,
                    "color": "white",
                    "breed": "scottish terrier",
                    "imageSrc": "images/image_26.jpg",
                    "is_sterile": true,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "cat",
                    "name": "Шанти",
                    "price": 999,
                    "gender": "female",
                    "weight": 3.11,
                    "birth_date": 1505932886,
                    "color": "gray",
                    "breed": "british cat",
                    "imageSrc": "images/image_27.jpg",
                    "is_sterile": true,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "bird",
                    "name": "Гоша",
                    "price": 50,
                    "gender": "female",
                    "weight": 0,
                    "birth_date": 1513795286,
                    "color": "green",
                    "breed": "budgerigar",
                    "imageSrc": "images/image_28.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "elephant",
                    "name": "Малыш",
                    "price": 9999,
                    "gender": "female",
                    "weight": 6000.54,
                    "birth_date": 1413830486,
                    "color": "gray",
                    "breed": "african elephant",
                    "imageSrc": "images/image_29.jpg",
                    "is_sterile": true,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "mouse",
                    "name": "Гайка",
                    "price": 100,
                    "gender": "female",
                    "weight": 0.29,
                    "birth_date": 1476988886,
                    "color": "pink",
                    "breed": "mouse",
                    "imageSrc": "images/image_30.jpg",
                    "is_sterile": true,
                    "hair": "short"
                },


                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 250,
                    "gender": "male",
                    "weight": 0.2,
                    "birth_date": 1582222400000,
                    "color": "gray-white",
                    "breed": "Hypancistrus",
                    "imageSrc": "images/image_31.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 360,
                    "gender": "female",
                    "weight": 0.3,
                    "birth_date": 1584222400000,
                    "color": "black-red",
                    "breed": "Panaqolus",
                    "imageSrc": "images/image_32.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 25,
                    "gender": "female",
                    "weight": 0.03,
                    "birth_date": 1583022400000,
                    "color": "blue",
                    "breed": "Microrasbora erythromicron",
                    "imageSrc": "images/image_33.jpg",
                    "temper": "peacefull"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 10,
                    "gender": "male",
                    "weight": 0.02,
                    "birth_date": 1581022400000,
                    "color": "yellow",
                    "breed": "Trigonostigma heteromorpha",
                    "imageSrc": "images/image_34.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 25,
                    "gender": "female",
                    "weight": 0.02,
                    "birth_date": 1583222400000,
                    "color": "blue-yellow",
                    "breed": "Melanotaenia boesemani",
                    "imageSrc": "images/image_35.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 40,
                    "gender": "female",
                    "weight": 0.02,
                    "birth_date": 1578543600000,
                    "color": "yellow",
                    "breed": "Pseudomugil furcatus",
                    "imageSrc": "images/image_36.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 30,
                    "gender": "male",
                    "weight": 0.01,
                    "birth_date": 1554843600000,
                    "color": "white",
                    "breed": "Pterophyllum scalare",
                    "imageSrc": "images/image_37.jpg",
                    "temper": "peacefull"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 150,
                    "gender": "male",
                    "weight": 0.03,
                    "birth_date": 1579543600000,
                    "color": "blue",
                    "breed": "Aequidens rivulatus",
                    "imageSrc": "images/image_38.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 350,
                    "gender": "male",
                    "weight": 0.04,
                    "birth_date": 1582843600000,
                    "color": "red-black",
                    "breed": "Astronotus ocellatus",
                    "imageSrc": "images/image_39.jpg",
                    "temper": "predator"
                },
                {
                    "id": uuid(),
                    "species": "fish",
                    "price": 60,
                    "gender": "female",
                    "weight": 0.02,
                    "birth_date": 1556843600000,
                    "color": "red",
                    "breed": "Hemichromis bimaculatus",
                    "imageSrc": "images/image_40.jpg",
                    "temper": "predator"
                },

                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 600,
                    "gender": "female",
                    "weight": 8.3,
                    "birth_date": 1575842400000,
                    "color": "black",
                    "breed": "doberman",
                    "imageSrc": "images/image_41.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 300,
                    "gender": "male",
                    "weight": 6.7,
                    "birth_date": 1575842400000,
                    "color": "golden",
                    "breed": "golden retriever",
                    "imageSrc": "images/image_42.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 750,
                    "gender": "female",
                    "weight": 10.4,
                    "birth_date": 1575842400000,
                    "color": "black",
                    "breed": "berner Sennenhund",
                    "imageSrc": "images/image_43.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 540,
                    "gender": "male",
                    "weight": 7.1,
                    "birth_date": 1575842400000,
                    "color": "brown",
                    "breed": "Beagle",
                    "imageSrc": "images/image_44.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 570,
                    "gender": "female",
                    "weight": 2.8,
                    "birth_date": 1575842400000,
                    "color": "golden",
                    "breed": "mops",
                    "imageSrc": "images/image_45.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 920,
                    "gender": "male",
                    "weight": 5.3,
                    "birth_date": 1575842400000,
                    "color": "gray",
                    "breed": "Cane corso",
                    "imageSrc": "images/image_46.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 590,
                    "gender": "female",
                    "weight": 5.9,
                    "birth_date": 1575842400000,
                    "color": "black",
                    "breed": "Rottweiler",
                    "imageSrc": "images/image_47.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 780,
                    "gender": "male",
                    "weight": 6.3,
                    "birth_date": 1575842400000,
                    "color": "white-brown",
                    "breed": "Akita",
                    "imageSrc": "images/image_48.jpg",
                    "is_sterile": false,
                    "hair": "long"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 970,
                    "gender": "female",
                    "weight": 10.3,
                    "birth_date": 1575842400000,
                    "color": "brown",
                    "breed": "Rhodesian Ridgeback",
                    "imageSrc": "images/image_49.jpg",
                    "is_sterile": false,
                    "hair": "short"
                },
                {
                    "id": uuid(),
                    "species": "dog",
                    "price": 400,
                    "gender": "female",
                    "weight": 2.2,
                    "birth_date": 1575842400000,
                    "color": "black",
                    "breed": "Chihuahua",
                    "imageSrc": "images/image_50.jpg",
                    "is_sterile": false,
                    "hair": "short"
                }
            ];

module.exports = pets;
