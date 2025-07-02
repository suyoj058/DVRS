import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FormData {
  vehicleName: string;
  fullName: string;
  email: string;
  phone: string;
  bookingLocation: string;
  address: string;
  fromDate: string;
  toDate: string;
  citizenshipFile: File | null;
  licenseFile: File | null;
}

const RentNow: React.FC = () => {
  const location = useLocation();
  const vehicleNameFromCard = location.state?.vehicleName || '';

  const [formData, setFormData] = useState<FormData>({
    vehicleName: '',
    fullName: '',
    email: '',
    phone: '',
    bookingLocation: '',
    address: '',
    fromDate: '',
    toDate: '',
    citizenshipFile: null,
    licenseFile: null,
  });

  useEffect(() => {
    if (vehicleNameFromCard) {
      setFormData(prev => ({ ...prev, vehicleName: vehicleNameFromCard }));
    }
  }, [vehicleNameFromCard]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Booking submitted successfully!');
    // TODO: Add real submission logic
  };

  return (
    <div style={{ backgroundColor: '#0c1019', minHeight: '100vh', padding: '2rem', color: '#ffffff' }}>
      <h1 style={{ color: '#f97217', textAlign: 'center', marginBottom: '2rem' }}>Rent Now</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Input
          label="Vehicle Name"
          name="vehicleName"
          value={formData.vehicleName}
          onChange={handleChange}
          readOnly
        />
        <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
        <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
        <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
        <Input label="Booking Location" name="bookingLocation" value={formData.bookingLocation} onChange={handleChange} />
        <TextArea label="Full Address" name="address" value={formData.address} onChange={handleChange} />
        <Input label="Begin Date" name="fromDate" value={formData.fromDate} onChange={handleChange} type="date" />
        <Input label="Booking Upto" name="toDate" value={formData.toDate} onChange={handleChange} type="date" />
        <FileInput label="Upload Citizenship Scan" name="citizenshipFile" onChange={handleFileChange} />
        <FileInput label="Upload Driving License Scan" name="licenseFile" onChange={handleFileChange} />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

// Reusable components & styles follow

interface InputProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  readOnly = false,
}) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={!readOnly}
      readOnly={readOnly}
      style={inputStyle}
    />
  </div>
);

interface TextAreaProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={3}
      style={{ ...inputStyle, resize: 'vertical' }}
    />
  </div>
);

interface FileInputProps {
  label: string;
  name: keyof FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ label, name, onChange }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <input
      type="file"
      name={name}
      accept=".jpg,.jpeg,.png,.pdf"
      onChange={onChange}
      required
      style={fileInputStyle}
    />
  </div>
);

// Styles
const formStyle: React.CSSProperties = {
  maxWidth: '500px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle: React.CSSProperties = {
  marginBottom: '0.3rem',
  color: '#f97217',
  fontWeight: 'bold',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  backgroundColor: '#1a1f2b',
  color: '#ffffff',
};

const fileInputStyle: React.CSSProperties = {
  color: '#ffffff',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem',
  backgroundColor: '#f97217',
  color: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '1rem',
};

export default RentNow;
