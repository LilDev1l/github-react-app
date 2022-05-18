import ReactPaginate from 'react-paginate';
import './style.css';

function Pagination({paginationInfo, pageCount, onChangeCurrentPage}) {
    const handlePageClick = (event) => {
        const currentPage = event.selected + 1;
        onChangeCurrentPage(currentPage);
    };

    return (
        <div className='pagination'>
            <div className='pagination__info'>{paginationInfo}</div>
            <ReactPaginate breakLabel='...'
                           nextLabel=''
                           onPageChange={handlePageClick}
                           marginPagesDisplayed={1}
                           pageRangeDisplayed={3}
                           pageCount={pageCount}
                           previousLabel=''
                           containerClassName='pagination__pages'
                           pageClassName='page__item'
                           pageLinkClassName='page__item'
                           previousClassName='pagination__navigate pagination__navigate_back'
                           nextClassName='pagination__navigate pagination__navigate_forward'
                           activeClassName='page__item_current'/>
        </div>
    );
}

export default Pagination;
