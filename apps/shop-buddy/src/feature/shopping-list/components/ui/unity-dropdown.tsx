import { Input, Label, Select } from "ui";

/* 
  states:
  - default
  - focus
  - opened
*/

export function UnityDropdown() {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="unit"
        className="block text-xs font-medium leading-6 text-gray-200"
      >
        Quantidade
      </Label>
      <div className="rounded-md shadow-sm flex border border-gray-300">
        <Input
          type="text"
          name="unit"
          id="unit"
          className="text-gray-100 rounded-none rounded-l-md border-gray-300 focus:border-product-purple-light focus:bg-gray-500"
          placeholder="1"
        />
        <div className="inset-y-0 right-0 flex items-center">
          <Select>
            <Select.Trigger className="text-gray-100 border-gray-300 rounded-none rounded-r-md data-[state=open]:border-product-purple-light">
              <Select.Value placeholder="UN." />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Item value="Un.">Un.</Select.Item>
                <Select.Item value="L">L</Select.Item>
                <Select.Item value="KG">Kg</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
        </div>
      </div>
    </div>
  );
}
