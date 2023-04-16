import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';
import { Art } from '../../models/Art';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { addFavorite, deleteFavorite } from '../../store/features/favorites/favoritesSlice';
import { AppDispatch } from '../../store/store';
import './style.css';

interface ArtListProps {
    artList: Art[];
}

export const ArtList = ({ artList }: ArtListProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const favoritArts = useAppSelector((state) => state.favorites.arts);

    return (
        <ul className="artList">
            {artList.map((art: Art) =>
                ArtListItem(
                    art,
                    favoritArts.some((obj) => obj.id === art.id),
                    navigate,
                    dispatch
                )
            )}
        </ul>
    );
};

const ArtListItem = (art: Art, isFavorit: boolean, navigate: NavigateFunction, dispatch: AppDispatch) => {
    return (
        <li
            key={art.id}
            onClick={() => {
                navigate(`/art/${art.id}`);
            }}
        >
            <div className="artListItemHeader">
                <h4>{art.title}</h4>
                {!isFavorit ? (
                    <AiOutlineStar
                        className="favoritIcon"
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch(addFavorite(art));
                        }}
                    />
                ) : (
                    <AiFillStar
                        className="favoritIcon"
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch(deleteFavorite(art.id));
                        }}
                    />
                )}
            </div>
            <div className="imageFrame">
                <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`} alt={art.title} />
            </div>
        </li>
    );
};
