function Gallery({ data }) {
    const display = data.map(pokemon => {
        return (
            //anytime you have to use mapping you have to have a unique key
            <li key={pokemon.name}>{pokemon.name}</li>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery