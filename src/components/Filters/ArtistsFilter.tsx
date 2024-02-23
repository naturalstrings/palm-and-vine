



function ArtistsFilter(props) {
        function onFilteredValueChanges(event) {
            
            props.filteredValueSelected(event.target.value)
        }
        return (
            <div className="artist-dropdown" >
                {/* <select name="chooseArtist" id="" onChange={onFilteredValueChanges}>
                    <option value="Andrew Carrier">Andrew Carrier</option>
                    <option value="Geno Delafose">Geno Delafose</option>
                    <option value="All Artists">All Artists</option>
                </select> */}
                <ul >
                    <li><a href="#">Andrew</a></li>
                    <li><a href="#">Geno</a></li>
                    <li><a href="#">Tony</a></li>
                    <li><a href="#">Michael</a></li>
                </ul>
            </div>
        )
    }

export default ArtistsFilter;