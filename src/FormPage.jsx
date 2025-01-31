import React, { useState, useEffect } from "react";
import styles from "./FormPage.module.css"; // Importera CSS-modulen

const FormPage = () => {
  // State för formulärfält
  const [formData, setFormData] = useState({
    email: "",
    week: "",
    progress: "",
    plans: "",
    problems: "",
  });

  // Hämta query params från URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prevData) => ({
      ...prevData,
      email: params.get("email") || "",
      week: params.get("week") || "",
    }));
  }, []);

  // Hantera input-ändringar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Hantera formulärskick
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  // Återställ formuläret
  const handleReset = () => {
    setFormData((prevData) => ({
      ...prevData,
      progress: "",
      plans: "",
      problems: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Report</h2>

      <label className="block mb-2">
        Progress:
        <textarea
          name="progress"
          placeholder="Enter progress"
          value={formData.progress}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Plans:
        <textarea
          name="plans"
          placeholder="Enter Plans"
          value={formData.plans}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Problems:
        <textarea
          name="problems"
          placeholder="Enter Problems"
          value={formData.problems}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      {/* Dolda fält */}
      <input type="hidden" name="email" value={formData.email} />
      <input type="hidden" name="week" value={formData.week} />

      <div className="mt-4 flex gap-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
        <button type="button" onClick={handleReset} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormPage;
