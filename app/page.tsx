// app/page.tsx или pages/index.tsx
import DogSection from "@/components/custom/DogSection";
import Search from "@/components/custom/Search";

type CartItem = {
  id: number;
  quantity: number;
  product: {
    name: string;
  };
};

export default async function Home() {
  return (
    <>
      <div className="pt-2 pl-2 pr-2 pb-3 lg:px-4">
        
        <div className="lg:hidden"> <Search /></div>
        <h1>Войдите в аккаунт</h1>

        <DogSection />
      </div>
    </>
  );
}