
import express from "express"
import {login} from "../controllers/userController.js";
const router = express.Router();
import verifyLogin from "../auth.js"
import  getDocuments  from "../controllers/documentController.js";
import  uploadDocument  from "../controllers/documentController.js";
import multer from "multer";  
import path from "path";


router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log("Received Login Data:", { email, password });
  
    const isLoginValid = await verifyLogin(email, password);
  
    if (isLoginValid) {
      return res.json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });




  // Setup file upload storage using Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Store files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Store files with a unique name
    }
});

const upload = multer({ storage });


router.post("/upload", upload.single("file"), uploadDocument);

router.get("/", getDocuments);









export default router;
