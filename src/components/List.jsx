import { useState } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";

const List = ({ women }) => {
    const [filters, setFilters] = useState({
        country: "",
        field: ""
    });

    // Obtener valores únicos para los selects
    const countries = [...new Set(women.map(w => w.country).filter(Boolean))];
    const fields = [...new Set(women.map(w => w.field).filter(Boolean))];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredWomen = women.filter(w =>
        (!filters.country || w.country === filters.country) &&
        (!filters.field || w.field === filters.field)
    );

    return (
        <div>
            <Filters
                countries={countries}
                fields={fields}
                selected={filters}
                onChange={handleChange}
            />

            {filteredWomen.length === 0 ? (
                <p>No se encontraron resultados con los filtros seleccionados.</p>
            ) : (
                filteredWomen.map(woman => (
                    <ListItem key={woman.id} woman={woman} />
                ))
            )}
        </div>
    );
};

export default List;
