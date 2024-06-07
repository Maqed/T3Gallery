import { db } from "@/server/db";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      Hello (Gallery)
      <div className="flex flex-wrap">
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={image.url}
                width={100}
                height={100}
                alt={image.name}
              />
              <h6>{image.name}</h6>
            </div>
          );
        })}
      </div>
    </main>
  );
}
