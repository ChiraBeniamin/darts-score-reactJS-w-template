// ====REACT % REACT-ROUTER-DOM HOOKS====
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// ====COMPONENTS % MUI COMPONENTS====
import { Button, Container, MenuItem, TextField } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';

// ====SERVICES====
import create from '../../services/normal-games-service/post-normal-game';

const gameType = [101, 201, 301, 401, 501];
const NormalGameSetup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    let currentGame = null;

    const onSubmit = (data) => {
        currentGame = { ...data };
        if (currentGame) {
            create(currentGame.title, currentGame.pOne, currentGame.pTwo, currentGame.legs, currentGame.gameType)
                .then((res) => {
                    console.log(res);
                })
                .then(() => {
                    navigate(`${data.title}`);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <Container maxWidth="sm">
            <MainCard sx={{ paddingLeft: 3, paddingRight: 3 }} title="Normal Game Setup">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        error={errors.title?.type === 'required'}
                        {...register('title', { required: true })}
                        fullWidth
                        label="Game Title"
                        id="filled-start-adornment"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: 3 }}
                        error={errors.pOne?.type === 'required'}
                        {...register('pOne', { required: true })}
                        fullWidth
                        label="Player one"
                        id="filled-start-adornment"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: 3 }}
                        error={errors.pTwo?.type === 'required'}
                        {...register('pTwo', { required: true })}
                        fullWidth
                        label="Player two"
                        id="filled-start-adornment"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: 3 }}
                        error={errors.legs?.type === 'required'}
                        {...register('legs', { required: true })}
                        type="number"
                        fullWidth
                        label="Legs"
                        id="filled-start-adornment"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ marginTop: 3, marginBottom: 3 }}
                        error={errors.gameType?.type === 'required'}
                        {...register('gameType', { required: true })}
                        fullWidth={true}
                        id="outlined-select-currency"
                        select
                        type="number"
                        label="Game type"
                        defaultValue={gameType[4]}
                    >
                        {gameType.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <AnimateButton>
                        <Button type={'submit'} disableElevation size="large" variant="contained" color="secondary">
                            Start Game
                        </Button>
                    </AnimateButton>
                </form>
            </MainCard>
        </Container>
    );
};
export default NormalGameSetup;
