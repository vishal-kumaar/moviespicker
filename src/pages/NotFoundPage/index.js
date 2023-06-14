import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[calc(100vh-8rem)] w-screen">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold font-signika text-gray-800 mb-px">404</h1>
        <p className="text-xl font-roboto text-gray-600 mb-1">
          Oops! Page not found.
        </p>
        <p className="font-firasans text-base text-gray-500">
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <button
          className="mt-6 px-4 py-2 text-white bg-gradient-to-r from-yellow-500 to-purple-500 rounded-md shadow-md hover:from-yellow-600 hover:to-purple-600 font-poppins font-bold text-base"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
