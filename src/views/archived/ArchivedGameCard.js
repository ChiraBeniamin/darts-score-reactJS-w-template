import React from 'react';
import { LightCardWrapper } from '../../helpers/styles';
import Skeleton from '@mui/material/Skeleton';
import { Box, Typography } from '@mui/material';

const ArchivedGameCard = ({ game }) => {
    const playerOne = game.players.playerOne;
    const playerTwo = game.players.playerTwo;
    const GameWinner = () => {
        if (playerOne.legs > playerTwo.legs) {
            return <Typography sx={{ color: 'white' }} variant={'h4'}>{`${playerOne.name} has won the game!`}</Typography>;
        } else return <Typography sx={{ color: 'white' }} variant={'h4'}>{`${playerTwo.name} has won the game!`}</Typography>;
    };

    if (!game) return <Skeleton></Skeleton>;
    return (
        <LightCardWrapper
            sx={{
                minWidth: 300,
                margin: '10px',
                color: 'white',
                ':hover': {
                    background: 'rgb(67,155,223)'
                }
            }}
            border={false}
            content={false}
        >
            <Box sx={{ margin: 3 }}>
                <Typography sx={{ color: 'white' }} variant={'h2'}>
                    {game.title}
                </Typography>
                <GameWinner></GameWinner>
            </Box>
        </LightCardWrapper>
    );
};

export default ArchivedGameCard;
