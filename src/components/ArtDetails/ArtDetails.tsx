import { Art } from '../../models/Art';

interface ArtDetailsProps {
    artDetails: Art;
}

export function ArtDetails({ artDetails }: ArtDetailsProps) {
    return (
        <main>
            <div className="container artDetailss">
                <h1>{artDetails.title}</h1>
                <img
                    src={`https://www.artic.edu/iiif/2/${artDetails.image_id}/full/843,/0/default.jpg`}
                    alt={artDetails.title}
                />
                <ul>
                    <li>Artist: {artDetails.artist_title}</li>
                    <li>Artwork type: {artDetails.artwork_type_title}</li>
                    <li>Classification: {artDetails.classification_title}</li>
                </ul>
            </div>
        </main>
    );
}
