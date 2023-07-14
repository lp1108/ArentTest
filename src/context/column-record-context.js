import { useState, useContext, createContext } from "react";
// asset
import column1 from "../assets/images/column-1.jpg";
import column2 from "../assets/images/column-2.jpg";
import column3 from "../assets/images/column-3.jpg";
import column4 from "../assets/images/column-4.jpg";
import column5 from "../assets/images/column-5.jpg";
import column6 from "../assets/images/column-6.jpg";
import column7 from "../assets/images/column-7.jpg";
import column8 from "../assets/images/column-8.jpg";
const ColumnRecordContext = createContext();
const columnData = [
    {
        img: column1,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column2,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column3,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column4,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column5,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column6,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column7,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
    {
        img: column8,
        notedLabelText: "2021.05.17 23:25",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        subTitle: "#魚料理  #和食  #DHA"
    },
]
const columnDataAdded = [ {
    img: column5,
    notedLabelText: "2021.05.17 23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA"
},
{
    img: column6,
    notedLabelText: "2021.05.17 23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA"
},
{
    img: column7,
    notedLabelText: "2021.05.17 23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA"
},
{
    img: column8,
    notedLabelText: "2021.05.17 23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    subTitle: "#魚料理  #和食  #DHA"
}]
export const ColumnRecordProvider = ({ children }) => {
    const [columnRecord, setColumnRecord] = useState(columnData);
    const getMoreColumnRecord = () => {
        const result = columnRecord.concat(columnDataAdded);
        setColumnRecord(result);
    }
    const value = { columnRecord, getMoreColumnRecord }
    return <ColumnRecordContext.Provider value={value}>{children}</ColumnRecordContext.Provider>
}

export const useColumnRecord = () => {
    const context = useContext(ColumnRecordContext);
    if (typeof context === "undefined") throw new Error("useAuth must be used within a ColumnRecordProvider");
    return context;
}
