type InputProps = {
  placeholder: string;
  type: 'text' | 'number';
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  value?: string | number;
  name: string;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  handleChange,
  value,
  name
}) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    style={{
      background: ' rgba(255, 255, 255, 0.05)',
      borderRadius: '8px',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm"
  />
);
