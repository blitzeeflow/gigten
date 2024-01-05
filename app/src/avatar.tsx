export interface AvatarProps {
  image: string;
}
export default function Avatar(props: AvatarProps) {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="avatar"
    ></div>
  );
}
