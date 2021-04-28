import { useState } from "react";
import Label from "../../UI/Label";
const initialState = [
  {
    id: "1",
    date: "22 Feb 2021",
    product: "Jordan 11 Retro Jubilee",
    size: "9.0",
    website: "Footlocker UK",
    price: "$211",
    status: "success",
  },
  {
    id: "2",
    date: "22 Feb 2021",
    product: "Jordan 6 Retro Carmine (2021)",
    size: "10.0",
    website: "Footlocker UK",
    price: "$252",
    status: "fail",
  },
  {
    id: "3",
    date: "22 Feb 2021",
    product: "Jordan 11 Retro Jubilee",
    size: "9.0",
    website: "Footlocker UK",
    price: "$211",
    status: "success",
  },
  {
    id: "4",
    date: "22 Feb 2021",
    product: "Jordan 6 Retro Carmine (2021)",
    size: "10.0",
    website: "Footlocker UK",
    price: "$252",
    status: "fail",
  },
  {
    id: "5",
    date: "22 Feb 2021",
    product: "Jordan 11 Retro Jubilee",
    size: "9.0",
    website: "Footlocker UK",
    price: "$211",
    status: "success",
  },
  {
    id: "6",
    date: "22 Feb 2021",
    product: "Jordan 6 Retro Carmine (2021)",
    size: "10.0",
    website: "Footlocker UK",
    price: "$252",
    status: "fail",
  },
  {
    id: "7",
    date: "22 Feb 2021",
    product: "Jordan 11 Retro Jubilee",
    size: "9.0",
    website: "Footlocker UK",
    price: "$211",
    status: "success",
  },
  {
    id: "8",
    date: "22 Feb 2021",
    product: "Jordan 6 Retro Carmine (2021)",
    size: "10.0",
    website: "Footlocker UK",
    price: "$252",
    status: "fail",
  },
  
];
const TableBody = () => {
  const [orders] = useState(initialState);

  return (
    <tbody className="bg-dark divide-y divide-gray-200">
      {orders.map((order) => (
        <tr key={order.id}>
          <td className="px-6 py-6 whitespace-nowrap ">{order.date }</td>
          <td className="px-6 py-6 whitespace-nowrap">{order.product}</td>
          <td className="px-6 py-6 whitespace-nowrap">{order.size}</td>
          <td className="px-6 py-6 whitespace-nowrap">{order.website}</td>
          <td className="px-6 py-6 whitespace-nowrap">{order.price}</td>
          <td className="px-6 py-6 whitespace-nowrap"><Label variant ={order.status === "success" ? "success":"failure"} >
          {order.status}    </Label></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
