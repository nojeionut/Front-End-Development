// example of JSON data


const json_example = 
{
    "name": "Noje",
    "age": 23,
    "isStudent": true,
    "hobbies": ["reading", "coding", "gaming"],
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
};

console.log(json_example.address.city);

// create an object and transform it in JSON

const person = {
    nume: "Noje",
    prenume: "Ionut",
    varsta: 23,
    sex: "Masculin",
    ocupatie: "Student",
    hobbies: ["reading", "coding", "gaming"],
    adresa: {
        strada: "Str. Principala",
        oras: "Bucuresti",
        judet: "Ilfov"
    }
}

const person_json = JSON.stringify(person);

console.log(person_json);


// transform JSON in object

const person_obj_from_json = JSON.parse(person_json);
console.log(person_obj_from_json);

const keys = Object.keys(person_obj_from_json);
console.log(keys);

const values = Object.values(person_obj_from_json);
console.log(values);

const entries = Object.entries(person_obj_from_json);
console.log(entries);



// JSON file with multiple objects

const json_file = 
[
    {
        "nume": "Ionut",
        "prenume": "Noje",
        "varsta": 23,
        "sex": "Masculin",
        "ocupatie": "Student",
        "hobbies": ["reading", "coding", "gaming"],
        "adresa": {
            "strada": "Str. Principala",
            "oras": "Bucuresti",
            "judet": "Ilfov"
            }
    },

    {
        "nume": "Andrei",
        "prenume": "Popescu",
        "varsta": 25,
        "sex": "Masculin",
        "ocupatie": "Programator",
        "hobbies": ["gym", "music", "gaming"],
        "adresa": {
            "strada": "Str. Eminescu",
            "oras": "Targu-Mures",
            "judet": "Mures"
            }
    },

    {
        "nume": "Maria",
        "prenume": "Popescu",
        "varsta": 22,
        "sex": "Feminin",
        "ocupatie": "Student",
        "hobbies": ["reading", "makeup", "movies"],
        "adresa": {
            "strada": "Str. Durerii",
            "oras": "Jibou",
            "judet": "Salaj"
            }
    }
]

const object_array = [];

for (object in json_file)
{
    object_array.push(json_file[object]);
}


// create the JSON file using the object array

const json_file_from_array = JSON.stringify(object_array);

console.log(json_file_from_array);


