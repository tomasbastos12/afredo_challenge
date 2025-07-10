import { redirect } from "next/navigation";
//Sempre que abrimos a app, aparece a home page
export default function RootRedirect() {
  redirect("/home");
}