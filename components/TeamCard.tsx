import Image from "next/image";

export default function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-sky-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-bold text-ink">{name}</h3>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  );
}
