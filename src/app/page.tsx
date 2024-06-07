import Image from "next/image";

const mockURLs = [
  "https://utfs.io/f/9b8af7d7-9176-4df5-a2ba-83c9c00bc418-j74yup.jpg",
  "https://utfs.io/f/54f97d46-039f-4419-8707-584fd4ea3791-mvaig3.jpg",
];

export default function HomePage() {
  return (
    <main>
      Hello (Gallery)
      <div className="flex flex-wrap">
        {mockURLs.map((image) => {
          return (
            <Image
              key={image}
              src={image}
              width={100}
              height={100}
              alt="Image"
            />
          );
        })}
      </div>
    </main>
  );
}
