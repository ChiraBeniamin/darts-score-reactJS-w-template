import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import PLAYERS from '../store/players';

const CustomMenuItem = ({ mainTurn, editTurns, index, turn, playerData, playerOneName }) => {
    const playerId = playerData.name === playerOneName ? 1 : 2;
    console.log(playerId);
    const { register, watch } = useForm();
    return (
        <MenuItem
            sx={{
                width: 60,
                marginTop: 1,
                padding: 0
            }}
            key={`${index} & ${turn}`}
        >
            <TextField
                onKeyDown={(e) => editTurns(e, index, playerId === 1 ? PLAYERS.ONE : PLAYERS.TWO, playerData.turns)}
                {...register(`turn ${index}`, {
                    pattern: /^\d{1,3}$/
                })}
                InputProps={{
                    style: {
                        textAlign: 'center',
                        padding: '5px 0px 5px 0px', // adjust the padding as desired
                        height: '35px' // adjust the height as desired
                    }
                }}
                variant="outlined"
                defaultValue={turn}
            />
        </MenuItem>
    );
};

export default CustomMenuItem;
