import { useState } from "react";
import { uploadFile } from "../firebase/storage";

export default function useUpload() {
  const [uploading, setUploading] = useState(false);

  const upload = async (file, path) => {
    setUploading(true);
    const url = await uploadFile(file, path);
    setUploading(false);
    return url;
  };

  return { upload, uploading };
}
