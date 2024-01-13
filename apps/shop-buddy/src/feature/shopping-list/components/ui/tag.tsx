import { cva, VariantProps } from "class-variance-authority";
import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";
import { Badge, BadgeProps, cn } from "ui";

const tagVariants = cva("h-8 rounded-full gap-2", {
  variants: {
    type: {
      bakery: "bg-product-yellow-dark text-product-yellow",
      vegetable: "bg-product-green-dark text-product-green",
      meat: "bg-product-pink-dark text-product-pink",
      fruit: "bg-product-orange-dark text-product-orange",
      drink: "bg-product-blue-dark text-product-blue",
      default: "bg-gray-300 text-gray-200",
    },
  },
});

const types = {
  bakery: {
    label: "Padaria",
    icon: <Sandwich className={`h-4 w-4 `} />,
  },
  vegetable: {
    label: "Legume",
    icon: <Carrot className={`h-4 w-4 `} />,
  },
  meat: {
    label: "Carne",
    icon: <Beef className={`h-4 w-4 `} />,
  },
  fruit: {
    label: "Fruta",
    icon: <Apple className={`h-4 w-4 `} />,
  },
  drink: {
    label: "Bebida",
    icon: <Milk className={`h-4 w-4 `} />,
  },
  default: {
    label: "Outros",
    icon: null,
  },
} as const;

type TagProps = VariantProps<typeof tagVariants> & BadgeProps;

export function Tag({ type, className, ...props }: TagProps) {
  const Icon = types[type || "default"].icon;
  const label = types[type || "default"].label;
  return (
    <Badge variant="default" className={cn(tagVariants({ type }), className)}>
      {Icon}
      <span>{label}</span>
    </Badge>
  );
}
