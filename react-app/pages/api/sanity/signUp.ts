import { signUpHandler } from "next-auth-sanity";
import { client } from "../../../lib/sanity.server";

export default signUpHandler(client);
