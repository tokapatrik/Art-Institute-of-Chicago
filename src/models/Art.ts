export interface Art {
    id: number;
    title: string;
    image_id: string;
    artist_title: string;
    artwork_type_title: string;
    classification_title: string;
}

export interface Pagination {
    current_page: number;
    limit: number;
    prev_url: string;
    next_url: string;
    total_pages: number;
}
