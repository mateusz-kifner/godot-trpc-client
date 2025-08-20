import { AspectRatio } from "@/components/ui/aspect-ratio";

function TestAspectRatio() {
  return (
    <div className="h-36 max-h-3xl min-h-36 w-36 min-w-36 max-w-3xl resize overflow-auto border border-red-500 border-solid">
      <AspectRatio ratio={16 / 9}>
        {/** biome-ignore lint/performance/noImgElement: this is test */}
        <img
          src="/logo_icon_placeholder_light.png"
          alt="test"
          className="h-full w-full rounded-md bg-red-200 object-cover"
        />
      </AspectRatio>
    </div>
  );
}

export default TestAspectRatio;
