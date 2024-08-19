import { useState } from 'react';

function ImageUploader() {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                console.log(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}
        </div>
    );
}

export default ImageUploader;