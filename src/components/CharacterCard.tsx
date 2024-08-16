import { ItemGetCharacters } from "../interfaces";

interface Props {
  character: ItemGetCharacters;
}

export const CharacterCard = ({ character }: Props) => {
  const { ki, name, gender, image } = character;

  return (
    <article className="bg-white rounded-lg">
      <img
        src={image}
        alt="image"
        className="w-[200px] mx-auto object-contain aspect-[9/16]"
      />
      <div className="p-4">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {gender}
        </p>
        <p>
          <span className="font-semibold">Ki:</span> {ki}
        </p>
      </div>
    </article>
  );
};
