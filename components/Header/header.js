import Link from 'next/link'

const NavItem = props =>( 
    <Link href={props.url}><p className="text-xl font-bold text-black px-5 py-1 hover:bg-red-500 rounded transition-colors duration-300">{props.text}</p></Link>
    );

export default function Header() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between p-4">
        <div className="flex items-center">
        <div className="inline-block h-30 w-30 rounded-full ">
        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" width="100" height="100" alt=""/>
        </div>  
        </div>
        <div className="flex mt-4">
          <NavItem url="/posts" text="Explore"/>
          <NavItem url="/Explore" text="Connect" />
        </div>
      </nav>
    </div>
  )
}