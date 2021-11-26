import React, { useState } from "react";
import axios from 'axios';

// TODO Only accept png, jpeg, jpg files. Need to validate this in frontend AND in Backend
// TODO Currently it says no file selected when selecting a file. Fix it.
// TODO Add storybook and style this component
const ImageUpload = () => {

    const [selectedFile, setSelectedFile] = useState<File>();
    const [previewSource, setPreviewSource] = useState<any | null>();
    
    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files === null) {
            return null;
        }
        const file = event.target.files[0];
        setSelectedFile(file);
        previewFile(file);
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedFile) return;
        uploadImage(selectedFile);
    };

    const uploadImage = (file:File) => {
        let encodedFile: (string | ArrayBuffer | null) = '';
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            // now the reader.result is the image in a base64 encoded string
            encodedFile = reader.result;
            console.log("encodedFile: ", encodedFile);
            // Post request to the ArtService
            await axios.post('http://localhost:7001/uplImage', {
                encodedFile
            });
        }
        // Reset the states after POST to service
        setPreviewSource('');
        setSelectedFile(undefined);
    };

    const previewFile = (file:File) => {
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
            />
            <button>Submit</button>
        </form>
        <div>
        {previewSource && (
            <img src={previewSource} alt="chosen" style={{height:'300px'}} />
        )}
        {selectedFile && (
            <div className="name">File name: {selectedFile.name}</div>
        )}
        {selectedFile && (
            <div className="type">File type: {selectedFile.type}</div>
        )}
        {selectedFile && (
            <div className="size">File size (in bytes): {selectedFile.size}</div>
        )}
        </div>
    </div>
}

export default ImageUpload;