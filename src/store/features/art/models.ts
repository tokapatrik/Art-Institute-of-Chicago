import { Url } from 'url';

export interface Art {
    id: number;
    title: string;
    image_id: string;
    artist_title: string;
    artwork_type_title: string;
    classification_title: string;
}

export interface ArtData {
    config: {
        iiif_url: string;
    };
    data: Art;
    info: object;
}

export interface ArtListData {
    config: {
        iiif_url: string;
    };
    data: Array<Art>;
    info: object;
    pagination: Pagination;
}

export interface ArtState {
    ArtListData: ArtListData;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface Pagination {
    current_page: number;
    limit: number;
    prev_url: string;
    next_url: string;
    total_pages: number;
}

export {};
