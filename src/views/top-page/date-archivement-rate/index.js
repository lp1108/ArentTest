import { Card, CardMedia } from '@mui/material';
// project imports
import d01 from '../../../assets/images/d01.jpg';
import dateRate from '../../../assets/images/dateRate.svg';
const DateArchivement = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    alt="Date－Achievement rate"
                    height="350px"
                    width="540px"
                    image={d01}
                    style={{ position: 'relative', zIndex: "1" }}

                />
                
                <img src={dateRate} alt="Date Rate" height="200px" width="200px" 
                style={{position: 'absolute', zIndex: "2", top: "19%", left: "38%", transform: "translate(-50%, -50%);"}} 
                />
            </div>
        </>
    );
}


export default DateArchivement;
