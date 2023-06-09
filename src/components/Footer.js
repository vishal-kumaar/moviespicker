import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1919] text-white text-center py-6">
      <p className="font-poppins font-semibold mb-3 text-sm">Copyright &copy; MoviePicker 2023</p>
      <p className="font-mono text-sm">
        This website is based on {" "}
        <a href="https://developer.themoviedb.org/reference/intro/getting-started" target="_blank" rel='noreferrer' className="underline text-sky-400 font-semibold">
          TMDB API
        </a>
      </p>
    </footer>
  );
}
