import { Select } from "ui";
import { Header } from "./header";
import { UnityDropdown } from "./ui/unity-dropdown";

export function ShoppingListLayout() {
  return (
    <div className="w-screen h-screen bg-gray-600 flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-gray-100 font-bold font-['Inter'] text-2xl">
        Lista de Compras
      </h1>
      <div className="flex w-full h-full  gap-3">
        <form>
          <UnityDropdown />
        </form>
      </div>
    </div>
  );
}
