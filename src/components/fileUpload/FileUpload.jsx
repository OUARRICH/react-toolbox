import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import './fileUpload.css';

const FileUpload = ({onChange, selectedFile, label, ...rest}) => {
  return (
    <div className="file-upload-container">
      <input
        type="file"
        onChange={onChange}
        style={{ display: 'none' }}
        {...rest}
      />
      <label htmlFor="file-input" className="file-upload-button">
        <CloudArrowUpIcon className="upload-icon" />
        <span className="file-name">{label}</span>
      </label>
    </div>
  );
};

export default FileUpload;
