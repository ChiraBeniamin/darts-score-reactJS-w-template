// ====REACT & REACT-ROUTER-DOM HOOKS====
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';

// ====COMPONENTS %MUI COMPONENTS====
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import GenericPlayerCard from './GenericPlayerCard';
import MainCard from 'ui-component/cards/MainCard';

// ====STYLES====
import { playerOneCard, playerTwoCard } from '../../../helpers/helpers';
import { SCORE_DISPLAY_STYLE } from '../../../store/cardStyles';

// ====SERVICES====
import getOne from '../../../services/normal-games-service/get-one-game';
import updateLegs from '../../../services/normal-games-service/patch-legs';
import updateScore from '../../../services/normal-games-service/patch-score';
import updateTurns from '../../../services/normal-games-service/patch-turns';

// ====OTHER====
import KEYBOARD_KEYS from '../../../store/keyboard-keys';
import PLAYERS from '../../../store/players';
import { useNavigate } from 'react-router-dom';
import deleteGame from '../../../services/normal-games-service/delete-normal-game';
import archive from '../../../services/archived-games-service/post-archived-game';
import { updateTurnIndex } from '../../../services/normal-games-service/patch-turns-index';

const PlayNormalGame = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const param = useParams().title.charAt(0).toUpperCase() + useParams().title.slice(1);
    const params = useParams().title;
    const [count, setCount] = useState(1);

    // TODO IMPORTED RESET USE IT AFTER INPUT OF THE SCORE    <============
    const { register, watch, reset } = useForm();
    const [game, setGame] = useState(null);
    let currentTurn = null;
    let score = watch('score');
    const handleClose = () => setModalOpen(false);
    const closeModal = () => {
        getData();
        setModalOpen(false);
        deleteGame(game._id)
            .then((r) => console.log(r))
            .catch((err) => console.error(err));
        navigate('/normal-game');
    };
    const archiveGame = () => {
        archive(game)
            .then((resp) => console.log(resp))
            .catch((err) => console.error(err));
        deleteGame(game._id)
            .then((r) => console.log(r))
            .catch((err) => console.error(err));
        setModalOpen(false);
        navigate('/archived-games');
    };
    const editTurnHandler = (e, turnIndex, player, turnsArr) => {
        let inputValue = parseInt(e.target.value);
        if (!inputValue) {
            inputValue = 0;
        }
        if (e.key === KEYBOARD_KEYS.ENTER) {
            if (player === PLAYERS.ONE) {
                turnsArr[turnIndex] = inputValue;
                updateTurns(game.title, PLAYERS.ONE, turnsArr)
                    .then(() => getData())
                    .catch((err) => console.error(err));
            } else {
                turnsArr[turnIndex] = inputValue;
                updateTurns(game.title, PLAYERS.TWO, turnsArr)
                    .then(() => getData())
                    .catch((err) => console.error(err));
            }
        }
    };

    const handleStartingTurns = () => {
        console.log('Im in handle starting turns');
        setCount(count + 1);
        if (initialStartTurn === 1) {
            // initialStartTurn = 2;
            localStorage.setItem('turn', JSON.stringify(2));
        } else {
            // initialStartTurn = 1;
            localStorage.setItem('turn', JSON.stringify(1));
        }
    };

    const handleTurn = () => {
        setCount(count + 1);
        if (game.turn === 1) {
            updateTurnIndex(2, params).then((res) => {
                console.log('res--->', res);
                getData();
            });
        } else {
            updateTurnIndex(1, params).then(() => getData());
        }
    };
    const ScoreDisplayer = () => {
        if (!score) {
            return <h1>0</h1>;
        } else {
            return <h1>{score}</h1>;
        }
    };
    const getData = () => {
        if (params) {
            getOne(params).then((res) => {
                if (res && res.data) {
                    setGame(res.data);
                    currentTurn = res.data.turn;
                }
            });
        }
    };

    useEffect(() => {
        getData();
        localStorage.setItem('turn', JSON.stringify(1));
    }, []);

    // ToDo THE OLD WAY, IT WORKED BUT GOTTA THINK HOW THE APP WORKS BETTER
    // useEffect(() => {
    //     setLoading(false);
    //     getData();
    // }, [count]);

    const bustScore = () => {
        if (currentTurn === 1) {
            updateScore(game, PLAYERS.ONE, 0)
                .then(() => getData())
                .catch((err) => console.log(err));
            handleTurn();
        } else {
            updateScore(game, PLAYERS.TWO, 0)
                .then(() => getData())
                .catch((err) => console.log(err));
            handleTurn();
        }
    };

    const onSubmit = (e) => {
        if (game) {
            let inputValue = parseInt(e.target.value);
            if (!inputValue) {
                inputValue = 0;
            }
            if (e.key === KEYBOARD_KEYS.ENTER) {
                if (inputValue > 180) return;
                if (game.turn === 1) {
                    if (inputValue === game.players.playerOne.score) {
                        updateLegs(game, PLAYERS.ONE, inputValue)
                            .then(() => getData())
                            .catch((err) => console.log(err));
                        if (game.players.playerOne.legs + 1 === game.gameLegs) {
                            setModalOpen(true);
                        }
                        handleStartingTurns();
                    } else {
                        updateScore(game, PLAYERS.ONE, inputValue)
                            .then(() => getData())
                            .catch((err) => console.log(err));
                        handleTurn();
                    }
                } else if (game.turn === 2) {
                    if (inputValue === game.players.playerTwo.score) {
                        updateLegs(game, PLAYERS.TWO, inputValue)
                            .then(() => getData())
                            .catch((err) => console.log(err));
                        if (game.players.playerTwo.legs + 1 === game.gameLegs) {
                            setModalOpen(true);
                        }
                        handleStartingTurns();
                    } else {
                        updateScore(game, PLAYERS.TWO, inputValue)
                            .then(() => getData())
                            .catch((err) => console.log(err));
                        handleTurn();
                    }
                }
                e.target.value = null;
            }
        }
    };
    if (!game && !currentTurn) {
        return <h1>Loading</h1>;
    } else
        return (
            <MainCard sx={{ paddingLeft: 3, paddingRight: 3, background: 'rgb(239,242,246)' }} title={`${param}`}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: 0 }}>
                    <GenericPlayerCard
                        editTurnHandler={editTurnHandler}
                        turn={game.turn}
                        data={game.players.playerOne}
                        playerCard={playerOneCard}
                        playerOneName={game.players.playerOne.name}
                        playerTwoName={game.players.playerTwo.name}
                    />
                    <div style={SCORE_DISPLAY_STYLE}>
                        <ScoreDisplayer />
                        <TextField
                            inputProps={{
                                min: 0,
                                max: 180
                            }}
                            placeholder={'Enter score'}
                            onKeyDown={onSubmit}
                            type="number"
                            maxRows={1}
                            {...register('score', {
                                min: 0,
                                max: 180,
                                maxLength: 3,
                                pattern: /^\d{1,3}$/
                            })}
                            fullWidth
                            label="Enter Score..."
                            id="filled-start-adornment"
                            variant="outlined"
                        />
                        <Button onClick={bustScore} sx={{ marginTop: 2 }}>
                            Bust
                        </Button>
                    </div>
                    <GenericPlayerCard
                        editTurnHandler={editTurnHandler}
                        turn={game.turn}
                        data={game.players.playerTwo}
                        playerCard={playerTwoCard}
                        playerOneName={game.players.playerOne.name}
                        playerTwoName={game.players.playerTwo.name}
                    />
                </div>
                <Modal
                    keepMounted
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4
                        }}
                    >
                        <Typography id="keep-mounted-modal-title" variant="h2" component="h2">
                            {`Player ${
                                game.players.playerOne.legs + 1 === game.gameLegs
                                    ? game.players.playerOne.name
                                    : game.players.playerTwo.name
                            } won the game!!!`}
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            Would you like to archive this game?
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={closeModal} sx={{ marginTop: 2 }}>
                                No
                            </Button>
                            <Button onClick={archiveGame} sx={{ marginTop: 2 }}>
                                Yes
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </MainCard>
        );
};

export default PlayNormalGame;
