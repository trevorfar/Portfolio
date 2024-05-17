import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-black">
        <div className="border-b border-gray-200">
          <div className="ml-auto text-white flex items-center h-16 justify-center space-x-8 ">
              <Link href="/#about" className="hover:text-gray-500">About</Link>
              <Link href="/#projects" className="hover:text-gray-500">Projects</Link>
              <Link href="/#skills" className="hover:text-gray-500" >Skills</Link>
              <Link href="/#contact" className="hover:text-gray-500" >Contact</Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
