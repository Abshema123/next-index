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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id omnis nobis blanditiis fugit inventore dolor optio doloremque exercitationem quae, eos quo repellendus dicta ipsum! Aliquid possimus, repellat vero maiores earum corporis, voluptatem repellendus nostrum eum fugit illo ipsum qui officiis!
    </div>
    </main>
  );
}
