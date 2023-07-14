import { Button, Grid } from "@mui/material";

const CustomButton = ({ text, handleClick }) => {
    return (
        <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
                <Button variant="outlined" className="noto-sans-jp " style={{
                    width: "70%",
                    height: "50px",
                    backgroundImage: "linear-gradient(#FF963C, #FFCC21)",
                    color: "white",
                    marginTop: "20px",
                    marginBottom: "60px"
                }} onClick={handleClick}>{text}</Button>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>

    );
}

export default CustomButton;
