import {
  Checkbox as CheckboxPrimitive,
  cn,
  type CustomCheckboxProps,
} from "ui";

export function Checkbox({ className, ...props }: CustomCheckboxProps) {
  return (
    <div className="flex w-6 h-6 p-1 justify-center items-center">
      <CheckboxPrimitive
        className={cn(
          "border-product-purple-light hover:bg-product-purple-dark data-[state=checked]:bg-product-success data-[state=checked]:border-transparent data-[state=checked]:hover:bg-product-success-light",
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator />
      </CheckboxPrimitive>
    </div>
  );
}
