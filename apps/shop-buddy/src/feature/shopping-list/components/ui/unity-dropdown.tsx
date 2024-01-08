import { Input, Label, Select } from "ui";

/* 
  states:
  - default
  - focus
  - opened
*/

export function UnityDropdown() {
  return (
    <div>
      <Label
        htmlFor="unit"
        className="block text-sm font-medium leading-6 text-gray-200"
      >
        Quantidade
      </Label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <Input
          type="text"
          name="unit"
          id="unit"
          className="text-gray-100"
          placeholder="1"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Select>
            <Select.Trigger className="text-gray-100">
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
