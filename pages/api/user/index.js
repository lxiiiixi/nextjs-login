import dbConnect from "../../../mongodb/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case "GET":
            try {
                const users = await User.find({}) /* find all the data in our database */
                console.log(users);
                res.status(200).json({ success: true, data: users })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case 'POST':
            try {
                const userName = req.body.userName
                const isExist = await User.find({ userName })
                if (!isExist.length) {
                    const user = await User.create(
                        req.body
                    ) /* create a new model in the database */
                    res.status(200).json({ success: true, data: user })
                } else {
                    res.status(201).json({ success: false, error: "User already exists" })
                }
            } catch (error) {
                res.status(400).json({ success: false, error })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break
    }
}