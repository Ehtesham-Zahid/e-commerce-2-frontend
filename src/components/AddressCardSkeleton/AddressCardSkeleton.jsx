import { Skeleton } from "@/shadcn-components/ui/skeleton";

const AddressCardSkeleton = () => {
  return (
    <div className="flex flex-col items-start ">
      <Skeleton className="w-44 h-5 my-2" />
      <Skeleton className="w-96 h-0.5 my-1" />
      <Skeleton className="w-44 h-5 my-1" />{" "}
      <Skeleton className="w-64 h-5 my-1" />{" "}
      <Skeleton className="w-44 h-5 my-1" />
      <Skeleton className="w-32 h-5 my-1" />
      <Skeleton className="w-96 h-0.5 my-1 " />
      <Skeleton className="w-24 h-10 my-2" />
    </div>
  );
};

export default AddressCardSkeleton;
