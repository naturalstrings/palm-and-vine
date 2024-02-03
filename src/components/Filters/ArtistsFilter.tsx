



function ArtistsFilter(props) {
        function onFilteredValueChanges(event) {
            
            props.filteredValueSelected(event.target.value)
        }
        return (
            <div className="filter-area">
                <select name="chooseArtist" id="" onChange={onFilteredValueChanges}>
                    <option value="Andrew Carrier">Andrew Carrier</option>
                    <option value="Geno Delafose">Geno Delafose</option>
                    <option value="All Artists">All Artists</option>
                </select>
            </div>
        )
    }

export default ArtistsFilter;