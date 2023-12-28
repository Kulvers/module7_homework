const book = {
    name: "Преступление и наказание",
    autor: "Достоевский Ф.М.",
    year: 2016,
    publisher: "Эксмо",
};

getObjectValues(book);

function getObjectValues(obj) {
    for (let key in obj) {
             console.log(`${key}  =  ${obj[key]}`);
    }
}
