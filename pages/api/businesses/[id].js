import { getBusinessById } from "@/services/service";

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await getBusinessById(id);

  res.status(200).json({ status: 200, data });
}
