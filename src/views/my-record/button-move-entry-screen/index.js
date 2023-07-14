import { Box, Card, CardMedia, Grid } from "@mui/material";
// asset
import MyRecommend1 from "../../../assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "../../../assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "../../../assets/images/MyRecommend-3.jpg";
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
        <Grid container mt={8} mb={8} style={{textAlign: '-webkit-center'}}>
            {images.map((item) => (
                <Grid item xs={4}>
                    <Card sx={{ width: "400px" }}>
                        <div style={{ border: "20px solid #FFCC21", position: "relative" }}>
                            <CardMedia
                                component="img"
                                alt={item.alt}
                                image={item.img}
                                style={{ filter: "grayscale(1) brightness(60%)", height: "350px", position: "relative" }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                }}>
                                <p style={{ marginBottom: 0, fontSize: "xx-large", color: "#FFCC21" }}>{item.title}</p>
                                <p style={{ backgroundColor: "#FF963C", display: "inline-block", marginTop: 0 }}>{item.subTitle}</p>
                            </div>
                        </div>

                    </Card>
                </Grid>
            ))}

        </Grid>
    );
}


export default EntryScreen;
