import perfil from '../img/iolanda.jpeg';

export default function Sobre() {
    return (
        <section id="sobre">
            <h2>Sobre Mim</h2>
            <h2>Ola, Eu sou Iolanda!</h2>
            <img src={perfil} alt="Foto de Neuzinete Mello" />
            <p>Sou estudante de tecnologia em Sistemas para Internet e apaixonada por desenvolvimento web.</p>
        </section>
    );
}