import React, { useState } from "react";
import { API } from "../helpers/index";

const UploadDocument = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        amount: "",
        file: null
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append("title", formData.title);
        formDataObj.append("description", formData.description);
        formDataObj.append("location", formData.location);
        formDataObj.append("amount", formData.amount);
        formDataObj.append("file", formData.file);

        try {
            const response = await fetch(API.uploadDocument.url, {
                method: API.uploadDocument.method,
                body: formDataObj,
            });

            const data = await response.json();
            if (response.ok) {
                alert("Document uploaded successfully");
                setFormData({ title: "", description: "", location: "", amount: "", file: null });
            } else {
                setErrorMessage(data.message || "Upload failed");
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Upload a Document</h2>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                    required
                ></textarea>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                    required
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="border p-2 rounded-md w-full"
                    required
                />
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="border p-2 rounded-md"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Upload Document
                </button>
            </form>
        </div>
    );
};

export default UploadDocument;
