import { Router } from "express";
const router = Router();
router.post("/test", (req, res) => {
    const { Name, age } = req.body;
    return res.status(200).json({ Name, age });
});
export default router;
//# sourceMappingURL=test.routes.js.map