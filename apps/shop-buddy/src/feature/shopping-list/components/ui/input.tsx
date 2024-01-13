import { cn, Input, Label, type InputProps } from "ui";

/* 
  states:
  - empty/default 
  - empty/focus
  - filled/default
  - filled/focus
*/

type TextFieldProps = {
  label?: string;
} & InputProps;

export function TextField({ label, className, ...props }: TextFieldProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input
        type="text"
        className={cn(
          "peer order-2 flex h-10 w-full rounded-md border-gray-300 bg-gray-500 text-gray-100 focus:border-product-purple-light",
          className,
        )}
        {...props}
      />
      <Label
        htmlFor="text-field"
        className="text-sm order-1 text-gray-200 peer-focus:text-product-purple-light"
      >
        {label}
      </Label>
    </div>
  );
}
