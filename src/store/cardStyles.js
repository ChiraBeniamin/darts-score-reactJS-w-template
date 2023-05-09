export const BASIC_CARD_STYLE = {
    p: 2.25,
    width: '400px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    alignItems: 'center'
};
export const CARD_STYLE_TURN = {
    ...BASIC_CARD_STYLE,
    border: '4px solid rgb(70,150,236)', //blue.primary
    padding: '12px'
};

export const CARD_CONTENT = {
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 2,
    alignContent: 'center',
    lineHeight: 2
};

export const SCORE_DISPLAY_STYLE = {
    paddingLeft: 3,
    paddingRight: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px'
};

export const PLAYERS_STATS_CONTAINER = {
    display: 'flex',
    width: '310px',
    justifyContent: 'space-evenly',
    marginTop: 25,
    marginBottom: 25
};
