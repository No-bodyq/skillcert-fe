import Image from "next/image";

interface CourseProps {
  title: string;
  description: string;
  image: string;
}

export default function Course(props: CourseProps) {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full flex flex-col gap-2 sm:gap-3">
        <div className="w-full aspect-video relative">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <h1 className="text-sm sm:text-base md:text-[16px]/7 font-medium">
            {props.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base/6 font-normal text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
