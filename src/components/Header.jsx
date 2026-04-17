export default function Header({ isDark, toggleTheme }) {
    return (
        <header>
            <h1>Meu Portifólio</h1>
            <nav>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li>
                        <button id="btn-tema" onClick={toggleTheme}>
                            {isDark ? "Claro" : "Escuro"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}