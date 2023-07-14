import { Grid } from "@mui/material";
// project import
import { useColumnRecord } from "../../../context/column-record-context";
// css
import '../../../css/fontFamily.css';
import './articles.css';
const ColumnArticle = () => {
    const {columnRecord} = useColumnRecord()
    return (
        <Grid container>
            {columnRecord.map((item, index) => (
                <Grid item xs={3} mb={4}>
                    <div className="relative-div">
                        <img src={item.img} alt={index} width="380px" height="330px" />
                        <div className="inter" id="noted-label-text">{item.notedLabelText}</div>
                        <div className="relative-div noto-sans-jp">
                            <p id="article-title">{item.title}</p>
                            <span id="article-sub-title">{item.subTitle}</span>
                        </div>
                    </div>
                </Grid>
            ))}
        </Grid>

    );
}


export default ColumnArticle;
