class Author {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Book {
    private title: string;
    private author: Author;
    private available: boolean;

    constructor(title: string, author: Author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author.getName();
    }

    isAvailable(): boolean {
        return this.available;
    }

    borrowBook(): void {
        if (this.available) {
            this.available = false;
            console.log(`El libro "${this.title}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.title}" no está disponible en este momento.`);
        }
    }

    returnBook(): void {
        if (!this.available) {
            this.available = true;
            console.log(`El libro "${this.title}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.title}" ya está disponible.`);
        }
    }
}


const author = new Author('J.K. Rowling');
const harryPotterBook = new Book('Harry Potter and the Sorcerer\'s Stone', author);

console.log(`Información del Libro:`);
console.log(`Título: ${harryPotterBook.getTitle()}`);
console.log(`Autor: ${harryPotterBook.getAuthor()}`);
console.log(`Disponible: ${harryPotterBook.isAvailable() ? 'Sí' : 'No'}`);

harryPotterBook.borrowBook();
console.log(`Después de prestar el libro: Disponible: ${harryPotterBook.isAvailable() ? 'Sí' : 'No'}`);

harryPotterBook.returnBook();
console.log(`Después de devolver el libro: Disponible: ${harryPotterBook.isAvailable() ? 'Sí' : 'No'}`);
