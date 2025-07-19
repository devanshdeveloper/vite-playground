import { Card } from "@heroui/card";
import { div as Div } from "framer-motion/client";

export default function FileCard({ icon, name, onClick }) {
  return (
    <Div className="flex flex-col justify-center items-center">
      <Card
        onPress={onClick}
        isPressable
        isHoverable
        className="flex items-center justify-center w-full aspect-square rounded-4xl border-[1px] border-gray-300"
      >
        {icon}
      </Card>
      <div className="text-xs lg:text-sm">{name}</div>
    </Div>
  );
}
