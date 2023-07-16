import "./globals.css";
import Contexts from "../contexts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import fonts from "./fonts";

export const metadata = {
  manifest: "/manifest.json",
  title: "Movies Picker",
  description:
    "MoviesPicker is an online platfoExperience the ultimate movie and TV series discovery platform with our feature-rich movie picker application. Explore an extensive library of films and TV shows, complete with comprehensive details such as plot summaries, cast members, ratings, release dates, and genre classifications. Immerse yourself in the world of cinema as you delve into the captivating performances of talented actors and actresses. Enhance your viewing experience with a vast collection of video content, including trailers, behind-the-scenes footage, and memorable scenes. Uncover hidden gems and stay up-to-date with the latest releases, all in one convenient and user-friendly platform. Find your perfect movie or series with ease and embark on a cinematic journey like never before.rm designed to provide personalized movie recommendations based on individual preferences. Discovering the perfect movie to watch can be a daunting task, but with MoviesPicker, users can easily navigate through a vast selection of films and receive tailored suggestions. Our intelligent algorithm analyzes user preferences, genres, ratings, and other factors to curate a list of movies that match their tastes. Whether you are in the mood for action, romance, comedy, or something entirely different, MoviesPicker helps you make informed choices for your next movie night. Say goodbye to endless scrolling and embrace a personalized movie-watching experience with MoviesPicker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Contexts>
          <Sidebar />
          <Loading />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Contexts>
      </body>
    </html>
  );
}
