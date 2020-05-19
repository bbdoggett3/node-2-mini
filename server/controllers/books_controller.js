let books = [];
let id = 0;

module.exports = {
    //create
    create: (req, res) => {
        const {title, author} = req.body;
        let newBook = {
            id: id,
            title: title,
            author: author
        };

        books.push(newBook);
        id++;
        res.status(200).send(books)

    },

    //read
    read: (req, res) => {
        res.status(200).send(books)
    },

    //update
    update: (req, res) => {
        let index = null;

        books.forEach((book, i) => {
            if(book.id === Number(req.params.id)) index = i;
        });
        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        };
        res.status(200).send(books);
    },

    //delete
    delete: (req, res) => {
        let index = null;

        books.forEach((book, i) => {
            if(book.id === Number(req.params.id)) index = i;
        });

        books.splice(index, 1);
        res.status(200).send(books);
    }
};