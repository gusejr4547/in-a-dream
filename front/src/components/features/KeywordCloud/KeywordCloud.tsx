import React from "react";
import WordCloud from "react-d3-cloud";
import { useKeywordStatistics } from "../../../hooks/useKeywordStatistics";

interface Item {
  keyword: string;
  count: number;
}

interface KeywordCloudProps {
  startDate: string;
  endDate: string;
}

const KeywordCloud: React.FC<KeywordCloudProps> = ({ startDate, endDate }) => {
  const response = useKeywordStatistics(startDate, endDate);
  const data = response.data?.data?.data;

  const transformData = (data: Item[]) =>
    data?.map(({ keyword, count }) => ({ text: keyword, value: count * 100 }));

  const words = transformData(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#eee",
        width: "70%",
        height: "70%",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <WordCloud
        data={words}
        font="Times"
        fontWeight="bold"
        spiral="rectangular"
        padding={10}
      />
    </div>
  );
};

export default KeywordCloud;
