import { Skeleton } from "@/shadcn-components/ui/skeleton";

const AddToCartModalSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row   md:space-x-3">
      <Skeleton className="lg:w-96 lg:h-96 w-72 h-72 rounded-xl" />
      <div className="md:space-x-2  flex flex-col justify-between     w-72 lg:w-80">
        <Skeleton className="h-6  mt-5" />
        <Skeleton className="h-6 mt-5 " />
        <Skeleton className="h-6 mt-5 " />
        <Skeleton className="h-8 mt-5 " />
        <Skeleton className="h-8  mt-5" />
        <Skeleton className="h-8  mt-5" />
      </div>
    </div>
  );
};

export default AddToCartModalSkeleton;
