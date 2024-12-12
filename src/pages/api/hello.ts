// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  // res: NextApiResponse<Data>,
) {
  // res.status(200).json({ name: "John Doe" });
  try {
    const response = await (await fetch("https://dummyjson.com/users")).json();
    // console.log("response => ", response);
    res.status(200).json({ ...response });
  } catch (err) {
    console.log("error => ", err);
    res.status(500).json({ "error" : err });
  }
}
