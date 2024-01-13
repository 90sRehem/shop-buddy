import { ComponentProps } from "react";
import { Plus } from "lucide-react";

export function AddButton(props: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-product-purple-light hover:bg-product-purple-dark"
      {...props}
    >
      <Plus className="w-6 h-6 text-white" />
      {props.children}
    </button>
  );
}
