import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      <Image
        src={"/header.svg"}
        priority
        width={1000}
        height={1000}
        alt="Page Header"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-3/5">
        <Image
          src={"/me.png"}
          alt="Picture of Author"
          className="object-contain !relative"
          layout="fill"
        />
      </div>
    </div>
  );
}
