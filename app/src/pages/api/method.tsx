import { NextApiRequest, NextApiResponse } from "next";

interface IShopping {
  name: string;
  address: string;
  phone: string;
}

export default function Method(
  req: NextApiRequest,
  res: NextApiResponse<IShopping[]>
) {
  return res.status(200).json([
    {
      name: "Via Shopping",
      address: "Floripa centro",
      phone: "48988334573",
    },
    {
      name: "Via Catarina",
      address: "Palhoça centro",
      phone: "48988334573",
    },
  ]);
}
