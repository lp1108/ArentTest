import { useState, useContext, createContext } from "react";
// asset
const DiaryRecordContext = createContext();
const diaryData = [
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
        dateTime: "2021.05.21   23:25",
        content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
]
const diaryDataAdded = [{
    dateTime: "2021.05.21   23:25",
    content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
},
{
    dateTime: "2021.05.21   23:25",
    content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
},
{
    dateTime: "2021.05.21   23:25",
    content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
},
{
    dateTime: "2021.05.21   23:25",
    content: "私の日記の記録が一部表示されます.テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
},]
export const DiaryRecordProvider = ({ children }) => {
    const [diaryRecord, setDiaryRecord] = useState(diaryData);
    const getMoreDiaryRecord = () => {
        const result = diaryRecord.concat(diaryDataAdded);
        setDiaryRecord(result);
    }
    const value = { diaryRecord, getMoreDiaryRecord }
    return <DiaryRecordContext.Provider value={value}>{children}</DiaryRecordContext.Provider>
}

export const useDiaryRecord = () => {
    const context = useContext(DiaryRecordContext);
    if (typeof context === "undefined") throw new Error("useAuth must be used within a DiaryRecordProvider");
    return context;
}
