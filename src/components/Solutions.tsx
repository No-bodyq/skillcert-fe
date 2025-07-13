import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Scroll, UsersRound } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verifiable Credentials",
    description:
      "Our Web3-powered certificates ensure authenticity and prevent fraud.",
  },
  {
    icon: Scroll,
    title: "Micro-Credentials",
    description:
      "Earn smaller, focused credentials that demonstrate specific skills.",
  },
  {
    icon: UsersRound,
    title: "Community",
    description:
      "Connect with a global network of learners, educators, and institutions.",
  },
];

export default function Solutions() {
  return (
    <div className="w-full h-full flex flex-col gap-5 py-10">
      <h1 className="text-[22px]/7 font-bold">Why Choose SkillCert?</h1>
      <div className="w-full h-full flex flex-col gap-4 py-5">
        <h1 className="text-4xl/11 tracking[-1px] font-extrabold">
          Our Unique Features
        </h1>
        <p className="text-base/6 font-normal max-w-180">
          SkillCert offers a range of benefits for students, universities, and
          tutors, making it the ideal platform for lifelong learning and
          professional development. Explore our unique features with interactive
          2D character sketches providing additional insights.
        </p>
        <div className="w-full h-full grid grid-cols-3 gap-4 py-5">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="w-full h-full bg-white rounded-xl"
            >
              <CardHeader>
                <feature.icon className="w-6 h-6" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-[-10px]">
                <p className="text-base/6 font-normal text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
