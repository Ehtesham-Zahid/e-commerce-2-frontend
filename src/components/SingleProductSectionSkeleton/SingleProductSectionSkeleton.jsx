import { Skeleton } from "@/shadcn-components/ui/skeleton";

const SingleProductSectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mt-10">
      <div className="col-span-1    flex  flex-col md:flex-row lg:col-span-2">
        <div className="flex justify-between items-stretch    md:flex-col md:justify-center   md:w-36 md:mr-5">
          <Skeleton className="max-[390px]:w-24 max-[390px]:h-24 max-[500px]:w-28  max-[500px]:h-28 w-36 h-36  rounded-lg  mb-5" />
          <Skeleton className="max-[390px]:w-24 max-[390px]:h-24 max-[500px]:w-28  max-[500px]:h-28 w-36 h-36  rounded-lg  mb-5" />{" "}
          <Skeleton className="max-[390px]:w-24 max-[390px]:h-24 max-[500px]:w-28  max-[500px]:h-28 w-36 h-36  rounded-lg  mb-5" />
        </div>
        <Skeleton className="md:w-3/4 max-[500px]:h-[400px] max-[640px]:h-[500px] sm:h-[550px] md:h-full" />
      </div>
      <div className="col-span-1  py-4 mt-5">
        <div className="mb-12">
          <Skeleton className="w-44 h-8 mb-2" />
          <Skeleton className="w-16 h-6 mb-6" />
          <Skeleton className="w-16 h-8 mb-6" />
        </div>
        <div className="mb-20">
          <Skeleton className="w-44 h-8 mb-8" />
          <Skeleton className="w-52 h-20 mb-10" />
          <Skeleton className="w-96 h-20 mb-8" />
        </div>
        <div>
          <Skeleton className="w-full h-16 mb-10" />
        </div>
      </div>
    </div>
    //   {/* <div className="flex items-center">
    //     <div>
    //       <Skeleton className="w-36 h-36 mt-5" />
    //       <Skeleton className="w-36 h-36 mt-5" />
    //       <Skeleton className="w-36 h-36 mt-5" />
    //     </div>
    //     <Skeleton className="w-[450px] h-[450px] mt-5 ms-5" />
    //   </div>
    //   <div></div> */}
  );
};

export default SingleProductSectionSkeleton;
