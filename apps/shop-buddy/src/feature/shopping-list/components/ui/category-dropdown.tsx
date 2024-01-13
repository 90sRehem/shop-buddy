import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";
import { Select } from "ui";

const options = [
  {
    label: "Padaria",
    value: "padaria",
    icon: <Sandwich className="h-4 w-4 text-yellow-400" />,
  },
  {
    label: "Legume",
    value: "legume",
    icon: <Carrot className="h-4 w-4 text-green-400" />,
  },
  {
    label: "Carne",
    value: "carne",
    icon: <Beef className="h-4 w-4 text-pink-400" />,
  },
  {
    label: "Fruta",
    value: "fruta",
    icon: <Apple className="h-4 w-4 text-orange-400" />,
  },
  {
    label: "Bebida",
    value: "bebida",
    icon: <Milk className="h-4 w-4 text-blue-400" />,
  },
];

type Option = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

type CategoryDropdownProps = {
  options: Option[];
  placeholder: string;
};

export function CategoryDropdown() {
  return (
    <div className="rounded-md shadow-sm flex border border-gray-300 w-full">
      <Select>
        <Select.Trigger className="h-10 text-gray-200 text-sm border border-gray-300 data-[state=open]:border-product-purple-light">
          <Select.Value placeholder="Selecione a categoria" />
        </Select.Trigger>
        <Select.Content className="bg-gray-400 text-gray-100">
          <Select.Group>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="flex items-center justify-between p-1 relative group outline-none"
              >
                <span className="flex gap-2 text-center items-center text-sm ">
                  {option.icon}
                  {option.label}
                </span>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  );
}
