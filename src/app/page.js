"use client";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.post("/api/response");
        console.log(response);

        if (response.status === 200) {
          setReceivedMessage(response.data.receivedMessage);
        } else {
          console.error("Error Occurred", response.statusText);
        }
      } catch (error) {
        console.log("An error occurred", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-white text-black flex items-center justify-center">
        <p className="text-lg font-bold text-black">Loading message...</p>
      </div>
    );
  }
  const handleClick = async () => {
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

  const handleTrigger = async () => {
    try {
      const response = await axios.get("/api/lists");

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
      <button onClick={handleClick}>Get API key</button>
      <button onClick={handleTrigger}>Get Lists</button>
      <h1 className="text-lg font-bold text-black">Message Display</h1>
      <p className="mt-4 text-black">Received Message: {receivedMessage}</p>
    </div>
  );
}
