import { NextApiRequest, NextApiResponse } from "next";

export default function Preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.redirect(req.query.redirect as string);
}
