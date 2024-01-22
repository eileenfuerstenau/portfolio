import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      <Image src={"/header.svg"} width={1000} height={1000} alt="Page Header" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-70% h-70%">
        <Image
          src={"/me.png"}
          width={1000}
          height={1000}
          alt="Picture of Author"
        />
      </div>
    </div>
  );
}
