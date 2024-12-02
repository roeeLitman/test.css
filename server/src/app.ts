import express, { Request, Response } from "express";
import cors from "cors";
import connectToMongo from "./config/db";
import MilitaryForm from './models/MilitaryForm'




const PORT = process.env.PORT || 300;

export const app = express();

connectToMongo();

app.use(express.json());
app.use(cors());

app.post("/api/military-forms",async (req: Request, res: Response)=>{
    try {            
        const newFrom = await new MilitaryForm(req.body)
        await newFrom.save()
        res.status(200).json(newFrom.id)

    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }    
})

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

app.listen(PORT, () => {
  console.log(`Server started, Visit "http://localhost:${PORT}"`);
});
