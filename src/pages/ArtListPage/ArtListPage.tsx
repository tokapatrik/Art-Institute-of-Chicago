import { useEffect, useState } from 'react';
import { ArtListData } from '../../store/features/art/models';
import { ArtList } from '../../components/ArtList/ArtList';
import './style.css';

export function ArtListPage() {
    const [artData, setArtData] = useState<ArtListData | undefined>(undefined);
    const [dataUrl, setDataUrl] = useState<string>(
        'https://api.artic.edu/api/v1/artworks'
    );

    useEffect(() => {
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => setArtData(data))
            .catch((error) => console.log(error));
    }, [dataUrl]);

    if (!artData) {
        return <h1>Loading...</h1>;
    }

    return (
        <main>
            <div className="container">
                <h1>Artworks:</h1>
                <div className="pagination">
                    <button
                        onClick={() => {
                            setDataUrl(artData.pagination.prev_url);
                            setArtData(undefined);
                        }}
                        className={
                            !artData.pagination.prev_url ? 'disabled' : ''
                        }
                    >
                        Prev
                    </button>
                    {`${artData.pagination.current_page}/${artData.pagination.total_pages}`}

                    <button
                        onClick={() => {
                            setDataUrl(artData.pagination.next_url);
                            setArtData(undefined);
                        }}
                        className={
                            !artData.pagination.next_url ? 'disabled' : ''
                        }
                    >
                        Next
                    </button>
                </div>
                <ArtList artData={artData} />
            </div>
        </main>
    );
}
