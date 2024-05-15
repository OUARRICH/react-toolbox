import ReactPaginate from 'react-paginate';
import Select from '../select';

import "./paginator.css";

/**
 * This component is based around the library react-paginate. 
 * Link to the documentation: https://www.npmjs.com/package/react-paginate
 */
const Paginator = ({ pageSizes, onPageSizeChange, currentPageSize, ...rest }) => {

  return (
    <div className="paginator">
      <ReactPaginate
        {...rest}
      />
      <div className="paginator__size">
        <Select
          data={pageSizes}
          onChange={onPageSizeChange}
          value={currentPageSize}
        />
      </div>
    </div>
      
  );
}

export default Paginator;
