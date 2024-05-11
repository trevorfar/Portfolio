"use client";
import { z } from "zod";
import GapComponent from "./Seperator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from 'next/link'
import {
  CheckCircleOutline,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Button } from "./ui/button";

const socials = [
  {
    link: "https://github.com/trevorfar",
    icon: <GitHub className="text-3xl" />,
  },
  {
    link: "https://www.linkedin.com/in/trevor-farias",
    icon: <LinkedIn className="text-3xl" />,
  },
];

const ContactMe = () => {
  const [isSent, setIsSent] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const SignupSchema = z.object({
    firstName: z.string().min(2).max(20),
    email: z.string().email(),
    message: z.string().optional(),
  });

  type SignUpSchemaType = z.infer<typeof SignupSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = () => {
    form.current &&
      emailjs
        .sendForm("service_z4d79lc", "template_ghtmqcq", form.current, {
          publicKey: "l6BOOI6MLClOROGZe",
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

  const emailSent = () => {
    setIsSent((current) => !current);
    setTimeout(() => {
      setIsSent((current) => !current);
    }, 3000);
  };

  const variant = "text-gray-500 border-b-2 mb-2";

  return (
    <GapComponent>
      <section id="contact" className="overflow-hidden">
        <h3 className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">Contact</span>
        </h3>
        <div className="flex flex-col md:flex-row gap-y-8 space-y-6 md:space-y-0 md:space-x-12 justify-evenly md:items-start flex-wrap">
          <form
            className="flex flex-col w-80"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
          >
            <h3 className="text-4xl py-10 font-semibold text-center">
              <span className="border-b-4 border-primary-main">Message me?</span>
            </h3>
            <label htmlFor="firstName" className={variant}>
              Your name
            </label>
            <input
              {...register("firstName")}
              name="firstName"
              className="bg-gray-50 mb-3"
            />
            {errors.firstName && (
              <p className="text-red-500">{`${errors.firstName.message}`}</p>
            )}

            <label htmlFor="email" className={variant}>
              Your E-mail
            </label>

            <input
              {...register("email")}
              name="email"
              className="bg-gray-50 mb-5"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
            <label htmlFor="message" className={variant}>
              Message
            </label>
            <textarea
              {...register("message")}
              name="message"
              className=" bg-gray-50 rounded w-full 
          resize-none outline-none p-4 overflow-auto mb-2"
              rows={5}
            />

            {isSent && (
              <div className="bg-[#D4EDDA] text-[#558B7A] rounded-lg py-3 px-3">
                <CheckCircleOutline /> Your Message has been sent.
              </div>
            )}
            <Button
              id="submit-btn"
              disabled={isSubmitting}
              type="submit"
              className="w-1/2 items-center flex 
          justify-center mx-auto"
            >
              Send
            </Button>
          </form>
          <form>
            <h3 className="text-4xl py-10 font-semibold text-center">
              <span className="border-b-4 border-primary-main">My Info</span>
            </h3>
            <div className="flex flex-col w-80">
              <p className={variant}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit, consequatur porro dolores est animi repellat cupiditate
                ducimus commodi aspernatur, molestias quia illum quis expedita
                dolorum quam repellendus fuga numquam! Recusandae?
              </p>
              <div className="text-gray-500 border-b-2 mb-2 pb-2">
                <div className="flex flex-row">
                  <p className="font-bold pr-1">Email: </p>
                  <p>trevor_farias@yahoo.com</p>
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-1">Location: </p>
                  <p>Victoria, BC, Canada</p>
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-1">Phone: </p>
                  <p>(+1) 236.562.3646</p>
                </div>
              </div>
              <div className="flex flex-row mx-auto justify-center items-center">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  {social.icon}
                </Link>
              ))}
              </div>
            </div>
          </form>
        </div>
      </section>
    </GapComponent>
  );
};

export default ContactMe;
