
import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = file.originalname.split('.').pop();
        cb(null, "image-" + uniqueSuffix + '.' + ext);
    },
});

const upload = multer({
    storage: storage,
});

export default upload;