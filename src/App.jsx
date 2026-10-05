import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LazyMotion, domMax, MotionConfig } from 'motion/react';
import Navbar from './components/common/nav-bar/Navbar.jsx';
import Home from './pages/Home.jsx';
import GlobalParticles from './components/common/particles/GlobalParticles.jsx';
import GlobalGrid from './components/common/grid/GlobalGrid.jsx';
import { AppReadyContext } from './context/AppReadyContext.js';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { Preloader } from './components/Preloader/Preloader.jsx';
import './App.css';

function App() {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        const hasHash = !!window.location.hash;
        if (hasHash) {
            window.history.replaceState(null, '', window.location.pathname);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <ThemeProvider>
            <LazyMotion features={domMax} strict>
                <MotionConfig reducedMotion="user">
                    <Router>
                        <div className="App" style={{ minHeight: '100vh', backgroundColor: '#000' }}>
                            {!isPreloaderDone && (
                                <Preloader onComplete={() => setIsPreloaderDone(true)} />
                            )}

                            <GlobalGrid />
                            <GlobalParticles />

                            <AppReadyContext.Provider value={isPreloaderDone}>
                                <main
                                    className={`app-content ${isPreloaderDone ? 'is-ready' : 'is-loading'}`}
                                    style={{
                                        opacity: isPreloaderDone ? 1 : 0,
                                        transition: 'opacity 0.8s ease-in-out',
                                        pointerEvents: isPreloaderDone ? 'auto' : 'none'
                                    }}
                                >
                                    <Navbar />
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="*" element={<Navigate to="/" replace />} />
                                    </Routes>
                                </main>
                            </AppReadyContext.Provider>
                        </div>
                    </Router>
                </MotionConfig>
            </LazyMotion>
        </ThemeProvider>
    );
}

export default App;