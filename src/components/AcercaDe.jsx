import '../styles/Acerca.scss'

const AcercaDe = () => {
    return (
        <div className="page">
            <h2>Acerca de <span className="brand">Black Heroines</span></h2>
            <p>
                <strong>Black Heroines</strong> es una plataforma educativa  dedicada a visibilizar a mujeres negras que han marcado la historia en todo el mundo. Desde activistas y científicas hasta artistas, líderes políticas y defensoras de derechos, cada historia aquí representa una contribución invaluable a la humanidad.
            </p>

            <h3>¿Por qué esta plataforma?</h3>
            <ul>
                <li>🌍 Porque muchas figuras clave de la historia han sido ignoradas o silenciadas.</li>
                <li>📚 Porque el reconocimiento es parte de la justicia histórica.</li>
                <li>🌟 Porque estas mujeres son referentes poderosos para las generaciones presentes y futuras.</li>
            </ul>

            <h3>Nuestros objetivos</h3>
            <ul>
                <li>💡 Difundir conocimiento accesible y riguroso.</li>
                <li>🤝 Inspirar procesos educativos antirracistas y feministas.</li>
                <li>📣 Dar voz a historias que merecen ser contadas.</li>
            </ul>

            <h3>Contribuye</h3>
            <p>
                ¿Conoces a una mujer negra cuyo legado debería ser parte de esta colección? Visita la sección <strong>“Añadir mujer”</strong> y comparte su historia.
            </p>

            <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                Esta es una iniciativa sin fines de lucro con fines educativos y de justicia social.
            </p>
        </div>
    );
};

export default AcercaDe;
