import MDEditor from "@uiw/react-md-editor";

interface Props {
  value?: any;
  onChange?: (value: any) => void;
}

export default function Editor({ onChange, value }: Props) {
  return (
    <div className="container">
      <MDEditor value={value} onChange={onChange as any} height={400} />
      {/* <MDEditor.Markdown source={value} /> */}
    </div>
  );
}
