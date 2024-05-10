"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Link from "next/link";

const socials = [
  {
    github: "https://github.com/trevorfar",
    icon: <GitHub className="text-3xl" />,
  },
  {
    linkedin: "www.linkedin.com/in/trevor-farias",
    icon: <LinkedIn className="text-3xl" />,
  },
  {},
];

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().optional(),
});

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const emailSent = () => {
    setIsSent((current) => !current);
    setTimeout(() => {
      setIsSent((current) => !current);
    }, 3000);
  };

  const sendEmail = (e: any) => {
    form.current &&
      emailjs
        .sendForm("service_0uvn7ai", "template_e0dowwb", form.current, {
          publicKey: "dKYNURZMld6SibCCd",
        })
        .then(
          () => {
            emailSent();
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };
  return (
    <section id="contact">
      <div className="bg-white justify-center mx-auto aspect-square rounded-xl py-4 w-1/3 border">
        <form
          onSubmit={(e) => {
            console.log("hey");
            e.preventDefault();
          }}
          className="flex flex-col"
        >
          <input
            className="m-6 border border-black"
            placeholder="Enter your email"
          ></input>
          <textarea
            className="m-6 border border-black aspect-square overflow-auto"
            placeholder="Leave a message"
          ></textarea>
        </form>
      </div>
    </section>
  );
};
export default Contact;
