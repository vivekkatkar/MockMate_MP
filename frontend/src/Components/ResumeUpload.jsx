import React, { useState } from 'react';

export function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const email = localStorage.getItem("email"); // Get email from local storage

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a PDF file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);
    formData.append('email', email);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('PDF uploaded successfully!');
      } else {
        setUploadStatus('Error uploading PDF.');
      }
    } catch (err) {
      setUploadStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="w-1/2 max-w-xl bg-[#111827] rounded-xl shadow-lg p-6">
      <h3 className="text-xl text-white font-bold mb-4">Upload Resume</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          onChange={handleFileChange}
          accept="application/pdf"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          required
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Upload
        </button>
      </form>
      {uploadStatus && <p className="mt-4 text-green-600">{uploadStatus}</p>}
    </div>
  );
}
