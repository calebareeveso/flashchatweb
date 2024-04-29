import { redirect } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Flashchat - Privacy Policy",
    openGraph: {
      title: "Flashchat - Privacy Policy",
      description: "Chat about important stuff - flashcards",
      images: [
        `https://res.cloudinary.com/dgdnihwti/image/upload/v1714403399/og_vxjag9.png`,
      ],
    },
  };
}

export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#FFFC00]">
      <div className="h-full py-10 items-center px-2">
        <div className="max-w-lg mx-auto text-center flex-grow"></div>
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 leading-loose">
          This Privacy Policy describes how [Your App Name] ("we," "us," or
          "our") collects, uses, and discloses your information when you use our
          chat application ("FlashChat").
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc pl-4 text-gray-700 leading-loose">
          <li>
            **Account Information:** When you create an account, we may collect
            information such as your username, email address, and profile
            picture (optional).
          </li>
          <li>
            **Usage Data:** We may collect information about how you use the
            App, such as the time and duration of your chats, the people you
            chat with, and any features you use. This information is used to
            improve the App and provide a better user experience.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-4 text-gray-700 leading-loose">
          <li>
            **To provide and maintain the App:** We use your information to
            operate and maintain the App, including allowing you to create an
            account, send and receive messages, and access features.
          </li>
          <li>
            **To improve the App:** We may use your information to improve the
            App and develop new features.
          </li>
          <li>
            **To comply with legal obligations:** We may use your information to
            comply with applicable laws and regulations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Disclosure of Your Information
        </h2>
        <p className="text-gray-700 leading-loose">
          We will not disclose your information to any third party except in the
          following limited circumstances:
        </p>
        <ul className="list-disc pl-4 text-gray-700 leading-loose">
          <li>
            **With your consent:** We may disclose your information to a third
            party with your prior consent.
          </li>
          <li>
            **To comply with legal obligations:** We may disclose your
            information to comply with applicable laws and regulations, or to
            respond to a court order, subpoena, or other legal process.
          </li>
          <li>
            **To protect our rights:** We may disclose your information to
            protect our rights, property, or safety, or the rights, property, or
            safety of others.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Choices</h2>
        <p className="text-gray-700 leading-loose">
          You can access, update, or delete your information through the
          settings within the App. You may also choose to deactivate your
          account at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Children's Privacy</h2>
        <p className="text-gray-700 leading-loose">
          Our App is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          are a parent or guardian and you learn that your child has provided us
          with personal information, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 leading-loose">
          If you have any questions about this Privacy Policy, please contact us
          at: hello@calebareeveso.com
        </p>
      </div>
    </main>
  );
}
