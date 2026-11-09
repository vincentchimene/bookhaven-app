import { useGetBooksQuery } from "./api/bookApi";

function App() {
    const { data, isLoading, error } = useGetBooksQuery();
    console.log(data);
    if (isLoading) {
        return <p>Loading books...</p>;
    }
    if (error) {
        return <p>Failed to load books.</p>;
    }
    return (
        <div>
            <h1>BookHaven</h1>

            {data.results.map((book) => (
                <p key={book.id}>{book.title}</p>
            ))}
        </div>
    );
}

export default App;