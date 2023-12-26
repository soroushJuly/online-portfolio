"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import Image from "next/image";


export type FormData = {
  name: string,
  email: string,
  message: string,
};

const  Contact: FC = () => {
  const { register, handleSubmit } = useForm();
  const pp = process.env.MY_EMAIL;

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <section id="contact" className="Section flex flex-col md:grid md:grid-cols-2">
      <h3 className="Title col-span-2 h-min">Contact Me</h3>
      {/* <p className=" col-span-2 md:text-xl mb-6 text-center">I’ll be happy to help.</p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 md:mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-base font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4 md:mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-base font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4 md:mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-base font-medium text-black"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 py-2 md:py-3 px-5 md:px-8 text-base mb-4 md:mb-0 font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-col md:border-l-2 md:border-solid border-gray-400 md:ml-6 md:pl-4">
        <div className="mb-6">
          <h4 className=" text-xl md:text-2xl underline mb-3">My Email:</h4>
          <span className=" text-lg md:text-xl">soroushdevelope@gmail.com</span>
        </div>
        <div>
          <h4 className=" text-xl md:text-2xl underline mb-3">Links:</h4>
          <ul className="flex">
            <li className="mr-3 hover:bg-orange-200">
              <a href="http://www.linkedin.com/in/soroush-july-jolai" target="blank">
                <Image alt="LinkedIn Icon" width="50" height="50" src="/linkedin.svg" className="w" />
              </a>
            </li>
            <li className="hover:bg-orange-200 rounded-full">
              <a href="https://github.com/soroushJuly" target="blank">
                <Image alt="Github Icon" width="50" height="50" src="/github.svg" />
              </a>
            </li>
          </ul>

        </div>
        {/* <div>TODO: Download resume</div> */}
      </div>
    </section>
  );
}

export default Contact;
