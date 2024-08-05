export default function TableFilterOptions({ data, setFilters}) {
    const regions = Array.from (new Set(data.map((item) => item.region)));
    const models = Array.from (new Set(data.map((item) => item.model)));

    const handleChangeSelection = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div>
            <form>
                <label>Filter : Region </label>
                <select id="region" onChange={handleChangeSelection}>
                    <option value="all">All</option>
                    {regions.map((region) => {
                        return (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        );
                    })}
                </select>{" "}
                <label>Filter : Model </label>
                <select id="model" onChange={handleChangeSelection}>
                    <option value="all">All</option>
                    {models.map((model) => {
                        return (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        );
                    })}
                </select>
            </form>
        </div>
    );
} 
    
