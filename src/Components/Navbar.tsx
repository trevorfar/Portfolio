import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-primary-main sticky z-50 top-0 inset-x-0 mx-auto w-80 rounded-xl mt-4 opacity-50">
          <div className="ml-auto text-white flex items-center h-16 justify-center space-x-8">
              <Link href="/#about" className="hover:text-gray-500">About</Link>
              <Link href="/#projects" className="hover:text-gray-500">Projects</Link>
              <Link href="/#skills" className="hover:text-gray-500" >Skills</Link>
              <Link href="/#contact" className="hover:text-gray-500" >Contact</Link>
          </div>
      </nav>
  );
};
export default Navbar;
