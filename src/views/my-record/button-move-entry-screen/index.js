import { Box, Card, CardMedia, Grid } from "@mui/material";
// asset
import MyRecommend1 from "../../../assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "../../../assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "../../../assets/images/MyRecommend-3.jpg";
// css
import '../../../css/fontFamily.css';
import './entryScreen.css';
const images = [
    {
        img: MyRecommend1,
        alt: "MyRecommend-1",
        title: "BODY RECORD",
        subTitle: "自分のカラダの記録"
    },
    {
        img: MyRecommend2,
        alt: "MyRecommend-2",
        title: "MY EXERCISE",
        subTitle: "自分の運動の記録"
    },
    {
        img: MyRecommend3,
        alt: "MyRecommend-3",
        title: "MY DIARY",
        subTitle: "自分の日記"
    },

]
const EntryScreen = () => {
    return (
        <Grid container mt={8} mb={8} className="text-center">
            {images.map((item) => (
                <Grid item xs={4}>
                    <Card sx={{ width: "400px" }}>
                        <div  className="relative-div border-solid" >
                            <CardMedia
                                component="img"
                                alt={item.alt}
                                image={item.img}
                                id="card-media"
                                classes="relative-div"
                            />
                            <div
                                id="absolute-div">
                                <p className="inter" id="title">{item.title}</p>
                                <p className="noto-sans-jp" id="sub-title">{item.subTitle}</p>
                            </div>
                        </div>

                    </Card>
                </Grid>
            ))}

        </Grid>
    );
}


export default EntryScreen;
