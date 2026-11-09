function BookCard({ book }) {
    const authorNames = book.authors.length > 0
        ? book.authors.map((author) => author.name).join(", ")
        : "Unknown Author";

    return (
        <article>
            <img
                src={book.cover_image}
                alt={book.title}
            />

            <h2>{book.title}</h2>

            <p>{authorNames}</p>

            <p>{book.download_count.toLocaleString()} downloads</p>
        </article>
    );
}

export default BookCard;