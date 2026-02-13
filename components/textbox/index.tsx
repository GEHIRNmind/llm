type TextboxProps = {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
};

export default function Textbox({ value, onChange, onEnter }: TextboxProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onEnter?.();
        }
      }}
    />
  );
}
