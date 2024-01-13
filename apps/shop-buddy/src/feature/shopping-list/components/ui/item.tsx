import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Button } from "ui";
import { Checkbox } from "./checkbox";
import { Tag } from "./tag";

export function Item() {
  const [checked, setChecked] = useState(false);
  return (
    <label
      htmlFor="item"
      className={`group flex w-full h-[4.25rem] bg-gray-400 p-4 justify-between items-center rounded-lg border border-solid border-gray-300 text-gray-100 text-sm md:min-w-[39.75rem] ${checked ? "bg-gray-500" : "bg-gray-400"
        }`}
    >
      <div className="flex gap-4 items-center">
        <Checkbox
          className="peer"
          id="item"
          checked={checked}
          onCheckedChange={(e) => {
            setChecked(e as boolean);
          }}
        />
        <div className="flex flex-col justify-center items-start gap-0 peer-[data-state=unchecked]:bg-white">
          <span className={`${checked ? "line-through" : ""}`}>Maçã</span>
          <span className="text-xs text-gray-200">6 unidades</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Tag type="fruit" />
        <Button variant="link" className="text-gray-100">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </label>
  );
}
