import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Art } from '../../models/Art';
import './style.css';

export function ArtDetailsPage() {
    const { id } = useParams();
    const [artDetails, setArtDetails] = useState<{ data: Art } | undefined>(
        undefined
    );

    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
            .then((res) => res.json())
            .then((data) => setArtDetails(data));
    }, []);

    if (!artDetails) {
        return <h1>Loading...</h1>;
    }

    return (
        <main>
            <div className="container artDetailss">
                <h1>{artDetails.data.title}</h1>
                <img
                    src={`https://www.artic.edu/iiif/2/${artDetails.data.image_id}/full/843,/0/default.jpg`}
                    alt={artDetails.data.title}
                />
                <ul>
                    <li>Artist: {artDetails.data.artist_title}</li>
                    <li>Artwork type: {artDetails.data.artwork_type_title}</li>
                    <li>
                        Classification: {artDetails.data.classification_title}
                    </li>
                </ul>
            </div>
        </main>
    );
}
