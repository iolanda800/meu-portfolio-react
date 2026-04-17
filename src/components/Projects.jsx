import ProjetoCard from './ProjectCard';
import { meusProjetos } from './ProjectsData';

export default function Projetos() {
    return (
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-container">
                {meusProjetos.map((projeto) => (
                    <ProjetoCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}