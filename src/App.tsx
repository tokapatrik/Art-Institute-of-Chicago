import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { fetchArt } from './features/Arts';
import './App.css';

function App() {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchArt());
    }, [dispatch]);

    const arts = useSelector((state: any) => state.arts.data);
    const isLoading = useSelector((state: any) => state.arts.status);

    return (
        <div>
            {isLoading === 'loading' ? (
                <CircularProgress />
            ) : (
                <div>
                    <h1>asd</h1>
                </div>
            )}
        </div>
    );
}

export default App;
