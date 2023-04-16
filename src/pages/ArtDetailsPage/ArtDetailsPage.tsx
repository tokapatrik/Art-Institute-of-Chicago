import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArtData } from '../../store/features/art/models';
import { ArtDetails } from '../../components/ArtDetails/ArtDetails';
import './style.css';

export function ArtDetailsPage() {
    const { id } = useParams();
    const [artDetails, setArtDetails] = useState<ArtData | undefined>(
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

    return <ArtDetails artDetails={artDetails} />;
}
