import { z } from "zod";
import GapComponent from "./Seperator";

const ContactMe = () => {
  const SignupSchema = z.object({
    firstName: z.string().min(2).max(20),
    email: z.string().email(),
    message: z.string().optional(),
  });

  type SignUpSchemaType = z.infer<typeof SignupSchema>;

  return (
    <GapComponent>
    <form className="flex flex-col">
      <input placeholder="Name" />

      <input placeholder="You@example.com" />
      <textarea placeholder="Please leave a message"></textarea>
    </form>
    </GapComponent>
  );
};

export default ContactMe;
