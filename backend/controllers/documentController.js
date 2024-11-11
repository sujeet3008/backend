import Document from  "../models/DocumentModel.js"


const uploadDocument = async (req, res) => {
    try {
        const newDocument = new Document({
            title: req.body.title,
            description: req.body.description,
            userId: req.user.id,
            filePath: req.file.path
        });
        await newDocument.save();
        res.status(201).json(newDocument);
    } catch (error) {
        res.status(500).json({ message: "Document upload failed" });
    }
};

const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find({ userId: req.user.id });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve documents" });
    }
};


export default {
    uploadDocument,
    getDocuments
};
