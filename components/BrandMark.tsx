import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      src="/czame-logo-header.png"
      alt="CZAME"
      width={320}
      height={64}
      priority
      unoptimized
    />
  );
}