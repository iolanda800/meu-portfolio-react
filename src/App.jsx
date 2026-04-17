import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projects';
import Contato from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main>
                <Sobre />
                <Projetos />
                <Contato />
            </main>
            <Footer />
        </>
    );
}