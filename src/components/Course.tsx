import Image from "next/image";

interface CourseProps {
  title: string;
  description: string;
  image: string;
}

export default function Course(props: CourseProps) {
  return (
    <div className="w-60 h-full overflow-hidden">
      <div className="w-60 h-full flex flex-col gap-1">
        <Image
          src={props.image}
          alt={props.title}
          width={240}
          height={135}
          className="w-60 h-[135px] object-cover rounded-2xl"
        />
        <div className="w-full h-full flex flex-col gap-1">
          <h1 className="text-[16px]/7 font-medium">{props.title}</h1>
          <p className="text-base/6 font-normal text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
