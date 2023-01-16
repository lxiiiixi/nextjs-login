import dbConnect from "../../../mongodb/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            const { userName, userPwd } = req.body
            const existList = await User.find({ userName, userPwd })
            if (existList.length) {
                res.status(200).json({ success: true, data: existList })
            } else {
                res.status(201).json({ success: false, error: "Wrong password or user does not exist" })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break
    }
}