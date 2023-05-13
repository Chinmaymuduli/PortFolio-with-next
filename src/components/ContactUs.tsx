import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const ContactUs = () => {
  return (
    <div className="mx-auto mt-20 px-48">
      <div className="relative overflow-hidden pb-14 text-center">
        <h2 className="relative z-10 mb-2 uppercase font-bold text-2xl text-primary">
          Get In Touch
        </h2>
        <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20">
          <span className="absolute left-0 top-0 inline-block h-full w-1.5 animate-leftToRight rounded-full bg-primary"></span>
        </span>
        {/* <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-hea">Skills</span> */}
      </div>
      <div className="bg-blue-100 px-4 rounded-md">
        <div className="">
          <div className="flex gap-7 py-4">
            <input
              placeholder="Enter your subject"
              className="border-2 w-1/2 outline-none rounded-sm h-12 px-2"
            />
            <input
              placeholder="Enter your email"
              className="w-1/2 border-2 outline-none rounded-sm h-12 px-2"
              type="email"
            />
          </div>
          <div className="">
            <textarea
              placeholder="Enter your message"
              className="border-2 w-full h-40 outline-none rounded-sm px-2"
            />
          </div>
          <div className="flex items-end justify-end py-3">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="bg-violet-900"
            >
              Send Mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
