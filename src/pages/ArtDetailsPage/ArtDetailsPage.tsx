import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Art } from '../../models/Art';
import { ArtDetails } from '../../components/ArtDetails/ArtDetails';
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

    return <ArtDetails artDetails={artDetails.data} />;
}
