type Props = {
  message: string;
  textPosition?: string;
};

export default function Info({ message, textPosition = "left" }: Props) {
  const testAlign = `text-align-${textPosition}`;

  return <div className={`info ${testAlign}`}>{message}</div>;
}
