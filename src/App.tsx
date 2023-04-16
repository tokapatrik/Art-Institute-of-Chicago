import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/global.css';
import { Header } from './common/Header/Header';
import { ArtListPage } from './pages/ArtListPage/ArtListPage';
import { ArtDetailsPage } from './pages/ArtDetailsPage/ArtDetailsPage';
import './assets/global.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/art/:id" element={<ArtDetailsPage />} />
                    <Route path="/" element={<ArtListPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
