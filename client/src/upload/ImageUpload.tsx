import React, { useState } from "react";
import axios from 'axios';

const ImageUpload = () => {

    const [selectedFile, setSelectedFile] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState<any | null>('');

    const changeHandler = (event:any) => {
        const file = event.target.files[0];
        previewFile(file);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!selectedFile) return;
    };

    const previewFile = (file:any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const result = reader.result;
            setPreviewSource(result);
        }
    }
    
    return <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>Select file: </label>
            <input 
            type="file"
            name="image"
            onChange={changeHandler}
            value={fileInputState}
            />
            <button>Submit</button>
        </form>
        {previewSource && (
            <img src={previewSource} alt="chosen" style={{height:'300px'}} />
        )}
    </div>
}

export default ImageUpload;