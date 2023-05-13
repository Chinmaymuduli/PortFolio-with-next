import Image from "next/image";
import React from "react";

function MyProject() {
  return (
    <div className="mx-auto mt-20 px-48">
      <div className="relative overflow-hidden pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase font-bold text-2xl text-primary">
          My Project
        </h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-leftToRight rounded-full bg-primary"></span>
        </span>
        {/* <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-hea">Skills</span> */}
      </div>
      <div className="flex ">
        <div className="w-1/2 relative ">
          <div className="border-2 rounded-full border-fuchsia-800 absolute left-0 top-0 h-14 w-14 flex items-center justify-center">
            <h2 className="p-3 font-bold">1</h2>
          </div>
          <div className="ml-20">
            <img src="./netflixClone.png" alt="img" className="w-96 h-96" />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-bold text-3xl">Movies Hub</p>
          <p className="">
            It is a movie details website! It is is dedicated to providing movie
            enthusiasts with information about their favorite films. With having
            an extensive details of movies, ranging from upcoming releases to
            popular classics. it has an easy-to-navigate interface that allows
            users to see trailer, title, genre, year and similar movies etc.
          </p>
          <div className="flex gap-4 mt-8">
            <p className="font-medium">TMDB Database</p>
            <p>Native Base</p>
            <p>Redux/Redux Toolkit</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold text-purple-800">Github Repo :-</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex mt-28 ">
        <div className="w-1/2">
          <p className="font-bold text-3xl">Ola 2.0</p>
          <p className="">
            Ola 2.0 is a mobile app for ride-sharing and cab booking services.
            It offers a user-friendly interface and a range of features such as
            real-time tracking, kilometer wise money calculation. The app is
            designed to provide a seamless and convenient experience for users,
            with improved performance and reliability.
          </p>
          <div className="flex gap-4 mt-8">
            <p className="font-medium">react-native-google-maps</p>
            <p>Native Base</p>
            <p>react-native-geolocation-service</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold text-purple-800">Github Repo :-</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </div>
        </div>
        <div className="w-1/2 relative ">
          <div className="border-2 rounded-full border-fuchsia-800 absolute right-0 top-0 h-14 w-14 flex items-center justify-center">
            <h2 className="p-3 font-bold">2</h2>
          </div>
          <div className="ml-20">
            <img src="./ola.png" alt="img" className="w-96 h-96" />
          </div>
        </div>
      </div>

      <div className="flex mt-28">
        <div className="w-1/2 relative ">
          <div className="border-2 rounded-full border-fuchsia-800 absolute left-0 top-0 h-14 w-14 flex items-center justify-center">
            <h2 className="p-3 font-bold">3</h2>
          </div>
          <div className="ml-20">
            <img src="./netflixClone.png" alt="img" className="w-96 h-96" />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-bold text-3xl">Chat App</p>
          <p className="">
            This app is a user-friendly application designed for instant
            messaging and communication between individuals. It allows users to
            exchange text messages in real-time. The app provides a seamless and
            secure messaging experience for its users.
          </p>
          <div className="flex gap-4 mt-8">
            <p className="font-medium">Socket io</p>
            <p>Native Base</p>
            <p>Mongodb</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold text-purple-800">Github Repo :-</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
