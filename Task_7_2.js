const book = {
    name: "Преступление и наказание",
    autor: "Достоевский Ф.М.",
    year: 2016,
    publisher: "Эксмо",
};

console.log(isProperty(book, 'publisher'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}
