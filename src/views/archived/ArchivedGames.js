// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import getArchived from '../../services/archived-games-service/get-archived-games';
import ArchivedGameCard from './ArchivedGameCard';
import { Box } from '@mui/material';

const ArchivedGames = () => {
    const [archivedGames, setArchivedGames] = useState([]);
    useEffect(() => {
        getArchived()
            .then((resp) => {
                if (resp && resp.data) {
                    console.log(resp);
                    setArchivedGames(resp.data);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <MainCard title="Basic Archived Games" secondary={'i seem to work as well, put a component here'}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {archivedGames.map((game, index) => (
                    <ArchivedGameCard game={game} key={`${index} & ${game._id}`}></ArchivedGameCard>
                ))}
            </Box>
        </MainCard>
    );
};

export default ArchivedGames;
