import { ArtList } from '../../components/ArtList/ArtList';
import { useAppSelector } from '../../store/hooks';

export const FavoriteArtListPage = () => {
    return (
        <main>
            <div className="container">
                <h1>Favorite artworks:</h1>
                <ArtList artList={useAppSelector((state) => state.favorites.arts)} />
            </div>
        </main>
    );
};
