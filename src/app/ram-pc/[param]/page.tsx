import React, { useState } from "react";
import { useParams } from "next/navigation";

const RamPageWithParams = () => {
  const [params, setParams] = useState("");
  const router = useParams();
  const [loading, setLoading] = useState(true);

  const kingston = [
    { id: "123", title: "HEHE" },
    {
      id: "456",
      title: "ssss",
    },
  ];

  return (
    <div className="text-white">
      <div>{loading ? <>Loading</> : <></>}</div>
      RAM PAGE
      <div>
        {params == "kingston" ? (
          <>
            {kingston.map((item, index) => {
              return <div key={item.id}>{item.title}</div>;
            })}
          </>
        ) : (
          <>NO KINGSTON</>
        )}{" "}
      </div>
    </div>
  );
};

export default RamPageWithParams;
