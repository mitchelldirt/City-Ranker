export default function SearchBar() {
    const formStyles = {
        display: 'flex'
    }

    return (
        <>
            <form style={formStyles}>
                <input type='text' placeholder='City, State Code, Country Code'></input>
                <button>Add</button>
            </form>
        </>
    )
}