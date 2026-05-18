import Image from "next/image";

export function AfricaImage() {
  return (
    <div
      data-africa-image
      className="relative mb-16 aspect-[16/9] overflow-hidden bg-navy max-md:mb-12 max-md:aspect-[4/3]"
      aria-hidden="true"
    >
      <Image
        src="/images/africa-landscape.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
