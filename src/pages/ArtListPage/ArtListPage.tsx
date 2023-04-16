import { useEffect, useState } from 'react';
import { Art } from '../../models/Art';
import { Pagination } from '../../layout/Pagination/Pagination';
import { PaginationData } from '../../models/Pagination';
import { ArtList } from '../../components/ArtList/ArtList';
import './style.css';

export const ArtListPage = () => {
    const [artData, setArtData] = useState<{ data: Art[]; pagination: PaginationData } | undefined>(undefined);
    const [dataUrl, setDataUrl] = useState<string>('https://api.artic.edu/api/v1/artworks');

    useEffect(() => {
        fetch(dataUrl)
            .then((res) => res.json())
            .then((data) => setArtData(data))
            .catch((error) => console.log(error));
    }, [dataUrl]);
    console.log(artData);

    if (!artData) {
        return <h1>Loading...</h1>;
    }

    return (
        <main>
            <div className="container">
                <h1>Artworks:</h1>
                <form
                    className="search"
                    onSubmit={(event) => {
                        event.preventDefault;
                        setDataUrl(
                            `https://api.artic.edu/api/v1/artworks/search?q=${(event.target as HTMLFormElement).search.value}`
                        );
                        setArtData(undefined);
                    }}
                >
                    <input type="text" name="search" />
                    <button>Search</button>
                </form>
                <Pagination pagination={artData.pagination} setDataUrl={setDataUrl} setPageData={setArtData} />
                <ArtList artList={artData.data} />
            </div>
        </main>
    );
};
