import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
    
    <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50">
      <Image 
      src="https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={900}
      height={800}
      className="w-full h-screen object-cover bg-red-500"/>
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white max-w-sm mx-auto">
   <h2> The Clockmaker&apos;s Secret</h2>
   <p className="px-4 pt-5">
   In the quaint town of Everwhistle, nestled in a lush valley, stood an ancient clock tower. No one in town knew exactly who had built it, but the intricate mechanisms inside it still ticked flawlessly, keeping perfect time for centuries. At the heart of this marvel was Tobias, an elderly clockmaker who had inherited the care of the tower from his father.
   </p>


    </div>
    </main>
  );
}
