import { useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';
import { Art, ArtListData } from '../../store/features/art/models';
import './style.css';

interface ArtListProps {
    artData: ArtListData;
}

export function ArtList({ artData }: ArtListProps) {
    const navigate = useNavigate();
    return (
        <ul className="artList">
            {artData.data.map((art: Art) =>
                ArtListItem(art, artData.config.iiif_url, navigate)
            )}
        </ul>
    );
}

function ArtListItem(art: Art, iiif_url: string, navigate: NavigateFunction) {
    return (
        <li
            key={art.id}
            onClick={() => {
                navigate(`art/${art.id}`);
            }}
        >
            <h4>{art.title}</h4>
            <div className="imageFrame">
                <img
                    src={`${iiif_url}/${art.image_id}/full/200,/0/default.jpg`}
                    alt={art.title}
                />
            </div>
        </li>
    );
}
