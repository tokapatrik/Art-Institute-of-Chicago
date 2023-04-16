import { Art, ArtData } from '../../store/features/art/models';

interface ArtDetailsProps {
    artDetails: ArtData;
}

export function ArtDetails({ artDetails }: ArtDetailsProps) {
    const art: Art = artDetails.data;

    return (
        <main>
            <div className="container artDetailss">
                <h1>{art.title}</h1>
                <img
                    src={`${artDetails.config.iiif_url}/${art.image_id}/full/843,/0/default.jpg`}
                    alt={art.title}
                />
                <ul>
                    <li>Artist: {art.artist_title}</li>
                    <li>Artwork type: {art.artwork_type_title}</li>
                    <li>Classification: {art.classification_title}</li>
                </ul>
            </div>
        </main>
    );
}
