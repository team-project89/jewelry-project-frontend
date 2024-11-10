import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";

function CustomFileUploader({ existingImages = [], onChange, maxFiles = 4 }) {
    const [imagePreviews, setImagePreviews] = useState(existingImages);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        if (files.length + imagePreviews.length > maxFiles) {
            toast.error(`You can upload a maximum of ${maxFiles} images.`);
            return;
        }

        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        
        const updatedImages = [...imagePreviews, ...newImages];
        setImagePreviews(updatedImages);
        onChange(updatedImages.map(img => img.file));
    };

    const handleDeleteImage = (index) => {
        const updatedImages = imagePreviews.filter((_, i) => i !== index);
        setImagePreviews(updatedImages);
        onChange(updatedImages.map(img => img.file));
    };

    return (
        <div>
            <div className="image-previews">
                {imagePreviews.map((img, index) => (
                    <div key={index} className="image-container">
                        <img src={img.preview || img} alt={`Preview ${index + 1}`} />
                        <button onClick={() => handleDeleteImage(index)}>Delete</button>
                    </div>
                ))}
            </div>
            {imagePreviews.length < maxFiles && (
                <div>
                    <input
                        type="file"
                        onChange={handleFileSelect}
                        multiple
                        accept="image/*"
                        hidden
                        id="file-upload"
                    />
                    <button onClick={() => document.getElementById('file-upload').click()}>
                        {imagePreviews.length > 0 ? "Add More Images" : "Upload Images"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default CustomFileUploader;
