import React, { ChangeEvent, useRef, useState } from 'react'

export default function Index(
  {
    accept, 
    id, 
    name,
    className,
    onChange,
  }: 
  {
    accept: string, 
    id: string, 
    name: string,
    className: string,
    onChange: (event: any) => void
  }) {
  const [FileName, setFileName] = useState("");
  const refInputFile = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
    onChange({
      target: {
        name: event.target.name,
        value: event.target.files?.[0],
      },
    });
  };
  return (
    <div className="input-text">
      <div className="input-group">
      <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={FileName}
          onChange={handleChange}
        />
        <input
          onClick={() => refInputFile.current?.click()}
          defaultValue={FileName}
          placeholder='browse in here'
          className={`form-control ${className}`}
        />
      </div>
    </div>
  )
}
