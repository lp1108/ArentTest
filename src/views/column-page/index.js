import { Box } from "@mui/material";
// project imports
import Recommended from "./recommended";
import ColumnArticle from "./articles";
import CustomButton from "../../ui-component/CustomButton";
// context
import { useColumnRecord } from "../../context/column-record-context";
const MyRecord = () => {
    const {getMoreColumnRecord} = useColumnRecord();
    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx={20}>
                <Recommended />
                <ColumnArticle/>
            </Box>
            <CustomButton text={'自分の日記をもっと見る'} handleClick={getMoreColumnRecord} />
        </>

    );
}


export default MyRecord;
