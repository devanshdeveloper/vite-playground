import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Progress } from "@heroui/progress";
export default function ProgressLayout({ text = "Please Wait..." }) {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 flex items-center justify-center dark text-foreground bg-background">
      <div className="w-[min(1000px,80vw)] flex flex-col items-center gap-5">
        <div
          className={`${text.length > 20 ? `text-lg` : `text-2xl`} text-center`}
        >
          {text}
        </div>
        <div className="max-w-md">
          <Progress size="sm" isIndeterminate={true} aria-label="Loading..." />
          <Button
            showAnchorIcon
            as={Link}
            href="https://github.com/heroui-inc/heroui"
            variant="solid"
          >
            Button Link
          </Button>
        </div>
      </div>
    </div>
  );
}
