import Paginator from "./Paginator";

export default {
    title: "Pagination",
    component: Paginator,
    tags: ["autodocs"],
};

const handlePageClick = (event) => {
    console.log(
        `User requested page number ${event.selected}`
    );
};

export const Default = {
    args: {
        nextLabel: "next >",
        pageRangeDisplayed: 3,
        marginPagesDisplayed: 2,
        previousLabel: "< previous",
        pageClassName: "page-item",
        pageLinkClassName: "page-link",
        previousClassName: "page-item",
        previousLinkClassName: "page-link",
        nextClassName: "page-item",
        nextLinkClassName: "page-link",
        breakLabel: "...",
        breakClassName: "page-item",
        breakLinkClassName: "page-link",
        containerClassName: "pagination",
        activeClassName: "active",
        renderOnZeroPageCount: null,
        pageCount: 8,
        onPageChange: handlePageClick,
        pageSizes: [
            {
              text: '10',
              value: 10
            },
            {
              text: '50',
              value: 50
            },
            {
              text: '100',
              value: 100
            }
        ],
        onPageSizeChange: (value) => {console.log(value)},
        currentPageSize: 50
    }
};
