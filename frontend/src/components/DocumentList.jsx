import React, { useState, useEffect } from "react";
import { API } from "../helpers/index";

const DocumentList = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({ title: "", amount: "" });

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await fetch(API.getDocuments.url);
                const data = await response.json();
                setDocuments(data);
            } catch (error) {
                console.error("Error fetching documents:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDocuments();
    }, []);

    // Filter documents based on title and amount
    const filteredDocuments = documents.filter(doc =>
        doc.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        doc.amount.toString().includes(filter.amount)
    );

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Documents</h2>

            {/* Filter Section */}
            <div className="mb-6">
                <input
                    type="text"
                    className="border p-2 rounded-md"
                    placeholder="Filter by Title"
                    value={filter.title}
                    onChange={(e) => setFilter({ ...filter, title: e.target.value })}
                />
                <input
                    type="text"
                    className="border p-2 rounded-md ml-4"
                    placeholder="Filter by Amount"
                    value={filter.amount}
                    onChange={(e) => setFilter({ ...filter, amount: e.target.value })}
                />
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDocuments.map((document) => (
                        <div key={document._id} className="p-4 bg-white shadow-md rounded-md">
                            <h3 className="text-xl font-semibold">{document.title}</h3>
                            <p>{document.description}</p>
                            <p>Location: {document.location}</p>
                            <p>Amount: ${document.amount}</p>
                            <a href={document.filePath} className="text-blue-500" download>
                                Download File
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DocumentList;
