import { Router } from "express";
import { getProperties } from "../controllers/getProperties";

export const router = Router();

router.get("/properties", async (req, res) => {
  try {
    const properties = await getProperties();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
