import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from '../../../config';
// asset
import arentLogo from '../../../assets/logo/logo.svg';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({size}) => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={arentLogo} alt="logo" width={size} />
    </ButtonBase>
);

export default LogoSection;
