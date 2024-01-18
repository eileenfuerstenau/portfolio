import Image from "next/image";

export default function Header() {
  return (
    <Image src={"/aboutMe.svg"} width={1000} height={1000} alt="Page Header" />
  );
}
