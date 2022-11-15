import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className=" bg-gray-200">
        <Head>
          <title>Facebook</title>
        </Head>

        <Header />
        <main className="flex">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      </div>
    );
  }
  return <Login />;
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}
