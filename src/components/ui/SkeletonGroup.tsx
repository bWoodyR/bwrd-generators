import { Skeleton } from "./skeleton";

type SkeletonGroupProps = {
  count?: number;
};

const SkeletonGroup = ({ count = 3 }: SkeletonGroupProps) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="flex flex-col gap-4 ">
      {skeletons.map((skeleton) => {
        return <Skeleton key={skeleton} className="h-4 w-full md:w-1/2" />;
      })}
    </div>
  );
};

export default SkeletonGroup;
