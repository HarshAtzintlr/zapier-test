"use client";
import axios from "axios";

export default function Home() {
  const handlePostClick = async () => {
    try {
      const response = await axios.get("/api/zapier");

      if (response.status === 200) {
        console.log("Everything Worked Fine", response.data);
      } else {
        console.error("Error Occurred", response.statusText);
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black flex items-center justify-center flex-col">
      <h1 className="text-lg font-bold text-black">Zapier Testing</h1>
      <button onClick={handlePostClick}>Get API Key</button>
    </div>
  );
}
