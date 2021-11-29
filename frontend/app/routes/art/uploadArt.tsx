export default function UploadArt() {
    return (
        <div>
            <p>Upload your art</p>
            <form method="post">
                <div>
                    <label>
                        Select File: <input type="file" name="image" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">Upload</button>
                </div>
            </form>
        </div>
    );
}