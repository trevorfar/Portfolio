import Link from "next/link";

interface ProjectListingProps {
    title: string
}
const ProjectListing = ({ title }: ProjectListingProps) => {
  return (
    <>
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden
       rounded-xl text-gray-600">
        <div className="line-clamp-1 flex flex-col space-y-1">
        <p className="text-center py-2">{title} 
        {/* TODO: Figure out how to make the link to the right */}
        <Link href="#" className="ml-auto">O</Link> 
        </p>
        </div>
      </div>
    </>
  );
};
export default ProjectListing;
