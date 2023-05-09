import myLogo from '../../../assets/images/myLogo.png';
// material-ui

// project imports

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    return (
        // <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
        <img style={{ width: '130px' }} src={myLogo} alt={'Logo'}></img>
        // <Logo />
        // </ButtonBase>
    );
};

export default LogoSection;
