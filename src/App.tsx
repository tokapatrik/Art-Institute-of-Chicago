import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/global.css';
import { Header } from './layout/Header/Header';
import { ArtListPage } from './pages/ArtListPage/ArtListPage';
import { ArtDetailsPage } from './pages/ArtDetailsPage/ArtDetailsPage';
import { FavoriteArtListPage } from './pages/FavoriteArtListPage/FavoriteArtListPage';
import './assets/global.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ArtListPage />} />
                    <Route path="/art/:id" element={<ArtDetailsPage />} />
                    <Route
                        path="/favorites"
                        element={<FavoriteArtListPage />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
