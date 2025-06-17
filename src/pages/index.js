import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <h1>Bienvenido</h1>
      <DynamicComponent />
    </>
  );
}
