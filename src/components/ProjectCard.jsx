export default function ProjetoCard({ projeto }) {
    return (
        <article className="card-projeto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
            </a>
        </article>
    );
}