import { signUpHandler } from "../../../lib/credentials";
import { client } from "../../../lib/sanity.server";

export default signUpHandler(client);
