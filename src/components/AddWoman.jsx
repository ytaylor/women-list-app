import { useState } from "react";
import '../styles/AddForm.scss';

const AddWoman = ({ onAdd }) => {
    const [form, setForm] = useState({
        full_name: "",
        birth_date: "",
        death_date: "",
        country: "",
        field: "",
        bio: "",
        photo_url: "",
        achievements: [{ title: "", description: "", year: "" }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAchievementChange = (index, field, value) => {
        const updated = [...form.achievements];
        updated[index][field] = value;
        setForm({ ...form, achievements: updated });
    };

    const addAchievement = () => {
        setForm({
            ...form,
            achievements: [...form.achievements, { title: "", description: "", year: "" }]
        });
    };

    const removeAchievement = (index) => {
        const updated = form.achievements.filter((_, i) => i !== index);
        setForm({ ...form, achievements: updated });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.full_name || !form.country || !form.field) {
            alert("Faltan campos obligatorios.");
            return;
        }
        onAdd(form);
        setForm({
            full_name: "",
            birth_date: "",
            death_date: "",
            country: "",
            field: "",
            bio: "",
            photo_url: "",
            achievements: [{ title: "", description: "", year: "" }]
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <h2>Añadir nueva mujer</h2>

            <label>Nombre completo*</label>
            <input type="text" name="full_name" value={form.full_name} onChange={handleChange} required />

            <label>Fecha de nacimiento</label>
            <input type="date" name="birth_date" value={form.birth_date} onChange={handleChange} />

            <label>Fecha de fallecimiento</label>
            <input type="date" name="death_date" value={form.death_date} onChange={handleChange} />

            <label>País*</label>
            <input type="text" name="country" value={form.country} onChange={handleChange} required />

            <label>Área de influencia*</label>
            <input type="text" name="field" value={form.field} onChange={handleChange} required />

            <label>Biografía</label>
            <textarea name="bio" value={form.bio} onChange={handleChange}></textarea>

            <label>URL de la foto</label>
            <input type="text" name="photo_url" value={form.photo_url} onChange={handleChange} />

            <h3>Logros</h3>
            {form.achievements.map((ach, index) => (
                <div key={index} className="achievement">
                    <input
                        type="text"
                        placeholder="Título"
                        value={ach.title}
                        onChange={(e) => handleAchievementChange(index, "title", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={ach.description}
                        onChange={(e) => handleAchievementChange(index, "description", e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Año"
                        value={ach.year}
                        onChange={(e) => handleAchievementChange(index, "year", e.target.value)}
                    />
                    <button type="button" onClick={() => removeAchievement(index)}>Eliminar</button>
                </div>
            ))}
            <button type="button" onClick={addAchievement}>+ Añadir logro</button>

            <button type="submit">Guardar</button>
        </form>
    );
};

export default AddWoman;
