type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Функція приймає два об'єкти і повертає новий об'єкт
function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
