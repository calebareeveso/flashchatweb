import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Flashchat - By Caleb",
    openGraph: {
      title: "Flashchat - By Caleb",
      description: "Chat about important stuff - flashcards",
      images: [
        `https://res.cloudinary.com/dgdnihwti/image/upload/v1714403399/og_vxjag9.png`,
      ],
    },
  };
}

export default function Home() {
  // flashchatapp
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FFFC00]">
      <div className="z-10 relative h-[70vh] flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 ">
        <Image
          className="relative"
          src="/next.svg"
          alt="flashchat Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
