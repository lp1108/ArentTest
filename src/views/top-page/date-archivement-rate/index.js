import { CardMedia } from '@mui/material';
// project imports
import d01 from '../../../assets/images/d01.jpg';
import dateRate from '../../../assets/images/dateRate.svg';
// css
import './dateArchivementRate.css'
const DateArchivement = () => {
    return (
        <div style={{ position: 'relative' }}>
            <CardMedia
                component="img"
                alt="Date－Achievement rate"
                id="img-date-archivement"
                image={d01}

            />
            <img src={dateRate} alt="Date Rate" id='img-date-rate' />
        </div>
    );
}

export default DateArchivement;
