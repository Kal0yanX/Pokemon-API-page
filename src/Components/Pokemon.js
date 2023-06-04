function Pokemon({ info }) {
    const info = info.map(pokemon => {
        return (
            //anytime you have to use mapping you have to have a unique key
            <li key={pokemon.name}>{pokemon.name}</li>
        )
    })

    return (
        <div>
            {info}
        </div>
    )
}

export default Gallery