import { Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    socialHandle: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("socialHandle", formData.socialHandle);
    Array.from(formData.images).forEach((file) => data.append("images", file));

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: data,
      });
      await response.json();
      alert("Upload Data Successfully");
      setFormData({ name: "", socialHandle: "", images: [] });
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("Failed to upload data.");
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Upload Your Details
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="socialHandle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Social Media Handle
          </label>
          <input
            type="text"
            id="socialHandle"
            name="socialHandle"
            value={formData.socialHandle}
            onChange={handleInputChange}
            placeholder="@username"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
        <div className="flex justify-center items-center">

        <Link
          to="/dashboard"
          className="mt-3 hover:text-blue-500 text-center hover:underline text-lg font-semibold"
        >
          Go to Dashboard
        </Link>
        </div>
      </form>
    </div>
  );
};

export default App;
