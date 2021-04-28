import { useState } from "react";
const initialState = [
  "Date",
  "Product",
  "Size (US)",
  "Website",
  "Price",
  "Status",
];
const TableHeader = (props) => {
  const [headers] = useState(initialState);
  return (
    <thead className="bg-primary">
      <tr>
        {headers.map((header,i) => (
          <th key={i} scope="col" className="col text-sm whitespace-nowrap">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
