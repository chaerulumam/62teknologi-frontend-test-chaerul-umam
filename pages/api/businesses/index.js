import { searchBusiness } from "../../../services/service";

export default async function handler(req, res) {
    const {query} = req;
    const data = await searchBusiness(query)

    res.status(200).json({status: 200, data})
}
