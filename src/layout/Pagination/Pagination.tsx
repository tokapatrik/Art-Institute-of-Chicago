import { PaginationData } from './models';

export interface PaginationDataProps {
    pagination: PaginationData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPageData: (newValue: any) => void;
    setDataUrl: (newValue: string) => void;
}

export const Pagination = ({
    pagination,
    setDataUrl,
    setPageData,
}: PaginationDataProps) => {
    return (
        <div className="pagination">
            <button
                onClick={() => {
                    if (pagination.prev_url) {
                        setDataUrl(pagination.prev_url);
                        setPageData(undefined);
                    }
                }}
                className={!pagination.prev_url ? 'disabled' : ''}
            >
                Prev
            </button>
            {`${pagination.current_page}/${pagination.total_pages}`}
            <button
                onClick={() => {
                    if (pagination.next_url) {
                        setDataUrl(pagination.next_url);
                        setPageData(undefined);
                    }
                }}
                className={!pagination.next_url ? 'disabled' : ''}
            >
                Next
            </button>
        </div>
    );
};
